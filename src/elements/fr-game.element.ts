import { LitElement, html, customElement, property } from "lit-element";
import { IPlayer, TrackTile, Row, IRider, TrackTileType, FieldType, RiderWithPosition } from "../resources/models";
import { initiatePlayer, initiateTrack, shuffle } from '../resources/game-helpers';

import './fr-board.element';

@customElement("fr-game")
export class FrGameElement extends LitElement {
    initiatePlayers(...players) {
        if(!this.track) {
            this.initiateTrack();
        }
        this.players = players.map((name, i) => initiatePlayer(name, i));

        takeStartPositions(this.players, this.track);
        selectRandomCards(this.players);

    }
    initiateTrack() {
        this.track = initiateTrack();
    }

    move() {
        [...this.track].reverse().forEach((tile, trackIndex) => {
            [...tile.rows].reverse().forEach((row, rowIndex) => {
                row.fields.forEach(riderInField => {
                    if(riderInField && riderInField.selectedCard) {
                        let realTrackIndex = this.track.length-trackIndex-1; //because we reversed it 
                        let realRowIndex = this.track[realTrackIndex].rows.length - rowIndex-1; //because we reversed it 
                        this.moveRider(realTrackIndex, realRowIndex, riderInField.selectedCard, riderInField);
                    }
                });
            });
        })

        this.track = [...this.track];

        setTimeout(_=> {
            
            this.applySlipstreaming();

            this.track = [...this.track];
            this.assignExhaustionCards();

            //todo: this is only for test
            selectRandomCards(this.players);
        }, 2000);

        
    }

    moveRider(trackIndex:number, rowIndex: number, count: number, rider:IRider, descendMinMovesEnforced=false, slipstream=false, mark?: FieldType) {

        if((rider.selectedCard === count || slipstream) && !descendMinMovesEnforced) {
            //this is the first move - remove player from board
            const fieldIndex = this.track[trackIndex].rows[rowIndex].fields.findIndex(r => r === rider);
            this.track[trackIndex].rows[rowIndex].fields[fieldIndex] = null;
        }

        if(count > 0) {
            //move one step forward and call again
            let newTrackIndex, newRowIndex;
            let newCount = count-1;
            const moveCount = rider.selectedCard! - count + 1;

            const currentFieldType = this.track[trackIndex].rows[rowIndex].fieldType;

            let newMark: FieldType = mark ? mark : currentFieldType;

            if (mark !== currentFieldType) {
                if (currentFieldType === "mountain" || mark === "mountain") {
                    newMark = "mountain";
                }
                else if (currentFieldType === "descend" && moveCount === 1) {
                    newMark = "descend"
                }
            }
            mark = newMark;

            if(rowIndex+1 <= this.track[trackIndex].rows.length - 1) {
                newRowIndex = rowIndex+1;
                newTrackIndex = trackIndex;
            } else {
                newTrackIndex = trackIndex+1
                newRowIndex = 0;
                // handle overflowing the last card (after the finish line)...
            }

            if(mark === "mountain" && moveCount >= 5) {
                // if you encounter a mountain-field, you cannot move more than 5 fields this round
                newCount = 0;
                console.log('moves limited to 5 because of mountain')
            }
            if(mark === "descend" && !descendMinMovesEnforced && rider.selectedCard! < 5) {
                descendMinMovesEnforced = true;
                newCount = 4;
                console.log('downhill boost added');
            }

            if(newCount === 0) {
                 //this is the last move - put down the player
                const fieldIndex = this.track[newTrackIndex].rows[newRowIndex].fields.findIndex(r => r === null);
                if(fieldIndex === -1) {
                    //crap - the row is filled - move back somehow!
                    //todo: move back in stead...
                    console.log('no empty field - rider removed', rider)
                }
                this.track[newTrackIndex].rows[newRowIndex].fields[fieldIndex] = rider;

                if(!slipstream) {
                    rider.playedCards.push(rider.selectedCard!);
                    rider.selectedCard = null;
                }

            } else {
                this.moveRider(newTrackIndex, newRowIndex, newCount, rider, descendMinMovesEnforced, false, newMark);
            }
        }

    }

    assignExhaustionCards() {

        const flatRowsList: Row[] = [];
        this.track.forEach(tile => {
            flatRowsList.push(...tile.rows);
        });
    
        flatRowsList.reverse();
    
        let lastRowWasEmpty = false;
        flatRowsList.forEach(row => {
            if(row.fields[0]) {
                if(lastRowWasEmpty) {
                    row.fields.filter(riderOrNull => !!riderOrNull).forEach(rider => {
                        // todo: consider if exhaustion cards should be recognizeable from the regular 2's...
                        rider!.recycledCards.push(2);
                    });
                }
                lastRowWasEmpty = false;
            } else {
                lastRowWasEmpty = true;
            }
        });
    }
    
    applySlipstreaming() {
    
        let pack: RiderWithPosition[] = [];
        let lastRowWasEmpty = false;
    
        let startOver = false;

        this.track.forEach((tile, trackIndex) => {
            if(startOver) return;
            tile.rows.forEach((row, rowIndex) => {
                if(startOver) return;
                const rowRiders = row.fields
                    .filter(riderOrNull => riderOrNull && row.fieldType !== "mountain")
                    .map(rider => {
                        return {
                            rider,
                            trackIndex,
                            rowIndex
                        }
                    }) as RiderWithPosition[];
    
                if(rowRiders.length === 0) {
                    if(lastRowWasEmpty) {
                        pack = [];
                    }
                    lastRowWasEmpty = true;
                } else {
                    if(lastRowWasEmpty && pack.length) {

                        if(row.fieldType !== "mountain") {
                            //slipstream applies
                            [...pack].reverse().forEach(riderWithPosition => {
                                this.moveRider(riderWithPosition.trackIndex, riderWithPosition.rowIndex, 1, riderWithPosition.rider, false, true);
                            });
                            startOver = true;
                        } else {
                            pack = [];
                        }
                    } else {
                        pack.push(...rowRiders);
                    }
                    lastRowWasEmpty = false;
                }
            });
        });

        if(startOver) {
            this.track = [...this.track];
            setTimeout(_=> {
                this.applySlipstreaming();
            }, 1000);
        }
    };
    
    @property()
    players: IPlayer[] = [];

    @property()
    track: TrackTile[];

    @property()
    activePlayerIndex = 0;
    
    render() {
        return html`
            <fr-board .tracks=${this.track}></fr-board>
        `;
    }
}


const takeStartPositions = (players: IPlayer[], track: TrackTile[]) => {
    players.forEach(player => {
        player.riders.forEach(rider => {
            let hasPosition = false;
            for (let trackTile of track) {
                if(hasPosition) break;
                for (let row of trackTile.rows) {
                    if(hasPosition) break;
                    for (let i=0; i<row.fields.length; i++) {
                        if(hasPosition) break;
                        if(!row.fields[i]) {
                            row.fields[i] = rider;
                            hasPosition = true;
                        }
                    }
                }
            }
        });
    });
}


const selectRandomCards = (players: IPlayer[]) => {
    players.forEach(player => {
        player.riders.forEach(rider => {
            rider.selectedCard = shuffle([...rider.cards])[0];
        });
    })
}


import { LitElement, html, customElement, property } from "lit-element";
import { IPlayer, TrackTile, Row, IRider, TrackTileType, FieldType } from "../resources/models";
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
        selectRandomFirstCards(this.players);

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

        // calculate slipstream here

        this.track = [...this.track];
    }

    moveRider(trackIndex:number, rowIndex: number, count: number, rider:IRider, mark?: FieldType) {
        console.log(trackIndex, rowIndex, count, rider);
        if(rider.selectedCard === count) {
            //this is the first move - remove player from board
            const fieldIndex = this.track[trackIndex].rows[rowIndex].fields.findIndex(r => r === rider);
            this.track[trackIndex].rows[rowIndex].fields[fieldIndex] = null;
        }

        if(count > 0) {
            //move one step forward and call again

            let newTrackIndex, newRowIndex;
            let newCount = count-1;
            let newMark = mark ? mark : this.track[trackIndex].rows[rowIndex].fieldType;

            if(rowIndex+1 <= this.track[trackIndex].rows.length-1) {
                newRowIndex = rowIndex+1;
                newTrackIndex = trackIndex;
            } else {
                newTrackIndex = trackIndex+1
                newRowIndex = 0;
                // handle overflowing the last card...
            }

            //add logic to account for uphill and downhill max/min moves
            //todo



            if(newCount === 0) {
 
                //this is the last move - put down the player
                const fieldIndex = this.track[newTrackIndex].rows[newRowIndex].fields.findIndex(r => r === null);
                if(fieldIndex === -1) {
                    //crap - the row is filled - move back somehow!
                    //todo
                    console.log('no empty field - rider removed', rider)
                }
                this.track[newTrackIndex].rows[newRowIndex].fields[fieldIndex] = rider;
            } else {
                this.moveRider(newTrackIndex, newRowIndex, newCount, rider, newMark);
            }
        }

    }





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



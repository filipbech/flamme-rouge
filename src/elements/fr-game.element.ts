import { LitElement, html, customElement, property } from "lit-element";
import { IPlayer, TrackTile } from "../resources/models";
import { initiatePlayer, initiateTrack } from '../resources/game-helpers';

import './fr-board.element';

@customElement("fr-game")
export class FrGameElement extends LitElement {
    initiatePlayers(...players) {
        this.players = players.map((name, i) => initiatePlayer(name, i));
    }
    initiateTrack() {
        this.track = initiateTrack();
    }
    @property()
    players: IPlayer[] = [];

    @property()
    track: TrackTile[];

    @property()
    activePlayerIndex = 0;
    
    render() {
        return html`
            This is an actual game...<br/>

            ${this.players[this.activePlayerIndex].name} is playing...

            <fr-board .tracks=${this.track}></fr-board>
        `;
    }
}
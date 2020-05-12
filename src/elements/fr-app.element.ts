import { LitElement, html, customElement, property } from "lit-element";
import { FrGameElement } from "./fr-game.element";
import './fr-game.element';

@customElement("fr-app")
export class FrAppElement extends LitElement {
    game: FrGameElement;
 
    @property()
    playerCount = 2;

    onSubmit(e) {
        e.preventDefault();
        this.game = document.createElement('fr-game') as FrGameElement;
        this.game.initiatePlayers(...new FormData(e.target).values());
            
        return false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.game = document.createElement('fr-game') as FrGameElement;
        this.game.initiatePlayers('Oliver', 'Christoffer', 'Filip');
        this.game.initiateTrack();
    }

    render() {
        return html`
            ${this.game 
                ? this.game
                : html`
                    Start game<br/>
                    <form @submit=${this.onSubmit}>
                        <select @change=${e => this.playerCount = +e.target.value}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        <select>

                        ${ new Array(this.playerCount).fill("").map((_, i)=> html`
                            <input name="playerName[]"><br/>
                        `)}
                        <button>Start</button>
                    </form>
                `
            }    
        `;
    }
}
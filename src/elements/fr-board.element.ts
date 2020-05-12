import { LitElement, html, customElement, property, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';

import { TrackTile } from "../resources/models";


@customElement("fr-board")
export class FrBoardElement extends LitElement {
    
    public static styles = [css`
        :host {
            display:block;
            white-space:nowrap;
        }

        .tile {
            display:inline-block;
            border:1px solid #000;
        }
        .row {
            display:inline-block;
            border:1px solid #333;
        }
        .field {
            display:block;
            border:1px solid #666;
            width:30px;
            height:10px;
        }
        .mountain {
            border-color:red;
        }
        .descend {
            border-color:blue;
        }
        .start {
            border-right: 3px solid green;
        }
        .goal {
            border-right:3px solid yellow;;
        }

        .red {
            color:red;
        }
        .blue {
            color:blue;
        }
        .green {
            color:green;
        }
        .black {
            color:black;
        }
    `]; 
        
    @property()
    tracks: TrackTile[];

    render() {
        return html`
            ${this.tracks.map(tile => html`
                <div class="tile">
                    ${tile.rows.map((row, index) => html`
                        <div class=${classMap({
                            row: true,
                            start: tile.type === 'start' && tile.startAfter === index+1,
                            goal: tile.type === 'goal' && tile.goalAfter === index+1
                        })}>
                            ${row.fields.map(rider => {
                                const classes = {
                                    field: true
                                };
                                classes[row.fieldType] = true;
                                if (rider) {
                                    classes[rider.color] = true;
                                }
                                return html`
                                    <div class=${classMap(classes)}>
                                        ${rider ? rider.type : '***'}
                                    </div>
                                `
                            })}
                        </div>
                    `)}
                </div>
            `)}
        `;
    }

}
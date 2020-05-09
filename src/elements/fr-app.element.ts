import { LitElement, html, customElement } from "lit-element";

@customElement("fr-app")
export class FrAppElement extends LitElement {
    render() {
        return html`
            Game starts here...
        `;
    }
}
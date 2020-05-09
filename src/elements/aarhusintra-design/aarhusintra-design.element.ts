import { LitElement, html, customElement, css, property } from "lit-element";
import { skyLine } from '../../skyline';

const styles = `
#aarhusdesign-lOCIseWHTh {
    position:fixed;
    top:-2%;
    left:0;
    right:0;
    opacity:0.1;
    height:325px;
}
#aarhusdesign-lOCIseWHTh svg {
    position:absolute;
    top:0;
    left:50%;
    width:160%;
    max-width:3000px;
    transform:translateX(-50%);
    fill:currentColor;
    max-height:325px;
}
clb-app > div > main {
    position:relative;
    padding-top:100px;
    padding-top: min(7%, 130px);
}
@media (max-width: 767px) { 
    #aarhusdesign-lOCIseWHTh svg {
        width:180%;
    }
    clb-app > div > main {
        padding-top: 10%;
    }
}
`;

declare global {
    interface Window { colibo: any; }
}

@customElement("aarhusintra-design")
export class AarhusintraDesignElement extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        const container = document.createElement('div');
        container.innerHTML = skyLine;
        container.id = 'aarhusdesign-lOCIseWHTh';

        const styleEle = document.createElement('style');
        styleEle.innerHTML = styles;

        document.body.appendChild(styleEle);
        document.body.insertBefore(container, document.body.firstChild);

    }
}
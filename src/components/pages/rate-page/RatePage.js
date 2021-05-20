import { LitElement, html } from 'lit-element';

export class RatePage extends LitElement {
  render() {
    return html` <rate-anime> </rate-anime> `;
  }
}

customElements.define('rate-page', RatePage);
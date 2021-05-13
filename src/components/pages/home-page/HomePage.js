import { LitElement, html } from 'lit-element';

export class HomePage extends LitElement {
  render() {
    return html`
      <layout-page>
        <anime-lister></anime-lister>
      </layout-page>
    `;
  }
}

customElements.define('home-page', HomePage);

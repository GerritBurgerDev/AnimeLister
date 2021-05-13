import { LitElement, html } from 'lit-element';

export class App extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>

      <slot></slot>
    `;
  }
}

customElements.define('anime-lister-app', App);

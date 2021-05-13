import { LitElement, html } from 'lit-element';

export class LayoutPage extends LitElement {
  render() {
    return html`
      <nav-bar></nav-bar>
      <slot></slot>
      <footer></footer>
    `;
  }
}

customElements.define('layout-page', LayoutPage);

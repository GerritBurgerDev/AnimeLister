import { LitElement, html, css } from 'lit-element';

export class NavBar extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  static get styles() {
    return css`
      nav {
        display: flex;
        padding-right: 1rem;
        justify-content: space-between;
        align-items: center;
      }
    `;
  }

  constructor() {
    super();
    this.items = [
      { name: 'Link 1', link: '#' },
      { name: 'Link 2', link: '#' },
    ];
  }

  render() {
    return html`
      <nav>
        <app-menu .menuItems=${this.items}></app-menu>
        <slot></slot>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);

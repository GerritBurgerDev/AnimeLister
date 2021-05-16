import { LitElement, html } from 'lit-element';

export class NavBar extends LitElement {
  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = [
      { name: 'Link 1', link: '#' },
      { name: 'Link 2', link: '#' },
      { name: 'Login', link: '/login' },
    ];
  }

  render() {
    return html` <app-menu .menuItems=${this.items}></app-menu> `;
  }
}

customElements.define('nav-bar', NavBar);

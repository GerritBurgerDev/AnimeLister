import { LitElement, html } from 'lit-element';

export class NavBar extends LitElement {
  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();
    this.items = [
      { name: 'Link 1', link: '#'},
      { name: 'Link 2', link: '#'}
    ]
  }

  render() {
    return html`
      <app-menu slot .menuItems=${this.items}></app-menu>
    `;
  }
}

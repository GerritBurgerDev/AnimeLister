import { LitElement, html, css } from 'lit-element';

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

  static get styles() {
    return [
      css`
        ul {
          position: fixed;
          width: 100%;
          height: 50px;
          list-style-type: none;
          margin: 0 50px 0 0;
          padding-top: 5px;
          padding-bottom: 5px;
          box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.75);
          background-color: white;
        }

        li {
          float: left;
        }

        .logo {
          position: relative;
          left: -40px;
        }

        .menu-container {
          float: right;
        }

        .menu {
          position: relative;
          right: 50px;
        }
      `
    ];
  }

  render() {
    return html`
      <ul>
        <li class="logo-container">
          <img class="logo" src="assets/img/logo.png" alt="">
        </li>
        <li class="menu-container">
          <app-menu class="menu" .menuItems=${this.items}></app-menu>
        </li>
      </ul>
    `;
  }
}

customElements.define('nav-bar', NavBar);

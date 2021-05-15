import { LitElement, html, css } from 'lit-element';

export class AppSearchBar extends LitElement {
  static get styles() {
    return [
      css`
        input[type=text] {
          width: 275px;
          box-sizing: border-box;
          border: 2px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          background-color: white;
          background-image: url('assets/images/search-icon.png');
          background-position: 10px 10px;
          background-size: 20px;
          background-repeat: no-repeat;
          padding: 12px 20px 12px 40px;
        }
      `
    ];
  }

  render() {
    return html`
      <form>
        <input type="text" name="search" placeholder="Search..">
      </form>
    `;
  }
}

customElements.define('app-search-bar', AppSearchBar);

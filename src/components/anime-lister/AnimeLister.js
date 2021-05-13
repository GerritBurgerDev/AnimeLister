import { LitElement, html, css } from 'lit-element';

export class AnimeLister extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--anime-lister-background-color);
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'AnimeLister';
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>

        <p>Edit <code>src/AnimeLister.js</code> and save to reload.</p>
      </header>

      <app-card cardTitle="Card Title"></app-card>
    `;
  }
}

customElements.define('anime-lister', AnimeLister);

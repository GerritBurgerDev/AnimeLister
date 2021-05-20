import { LitElement, html, css } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class AppAnimeDetails extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subTitle: { type: String },
      description: { type: String },
      imageUrl: { type: String },
    };
  }

  constructor() {
    super();
    console.log(this);
  }

  static get styles() {
    return [
      Fontawesome,
      css`
        .flex-container {
          display: flex;
          background-color: lightgray;
          margin-top: 10px;
          width: 100vw;
          opacity: 0.9;
          margin-top: 75px;
        }
        .img-details {
          height: auto;
          margin: 10px;
          width: 400px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .div-layout {
          margin-left: 5px;
          margin-right: 100px;
        }

        h2 {
          font-size: 50px;
          font-weight: bold;
        }

        h3 {
          font-size: 40px;
          font-weight: bold;
        }

        p {
          font-size: 25px;
          font-weight: bold;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="flex-container">
        <div>
          <img class="img-details" src=${this.imageUrl} alt="" />
        </div>
        <div class="div-layout">
          <h2>${this.title}</h2>
          <h3>${this.subTitle}</h3>
          <p>${this.description}</p>
          <rate-anime id = ${this.id}></rate-anime>
        </div>
      </div>
    `;
  }
}

customElements.define('app-anime-details', AppAnimeDetails);

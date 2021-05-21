import { LitElement, html, css } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class AnimeDetails extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      title: { type: String },
      subTitle: { type: String },
      description: { type: String },
      imageUrl: { type: String },
    };
  }

  static get styles() {
    return [
      Fontawesome,
      css`
        .flex-container {
          margin-top: 75px;
          display: flex;
          background-color: lightgray;
          width: 100%;
          opacity: 0.9;
        }

        .img-details {
          height: auto;
          margin: 10px;
          width: auto;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .div-layout {
          position: relative;
          top: -40px;
          margin-left: 25px;
          margin-right: 100px;
        }

        h1.title {
          font-size: 50px;
          margin-bottom: 0;
        }

        h2.subtitle {
          font-size: 40px;
          margin-top: 10px;
        }

        p.description {
          margin-top: 10px;
          font-size: 30px;
          line-height: 30px;
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="flex-container">
        <aside>
          <img class="img-details" src=${this.imageUrl} alt="" />
        </aside>
        <section class="div-layout">
          <h1 class="title">${this.title}</h1>
          <h2 class="subtitle">${this.subTitle}</h2>
          <p class="description">${this.description}</p>
          <rate-anime id=${this.id}></rate-anime>
        </section>
      </section>
    `;
  }
}

customElements.define('anime-details', AnimeDetails);

import { LitElement, html, css } from 'lit-element';

export class AnimeDetailsPage extends LitElement {
  async onBeforeEnter(context) {
    const { id } = context.params;
    const response = await fetch(
      `https://anime-test.herokuapp.com/animedata/${id}`
    );
    const [data] = await response.json();

    this.id = data.animeid;
    this.imageUrl = data.imageurl;
    this.title = data.title;
    this.subtitle = data.studio;
    this.description = data.description;
    this.backgroundUrl = data.backgroundurl;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
      }

      .img-background {
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(8px);
        -webkit-filter: blur(8px);
        background-image: var(--bgimg);
        margin-top: 75px;
      }

      .page-content {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin-top: 10px;
      }
    `;
  }

  render() {
    return html`
      <div
        style="--bgimg: url(${this.backgroundUrl})"
        class="img-background"
      ></div>
      <div class="page-content">
        <anime-details
          id = ${this.id}
          imageUrl=${this.imageUrl}
          title=${this.title}
          subTitle=${this.subtitle}
          description=${this.description}
        >
        </anime-details>
      </div>
    `;
  }
}

customElements.define('anime-details-page', AnimeDetailsPage);

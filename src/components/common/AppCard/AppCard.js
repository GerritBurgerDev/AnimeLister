import { LitElement, html } from 'lit-element';

export class AppCard extends LitElement {
  static get properties() {
    return {
      cardTitle: { type: String },
      cardSubTitle: { type: String },
      cardDescription: { type: String },
      cardActionLink: { type: String },
      cardImageUrl: { type: String },
    };
  }

  render() {
    return html`
      <div class="card">
        <div class="card-image">
          <img src=${this.cardImageUrl} alt="" />
          <span>${this.cardTitle}</span>
        </div>
        <div class="card-content">
          <p>${this.cardDescription}</p>
        </div>
        <div class="card-footer">
          <a href=${this.cardActionLink}>SEE MORE</a>
          <span></span>
          <i class="fab fa-html5"></i>
        </div>
      </div>
    `;
  }
}

customElements.define('anime-card', AppCard);

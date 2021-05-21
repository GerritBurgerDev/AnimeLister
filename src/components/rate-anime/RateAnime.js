import { LitElement, html, css } from 'lit-element';

export class RateAnime extends LitElement {
  static get properties() {
    return {
      animeId: { type: Number },
    };
  }

  constructor() {
    super();
    this.rateLevel = 0;
  }

  static get styles() {
    return css`
      .star {
        width: 50px;
        height: 50px;
        margin-right: 2px;
      }

      #submit {
        padding: 10px;
        font-size: 120%;
        position: absolute;
        margin-left: 30px;
        margin-top: 10px;
        border: 0;
        box-shadow: rgb(0 0 0 / 25%) 0px 2px 5px 0px, rgb(0 0 0 / 21%) 0px 5px 25px 0px
      }

      #submit:hover {
        transform: scale(1.1);
        background-color: rgba(217, 217, 217, 0.73);
      }

      section {
        display: inline-block;
      }
    `;
  }

  updateRateLevel(e) {
    this.rateLevel = e.target.id;
  }

  submitRating() {
    fetch('https://anime-test.herokuapp.com/addRating', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        animeid: this.animeId,
        rating: this.rateLevel,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return html`
      <section class="container rate">
        <img
          class="star"
          id="1"
          src="assets/images/star.png"
          alt="star rating 1"
          onclick="ratingLevel(event, 1)"
          @click=${this.updateRateLevel}
        />
        <img
          class="star"
          id="2"
          src="assets/images/star.png"
          alt="star rating 2"
          onclick="ratingLevel(event, 3)"
          @click=${this.updateRateLevel}
        />
        <img
          class="star"
          id="3"
          src="assets/images/star.png"
          alt="star rating 3"
          onclick="ratingLevel(event, 5)"
          @click=${this.updateRateLevel}
        />
        <img
          class="star"
          id="4"
          src="assets/images/star.png"
          alt="star rating 4"
          onclick="ratingLevel(event, 7)"
          @click=${this.updateRateLevel}
        />
        <img
          class="star"
          id="5"
          src="assets/images/star.png"
          alt="star rating 5"
          onclick="ratingLevel(event, 9)"
          @click=${this.updateRateLevel}
        />
        <button
          id="submit"
          onclick="ratingLevel(event, 0)"
          @click=${this.submitRating}
        >
          Submit Review
        </button>
      </section>
    `;
  }
}

customElements.define('rate-anime', RateAnime);

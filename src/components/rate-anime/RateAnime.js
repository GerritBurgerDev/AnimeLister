import { LitElement, html, css } from 'lit-element';

export class RateAnime extends LitElement {

    constructor() {
        super();
        this.animeId;
        this.rateLevel;
    }

    static get styles() {
        return css`
        .container {
            width: 50%;
            margin-left: 25%;
            margin-right: 25%;
        }
        
        .star {
            width: 50px;
            height: 50px;
            margin-right: 2px;
        }

        #submit{
            padding: 10px;
            font-size: 120%;
            background-color: darkgreen;
            color: white;
            position: absolute;
            margin-left: 30px;
            margin-top: 5px;
        }

        section {
            display: inline-block;
        }
        `;
      }

    updateRateLevel(e) {
        this.rateLevel = e.target.id;
    }

    submitRating(){
        fetch('https://anime-test.herokuapp.com/addRating', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                animeid: this.animeId,
                rating: this.rateLevel,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        }).catch(err => {
            alert(err);
        });
    }

    render() {
        return html`
            <section class="container rate">
                    <h4>Choose a Rating</h4>
                    <img class="star" id="1" src="assets/images/star.png" alt="star rating 1" onclick="ratingLevel(1)" @click=${this.updateRateLevel}>
                    <img class="star" id="2" src="assets/images/star.png" alt="star rating 2" onclick="ratingLevel(2)" @click=${this.updateRateLevel}>
                    <img class="star" id="3" src="assets/images/star.png" alt="star rating 3" onclick="ratingLevel(3)" @click=${this.updateRateLevel}>
                    <img class="star" id="4" src="assets/images/star.png" alt="star rating 4" onclick="ratingLevel(4)" @click=${this.updateRateLevel}>
                    <img class="star" id="5" src="assets/images/star.png" alt="star rating 5" onclick="ratingLevel(5)" @click=${this.updateRateLevel}>
                    <button id="submit" @click=${this.submitRating}>Submit Review</button>
            </section>
        `;
      }
}
    
customElements.define('rate-anime', RateAnime);
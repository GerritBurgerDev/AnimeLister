import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

export class RateAnime extends LitElement {
  static get properties() {
    return {
        animeId: { type: String },
        reviewer: { type: String },
        comment: { type: String },
        rateLevel: { type: String },
    };
  }

  static get styles() {
    return css`
    .container {
        min-width: 700px;
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
    }
    
    .anime {  
        padding: 50px 0 30px 0;
    }
    
    .star {
        width: 20px;
        height: 20px;
        margin-right: 2px;
        padding-bottom: 50px;
    }
    
    .current-rate {
        margin-top: -150px;
        width: 15%;
        text-align: center;
        padding: 1px 5px;
        margin-right: 3%;
        margin-left: 3%;
        background:wheat
    }
    
    .rate {
        float: left;
    }
    
    .comment {
        width: 70%;
        padding: 0 20px 20px 20px;
    }
    
    
    section {
        display: inline-block;
    }
    
    #name {
        margin-top: 25px;
        margin-left: -130px;
    } 
    
    #comment {
        width: 60%;
        margin-top: 30px;
        margin-left: 220px;
        margin-bottom: 20px;
        display: block;
    }
    
    #cancel {
        margin-right: 45px;
        margin-left: 45px;
    }
    
    figcaption {
        font-size: large;
        font-weight: bold;
        font-style: oblique;
    }

    .comments {
        width: 100%;
        padding: 5%;
        border: wheat 2px solid;
    }
    
    .commentp {
        padding-left: 30px;
    }
    `;
  }

    constructor() {
        super();
        this.loadAnimeData();
        // this.animeUrl = "https://static.bunnycdn.ru/i/cache/images/b/bf/bf388231ecfe39a7f43d88b34de879c7.jpg";
        // this.animeId = "anime1";
        // this.animeTitle = "It's about to go up";
        // this.currentRate = 4.8;
        this.comments = [
            {
                name: 'Thami',
                comment: 'This is a lovely comment'
            },
            {
                name: 'Thami',
                comment: 'This is a lovely comment'
            },
            {
                name: 'Thami',
                comment: 'This is a lovely comment'
            }
        ]; 
    }

    loadAnimeData (){
        fetch('https://localhost:44351/home/listanime/', {mode: 'no-cors'})
        .then(response => response.json())
        .then(json => {
            this.animeUrl = json.imageurl;
            this.animeId = json.animeid;
            this.animeTitle = json.title;
            this.description = json.description;
            this.currentRate = json.rating;})
        .catch(err => {console.log(err)});
    }

    updateFormValue(e) {
        let id = e.target.id;
        if (id == "name")
            this.reviewer = e.target.value;
        else if (id == "comment")
            this.comment = e.target.value;
        else
            this.rateLevel = id;
    }

    cancel(){
        Router.go('/');
    }

    postRate(){
        fetch('https://anime-test.herokuapp.com/addRating', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                animeid: this.animeId,
                googleid: 2,
                rating: this.rateLevel,
                reviewer: this.reviewer,
                comment: this.comment
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        }).then(data => {
            console.log(data);
            // Router.go('/');
        }).catch(err => {
            console.log(err);
            // Router.go('/');
        });
    }

    submitRating(){
        if (this.reviewer === undefined)
            alert("Please fill in your name");
        else if (this.comment === undefined)
            alert("Please fill in the comment");
        else if (this.rateLevel === undefined)
            alert("Please choose rating");
        else {
            this.postRate();
        }
    }

  render() {
    return html`
        <div class="search-and-filter-container">
          <app-search-bar></app-search-bar>
        </div>

        <figure>
            <img id="${this.animeId}" class="container anime" src="${this.animeUrl}")>
            <figcaption class="container">
                ${this.animeTitle}
                <p>${this.description}</p>
            </figcaption>
        </figure>
        <section class="container">
            <section class="current-rate" >
                <h3>Average Rating</h3>
                <span style="font-size: 300%;">${this.currentRate}</span>
            </section>
            <section class="comment">
                <section class="rate">
                    <h4>Choose a Rating</h4>
                    <img class="star" id="1" src="assets/images/star.png" alt="star rating 1" onclick="ratingLevel(1)" @click=${this.updateFormValue}>
                    <img class="star" id="2" src="assets/images/star.png" alt="star rating 2" onclick="ratingLevel(2)" @click=${this.updateFormValue}>
                    <img class="star" id="3" src="assets/images/star.png" alt="star rating 3" onclick="ratingLevel(3)" @click=${this.updateFormValue}>
                    <img class="star" id="4" src="assets/images/star.png" alt="star rating 4" onclick="ratingLevel(4)" @click=${this.updateFormValue}>
                    <img class="star" id="5" src="assets/images/star.png" alt="star rating 5" onclick="ratingLevel(5)" @click=${this.updateFormValue}>
                    <input type="text" name="name" id="name" placeholder="Your name" @change=${this.updateFormValue}>
                </section>
                <textarea  name="comment" id="comment"rows="4" maxlength="500" placeholder="Tell us what you think about this Anime." @change=${this.updateFormValue}></textarea>
                <button id="cancel" @click=${this.cancel}>Cancel</button>
                <button id="submit" @click=${this.submitRating}>Submit Review</button>
            </section>
            <section class="comments">
                ${this.comments.map(
                    comment =>
                        html `
                            <label for="com">${comment.name}:</label>
                            <p class="commentp">${comment.comment}</p>
                            <br>
                        ` 
                )}
            </section>
        </section>
    `;
  }
}

customElements.define('rate-anime', RateAnime);

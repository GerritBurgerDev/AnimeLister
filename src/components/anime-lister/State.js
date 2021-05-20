import { LitState, stateVar } from 'lit-element-state';

class MyState extends LitState {
    cards = [];

    populateCards() {
        fetch('https://anime-test.herokuapp.com/listanime')
        .then((response) => response.json())
        .then((json) => {
              console.log(json);
                json.forEach(anime => {
                    this.cards.push({
                        cardTitle: anime.title,
                        cardSubTitle: anime.subtitle,
                        cardDescription: anime.description,
                        cardActionLink: '/rate/'+anime.animeid,
                        cardImageUrl: anime.imageurl,
                    });
                });
            })
            .catch(err => {console.log(err)});
      }
}

export const myState = new MyState();
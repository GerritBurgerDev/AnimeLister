import { LitElement, html, css } from 'lit-element';

export class AnimeLister extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      cards: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        margin: 0 200px;
        padding-top: 75px;
      }

      main {
        flex-grow: 1;
      }

      .search-and-filter-container {
        margin-bottom: 30px;
      }

      .grid-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-column-gap: 50px;
        grid-row-gap: 50px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'AnimeLister';
    this.cards = [
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
      },
    ];
  }

  render() {
    return html`
      <body>
        <div class="search-and-filter-container">
          <app-search-bar></app-search-bar>
        </div>

        <div class="grid-container">
          ${this.cards.map(
            card =>
              html`
                <app-card
                  cardTitle=${card.cardTitle}
                  cardSubTitle=${card.cardSubTitle}
                  cardDescription=${card.cardDescription}
                  cardActionLink=${card.cardActionLink}
                  cardImageUrl=${card.cardImageUrl}
                ></app-card>
              `
          )}
        </div>
      </body>
    `;
  }
}

customElements.define('anime-lister', AnimeLister);

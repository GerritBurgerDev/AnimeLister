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
      }

      main {
        flex-grow: 1;
      }

      .grid-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        grid-column-gap: 100px;
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
      <header>
        <h1>${this.title}</h1>
        <p>Edit <code>src/AnimeLister.js</code> and save to reload.</p>
      </header>

      <body>
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

import { css, html, LitElement } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class AnimeLister extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      cards: { type: Array },
      filterIcons: { type: Object },
      sortOrder: { type: String }
    };
  }

  static get styles() {
    return [
      Fontawesome,
      css`
        :host {
          display: flex;
          flex-direction: column;
          max-width: 100%;
          margin: 0 200px;
          padding-top: 75px;
          padding-bottom: 50px;
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
          grid-template-columns: 300px 300px 300px 300px;
          grid-column-gap: 100px;
          grid-row-gap: 50px;
        }

        .sorting-container {
          position: relative;
          left: -35px;
          list-style-type: none;
          display: flex;
        }

        .sorting-item {
          user-select: none;
          cursor: pointer;
        }

        .sorting-item i {
          padding-right: 5px;
        }
      `
    ];
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
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      },
      {
        cardTitle: 'Default Title',
        cardSubTitle: 'Default Subtitle',
        cardDescription:
          'Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie Some ipsum lorem shit Homie',
        cardActionLink: '/anime/01',
        cardImageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933'
      }
    ];
    this.sortOrder = 'Descending';
    this.filterIcons = {
      descending: 'chevron-down',
      ascending: 'chevron-up'
    };
    this.sortIcon = this.filterIcons.descending;
  }

  render() {
    return html`
      <body>
      <div class='search-and-filter-container'>
        <app-search-bar></app-search-bar>

        <ul class='sorting-container'>
          <li class='sorting-item' @click='${() => this.handleSortEvent()}'>
            <i class='fas fa-${this.sortIcon}'></i>
            Score
          </li>
        </ul>
      </div>

      <div class='grid-container'>
        ${this.cards.map(card =>
          html`
            <app-card
              cardTitle='${card.cardTitle}'
              cardSubTitle='${card.cardSubTitle}'
              cardDescription='${card.cardDescription}'
              cardActionLink='${card.cardActionLink}'
              cardImageUrl='${card.cardImageUrl}'
            ></app-card>
          `
        )}
      </div>
      </body>
    `;
  }

  handleSortEvent() {
    this.sortOrder = this.sortOrder === 'Descending' ? 'Ascending' : 'Descending';
    this.sortIcon = this.sortOrder === 'Descending' ? this.filterIcons.ascending : this.filterIcons.descending;
  }
}

customElements.define('anime-lister', AnimeLister);

/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import { LitElement, html } from 'lit-element';
import * as Auth from '../../../scripts/auth.js';

export class AnimeOverviewPage extends LitElement {
  async onBeforeEnter(_location, commands) {
    if (!(await Auth.isAuthenticated()))
      return commands.redirect('/auth-error');
  }

  render() {
    return html` <anime-lister> </anime-lister> `;
  }
}

customElements.define('anime-overview-page', AnimeOverviewPage);

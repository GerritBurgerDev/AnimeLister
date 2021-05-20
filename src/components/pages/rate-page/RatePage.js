import { LitElement, html } from 'lit-element';
import * as Auth from '../../../scripts/auth.js';

export class RatePage extends LitElement { 
  
  // async onBeforeEnter(_location, commands) {
  //   if (!(await Auth.isAuthenticated()))
  //     return commands.redirect('/auth-error');
  // }

  render() {
    return html` <rate-anime> </rate-anime> `;
  }
}

customElements.define('rate-page', RatePage);
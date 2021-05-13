import { LitElement, html } from 'lit-element';

export class LoginPage extends LitElement {
  render() {
    return html` <layout-page></layout-page> `;
  }
}

customElements.define('login-page', LoginPage);

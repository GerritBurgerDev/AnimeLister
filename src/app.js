import { Router } from '@vaadin/router';
import './components/index.js';

async function isAuthenticated() {
  const response = await fetch('http://localhost:1337/authenticate', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  });
  return (await response.text()) === 'authorized';
}

const routes = [
  {
    path: '/',
    component: 'home-page',
    children: [],
  },
  {
    path: '/anime/:id',
    component: 'home-page',
    action: async ctx => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        window.location = '/';
        alert('Please login with your google account');
      }
      const { id } = ctx.params;
      console.log(id);
    },
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);

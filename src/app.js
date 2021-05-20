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
  },
  {
    path: '/anime/:id',
    component: 'anime-details-page',
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);

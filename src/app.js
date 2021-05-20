import { Router } from '@vaadin/router';
import './components/index.js';

const routes = [
  {
    path: '/',
    component: 'home-page',
    children: [],
  },
  {
    path: '/anime/:id',
    component: 'anime-overview-page',
  },
  {
    path: '/auth-error',
    component: 'auth-error-page',
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);

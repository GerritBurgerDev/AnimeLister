import { Router } from '@vaadin/router';
import './components/index.js';

const routes = [
  {
    path: '/',
    component: 'home-page',
    children: [],
  },
  {
    path: '/login',
    component: 'login-page',
    children: [],
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);

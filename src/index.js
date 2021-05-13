import { Router } from '@vaadin/router';
import './components/app.js';

const routes = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: '/login',
        component: 'login-page',
        children: [],
      },
    ],
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);

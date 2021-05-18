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
    action: async ctx => {
      const { id } = ctx.params;
      console.log(id);
    },
  },
  {
    path: '/auth-error',
    component: 'auth-error-page',
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);

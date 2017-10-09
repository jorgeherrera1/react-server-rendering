import Dashboard from './dashboard/dashboard';
import Skills from './skills/skills';

const routes = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/skills',
    component: Skills
  }
];

export default routes;

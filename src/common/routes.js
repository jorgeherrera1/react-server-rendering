import Dashboard from './containers/dashboard';
import Skills from './containers/skills';

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

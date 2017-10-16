import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <header>
    <ul>
      <li><Link to='/'>Dashboard</Link></li>
      <li><Link to='/skills'>Skills</Link></li>
    </ul>
  </header>
);

export default Nav;

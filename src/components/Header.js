import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
  </header>
);

export default Header;
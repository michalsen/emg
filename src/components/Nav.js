import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  /* .logo {
    transform: translateY(-25%);
  } */
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid-gap: -1rem; */
    /* align-items: center; */
    /* margin-top: -6rem; */
  }
  li {
    /* --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-:first-child(2) {
      --roate: 1deg;
    } */
    &:hover {
      --rotate: 3deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/code">Code</Link>
          </li>
          <li>
            <Link to="/horological">Horological</Link>
          </li>
        </ul>
      </h2>
    </NavStyles>
  );
}

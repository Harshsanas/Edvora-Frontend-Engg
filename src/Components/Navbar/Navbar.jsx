import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"

const NAVBAR = styled.div`
  background-color: teal;
  padding: 10px;
  font-size: 24px;

  .navbar-text {
    text-decoration: none;
    color: white;
  }
`;

export default function Navbar() {
    return (
      <div>
        <NAVBAR>
          <div>
            <NavLink to="/" className="navbar-text">POKEMON - API</NavLink>
          </div>
        </NAVBAR>
      </div>
    );
}

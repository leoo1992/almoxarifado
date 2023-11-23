/* eslint-disable react/prop-types */
import React, { useState} from 'react';
import './styles.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavIcons from './NavIcons';
import { Link } from 'react-router-dom';

const NavPrincipal = (props) => {
  // eslint-disable-next-line
    const [theme, setTheme] = useState("dark");

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    props.updateTheme(newTheme);
  };

  return (
    <Navbar bg="primary" data-bs-theme="light" className="flex-row justify-content-between p-1 shadow">

      <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-3 p-0 m-0 bg-transparent text-decoration-none text-store-nav">
                IA.<span className="text-success">Store</span>
      </Navbar.Brand>

      <Nav className="text-end p-0 m-0">
        <NavIcons updateTheme={updateTheme} disableCart={props.disableCart} disableHome={props.disableHome}/>
      </Nav>

    </Navbar>
  );
};

export default NavPrincipal;

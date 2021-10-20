import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './Header.css'
import useAuth from '../../hook/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <>
                <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">

                    <Navbar.Brand href="/home">
                        <img
                            src={logo}
                            width="80"
                            height="50"
                            className="d-inline-block align-top ms-2"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className='nav-link'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className='nav-link'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='nav-link'>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/physician" className='nav-link'> Physicians</Nav.Link>

                        {!user.email && <Nav.Link as={Link} to="/signup" className='nav-link border me-4'> Sign up</Nav.Link>}


                        <Navbar.Text>

                            {user?.email && <span className='ms-5 '>  <FaArrowAltCircleRight /> {user.displayName}</span>}
                        </Navbar.Text>

                    </Navbar.Collapse>
                    {user?.email && <Nav.Link as={Link} to="" className='nav-link ms-3 border me-4' onClick={logOut}> Logout</Nav.Link>}


                </Navbar>

            </>
        </div>
    );
};

export default Header;
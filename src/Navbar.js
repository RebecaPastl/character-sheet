//imports
//when in the client side, use import syntax
import React from 'react';
import { NavDropdown, Button, NavLink, Nav, Navbar as Bar } from 'react-bootstrap'
import { FaDiceD20 } from 'react-icons/fa'

function Navbar(props){

    const setThemeBlackAndWhite = () => {

        getComputedStyle(document.documentElement).getPropertyValue('--primary-dark-colour');
        document.documentElement.style.setProperty('--primary-dark-colour', '#000000');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-dark-colour');
        document.documentElement.style.setProperty('--secondary-dark-colour', '#3b3b3b');
        
        getComputedStyle(document.documentElement).getPropertyValue('--primary-light-colour');
        document.documentElement.style.setProperty('--primary-light-colour', '#ffffff');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-light-colour');
        document.documentElement.style.setProperty('--secondary-light-colour', '#eeeeee');

    }

    const setThemeDark = () => {

        getComputedStyle(document.documentElement).getPropertyValue('--primary-dark-colour');
        document.documentElement.style.setProperty('--primary-dark-colour', '#000000');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-dark-colour');
        document.documentElement.style.setProperty('--secondary-dark-colour', '#3b3b3b');
        
        getComputedStyle(document.documentElement).getPropertyValue('--primary-light-colour');
        document.documentElement.style.setProperty('--primary-light-colour', '#828282');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-light-colour');
        document.documentElement.style.setProperty('--secondary-light-colour', '#a3a3a3');

    }


    const setThemeBlueprint = () => {

        getComputedStyle(document.documentElement).getPropertyValue('--primary-dark-colour');
        document.documentElement.style.setProperty('--primary-dark-colour', '#003690');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-dark-colour');
        document.documentElement.style.setProperty('--secondary-dark-colour', '#0049c3');
        
        getComputedStyle(document.documentElement).getPropertyValue('--primary-light-colour');
        document.documentElement.style.setProperty('--primary-light-colour', '#518eff');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-light-colour');
        document.documentElement.style.setProperty('--secondary-light-colour', '#7dabff');

    }


    const setThemePink = () => {

        getComputedStyle(document.documentElement).getPropertyValue('--primary-dark-colour');
        document.documentElement.style.setProperty('--primary-dark-colour', '#9c00a0');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-dark-colour');
        document.documentElement.style.setProperty('--secondary-dark-colour', '#fdaeff');
        
        getComputedStyle(document.documentElement).getPropertyValue('--primary-light-colour');
        document.documentElement.style.setProperty('--primary-light-colour', '#fee0ff');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-light-colour');
        document.documentElement.style.setProperty('--secondary-light-colour', '#fff4ff');
        
    }

    const setThemeGreen = () => {

        getComputedStyle(document.documentElement).getPropertyValue('--primary-dark-colour');
        document.documentElement.style.setProperty('--primary-dark-colour', '#689797');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-dark-colour');
        document.documentElement.style.setProperty('--secondary-dark-colour', '#84aaab');
        
        getComputedStyle(document.documentElement).getPropertyValue('--primary-light-colour');
        document.documentElement.style.setProperty('--primary-light-colour', '#ccdcdc');
        
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-light-colour');
        document.documentElement.style.setProperty('--secondary-light-colour', '#dfe9e9');
    }

    return (

        <>
            <Bar collapseOnSelect className="shadow bg-dark py-0 mb-5" variant='dark' expand="lg" fixed='top' >
                <Bar.Brand>
                    <NavLink className='text-white mr-3 text-decoration-none' to='/'>
                        <FaDiceD20 /> <span className='h1 small'>CS</span>
                    </NavLink>
                </Bar.Brand>
                <Bar.Toggle className='my-2' aria-controls="responsive-navbar-nav" />
                <Bar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Button variant="dark" onClick={props.resetForm}>New character</Button>
                        <Button variant="dark" onClick={props.handlePrint}>Print</Button>
                        <Button variant="dark" disabled>Save to database</Button>
                        <NavDropdown title="Theme" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => setThemeBlackAndWhite()}>Back and White</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setThemeDark()}>Dark</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setThemeBlueprint()}>Blueprint</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setThemePink()}>Pink</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setThemeGreen()}>Green</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Bar.Collapse>
            </Bar>

        </>
    );
}

export default Navbar;
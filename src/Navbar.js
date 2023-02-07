//imports
//when in the client side, use import syntax
import React from 'react';
import { Button, NavLink, Nav, Navbar as Bar } from 'react-bootstrap'
import { FaDiceD20 } from 'react-icons/fa'

function Navbar(props){

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
                    </Nav>
                </Bar.Collapse>
            </Bar>

        </>
    );
}

export default Navbar;
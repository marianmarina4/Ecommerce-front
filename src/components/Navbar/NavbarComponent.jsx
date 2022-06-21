import React from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown, Container } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"


function NavbarComponent(props) {
    const {
        userState,
        handleOnLogout,
        handleOnClick
    } = props;

    return (
        <Navbar bg="light" expand="lg" className='w-100'>
            <Container>
                <Navbar.Brand className="text-center col-3" href="/">Mercado Licha</Navbar.Brand>
                <Form className="d-flex col-md-6 col-4">
                    <FormControl
                        type="search"
                        placeholder="Busca tu producto..."
                        aria-label="Search"
                    />
                </Form>
                {
                    userState.username ?
                        <div className='d-flex align-items-center col-4 col-md-2'>
                            <div className='d-flex align-items-center'>
                                <CgProfile size={23} className="d-none d-lg-block"/>
                                <NavDropdown title={userState.username}>
                                    <NavDropdown.Item >my profile</NavDropdown.Item>
                                    <NavDropdown.Item >settings</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleOnLogout}>Logout</NavDropdown.Item>
                                </NavDropdown>

                            </div>
                            <AiOutlineShoppingCart onClick={handleOnClick} size={25} />
                        </div>
                        :
                        <Nav className='d-flex flex-row justify-content-around col-3 col-md-2'>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Navbar.Text className="d-none d-lg-block"> or </Navbar.Text>
                            <Nav.Link href="/login">Sign in</Nav.Link>
                        </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
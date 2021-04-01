import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser] = useContext(UserContext);

    console.log(loggedInUser);

    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/"><b>BIPONI SHOP</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Order</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/deals">Deals</Nav.Link>

                    </Nav>

                    <Button className="m-3" variant="outline-success">Search</Button>
                    <Button variant="success" as={Link} to="/signin">{loggedInUser.displayName || loggedInUser.email ? loggedInUser.displayName || loggedInUser.email : "Login"}</Button>

                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;
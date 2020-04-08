import React from "react"
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavLink} from "react-bootstrap";

function Header() {
    return (
        <div className={"header"}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Saanan Oppimispäiväkirja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="url.com">LinkedIn</NavLink>
                        <NavDropdown title="Valikko" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Haku" className="mr-sm-2" />
                        <Button variant="outline-success">Hae</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default Header
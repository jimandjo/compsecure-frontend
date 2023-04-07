
import { Link, Outlet } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import LoadingIndicator from "./LoadingIndicator"

function Home() {
    return (
        <>
                    {/* Navbar */}
            <Navbar bg="warning" variant="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/">Compsecure.us</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/posts" className="nav-link">Posts</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/contacts" className="nav-link">ContactList</Link>
                    <Link to="/contacts/new" className="nav-link">New Contact</Link>
                </Nav>
                <Navbar.Text>
                    <LoadingIndicator />
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
                </Navbar>

                <Stack gap={3} className="col-md-10 mx-auto mt-3">
                    <Outlet />
                </Stack>

               
        </>
    )
}

export default Home
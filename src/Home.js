
import { Link, Outlet } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import Footer from "./Footer.js"

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
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>

                <Stack gap={0} className="col-md-30 mx-auto">
                    <Outlet />
                </Stack>
                <Footer />

                

               
        </>
    )
}

export default Home
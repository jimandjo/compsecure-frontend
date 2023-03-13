
import { Link, Outlet, Route } from "react-router-dom"
import { Button, Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

function Home() {
    return (
        <>
                    {/* Navbar */}
            <Navbar bg="warning" variant="light">
                <Container fluid>
                <Navbar.Brand href="/">Compsecure.us</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/posts" className="nav-link">Posts</Link>
                    </Nav>
                </Container>
                </Navbar>


                <Stack gap={3} className="col-md-10 mx-auto">
                    <Outlet />
                </Stack>

               
        </>
    )
}

export default Home

import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"

function Home() {
    return (
        <>
                    {/* Navbar */}
            <Navbar bg="warning" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav>
                </Container>
                </Navbar>

                <h1>
                    this is the home page
                </h1>

               
        </>
    )
}

export default Home
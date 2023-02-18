
import {Container, Nav, Navbar} from "react-bootstrap"
import Link from "next/link"

export default function mainNav(){
    

    return (
        <>
        <Navbar bg="navbar-dark bg-light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand>Mohammad Rashidi Khorsand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior ><Nav.Link>Movies</Nav.Link></Link> 
              <Link href="/about" passHref legacyBehavior ><Nav.Link>About</Nav.Link></Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>        
      <br/><br/>
        </>
    )
}
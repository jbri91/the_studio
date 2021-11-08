import { Navbar, Button, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">The Studio</Navbar.Brand>
      <Button> Login </Button>
      <Button style={{whiteSpace:'nowrap'}}> Sign Out </Button>
      <Container>
       
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        <Navbar.Text>
          Signed in as: <a href="#login">Johnny Briones</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Navigation;

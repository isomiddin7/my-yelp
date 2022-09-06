import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Nav({signOut}){
    return (
        <Navbar expand="lg" variant="light" bg="secondary">
        <Container>
          <Navbar.Brand class="text-light">My Yelp</Navbar.Brand>
        </Container>
        <Button onClick={signOut}>Signout</Button>
      </Navbar>
      
    );

}
export default Nav
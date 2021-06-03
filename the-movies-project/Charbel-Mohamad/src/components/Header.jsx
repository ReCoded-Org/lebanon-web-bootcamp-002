import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Search from './Search';
import Spinner  from 'react-bootstrap/Spinner'



const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false)

    return (
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="../../public/index.html">MoviesApp</Navbar.Brand>
    <Nav lassName="justify-content-center"  >
         <Nav.Item > 
      <Nav.Link href="../../public/index.html">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
{isLoaded && 
  <Spinner animation="border" size="sm" />  } 
      </Nav.Item>
      <Nav.Item>
      <Search  hello={setIsLoaded}/> 
      </Nav.Item>
     
    </Nav>
    </Container>
  </Navbar>    
        )
}

export default Header

import React from 'react';
import AppNavbar from './shared/AppNavbar'
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <Button color="link"><Link to="/login"></Link></Button>
      </Container>
    </div>
  );
}

export default Home;
import React from 'react';
import {Container,Form,Button, Row,Col} from 'react-bootstrap';
import Logo from "../../../../assets/logo.png";
import './CustomerLogin.css'

export default class CustomerLogin extends React.Component {
 

  render() {
    return (

<div>
      <Container>
  <Row>
    <Col>
    <div className="info">
    <img src={Logo} id="logo" alt="Smiley face"></img>
     <h1>  Delivery food that you will love.</h1> 
      </div>
      
      </Col>
    <Col xs={8}><div className="form">
          <h5> Sign in with your 
ChefItUp account</h5>
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button id="sign-in-button" variant="primary" type="submit">
        Sign in
      </Button>


    
      <Form.Text >
     Dont have an account? <a>Sign up</a>
    </Form.Text>
    <Form.Text >
     Forgot password?
    </Form.Text>
    </Form>
    </div></Col>
  </Row>
</Container>


</div>

        

 
    );
  }
}
import React,{useState} from 'react';
import './Payment.css'

import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import api from '../../../API/api'

const Payment =() => {

  const [payment,setPayment] = useState({cardName:'',cardNumber:'',expMonth:'',expYear:'',cvv:'',depositAmount:''});
  //const [paymentData,setPaymentData] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPayment({...payment,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(payment.cardName && payment.cardNumber && payment.expMonth && payment.expYear && payment.cvv && payment.depositAmount){
      const API = new api();
      const data = {...payment}
      API.addPayment(data).then( error => {
        console.log(error);
      })
    }
    window.location.href='/Menu';
  }

  return (
    <Container className="container-payment" fluid>
      <h1 className="header-payment">Payment</h1>
      <Form className="payment-form">
        <Form.Group as={Col} controlId="formCardName" >
          <Form.Control type="text" className="form-container-payment" placeholder="Name on Card" name="cardName" value={payment.cardName} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formCardNumber" >
          <Form.Control type="text" className="form-container-payment" placeholder="Number" name="cardNumber" value={payment.cardNumber} onChange={handleChange}/>
        </Form.Group>

        <div className="payment-form-expiration-date-div">
          <Form.Group as={Col} controlId="formExpMonth" >
            <Form.Control type="text" className="form-container-payment" placeholder="ExpirationMonth" name="expMonth" value={payment.expMonth} onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formExpYear" >
            <Form.Control type="text" className="form-container-payment" placeholder="Expiration Year" name="expYear" value={payment.expYear} onChange={handleChange}/>
          </Form.Group>
        </div>

        <Form.Group as={Col} controlId="formCvv" >
          <Form.Control type="text" className="form-container-payment" placeholder="Security Code" name="cvv" value={payment.cvv} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formDepositAmount" >
          <Form.Control type="text" className="form-container-payment" placeholder="Add the amount you want to deposit" name="depositAmount" value={payment.depositAmount} onChange={handleChange}/>
        </Form.Group>

        <Button className="btn-payment" variant="primary" type="submit" onClick={handleSubmit}>
          confirm
        </Button>
      </Form>
    </Container>
  );

}
export default Payment

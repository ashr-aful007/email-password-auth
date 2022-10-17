import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebse.init'
import { Link } from 'react-router-dom';

const auth = getAuth(app)


function RegestarReactBootstrap() {
  const [passwoedError, setPassowrdError] = useState('');
  const [success, setSuccess] = useState(false);
     const handleRegister = event =>{
          event.preventDefault();

          setSuccess(false);
          const form = event.target;
          const email = form.email.value
          const password = form.password.value
          console.log(email, password);

          //check validation
          if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPassowrdError('please provide at least two uppercase');
            return;
          }
          if(password.length < 6){
            setPassowrdError('please provide at least 6 character.');
            return;
          }
          if(!/(?=.*[!@#$&*])/.test(password)){
            setPassowrdError('Please at least one special character');
            return;
          }
          createUserWithEmailAndPassword(auth, email, password)
          .then( result =>{
            const user = result.user;
            console.log(user)
            setSuccess(true)
            form.reset()
          })
          .catch(error => {
           setPassowrdError(error.message)
          })
     }

  return (
    <div className='w-50 mx-auto'>
     <h3 className='text-warning'>Please Register</h3>
       <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <p className='text-danger'>{passwoedError}</p>
      {success && <p className='text-success'>User Create Successfully.</p>}
      <Button variant="primary" type="submit">
       Regestar
      </Button>
    </Form>
    <p><small>Alrady have and account please login<Link to='/login'>login</Link></small></p>
    </div>
  )
}

export default RegestarReactBootstrap
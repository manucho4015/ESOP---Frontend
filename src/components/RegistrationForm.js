import React from 'react'

import { FloatingLabel, Form, Button } from 'react-bootstrap'

const RegistrationForm = () => {
  return (
    <article className="register-form">
            <h1>register form</h1>
            <>
              <FloatingLabel controlId="floatingInput" label="First Name" className="mb-4 login-input">
                <Form.Control type="email" placeholder="First Name" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Last Name" className='mb-4 login-input'>
                <Form.Control type="password" placeholder="First Name" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Email" className='mb-4 login-input'>
                <Form.Control type="password" placeholder="Email" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Office ID" className='mb-4 login-input'>
                <Form.Control type="password" placeholder="Office ID" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Staff ID" className='mb-4 login-input'>
                <Form.Control type="password" placeholder="Staff ID" />
              </FloatingLabel>
            </>
            <>
              <div className="mb-2">
              <Button className='login-btn' variant="primary" size="lg">Register</Button>
              </div>
            </>
        </article>
  )
}

export default RegistrationForm

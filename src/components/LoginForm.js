import React from 'react'
import {Link} from 'react-router-dom'
import { FloatingLabel, Form, Button } from 'react-bootstrap'

const LoginForm = () => {
  return (
    <article className="login-form">
            <h1>login form</h1>
            <>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4 login-input">
                <Form.Control className='' type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password" className='login-input'>
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </>
            <>
              <div className="mb-2">
              <Button className='login-btn' variant="primary" size="lg">Login</Button>
              </div>
            </>
            <p>Don't have an account? <Link className='register-form-link' to='/register'>Register Here</Link></p>
        </article>
  )
}

export default LoginForm

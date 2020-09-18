import React, { useState} from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';
import Button from '../styles/Button';
import Form from '../styles/Form';
import Label from '../styles/Label';
import Input from '../styles/Input';

const LoginForm = (props) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [rejection, setRejection] = useState(false);
  const [admin, setAdmin] = useState(false);

  const cookieName = Cookies.get().name;

  return (
  <>
    <Formik
      initialValues={{ name:'', password:''}}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'This field is required';
        }
        if (!values.password) {
          errors.password = 'This field is required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          name: values.name,
          password: values.password
        }
    
          axios.post('/login', content)
            .then(res => {
            //   console.log(res.session, 'req.session.admin')
            //  console.log( Cookies.get(), 'cookies')
              // if (res.data === 'admin'){
               
              //   setAdmin(true);
              //   }
              // if (res.data === 'verified'){
              // setLoggedIn(true);
              // }
              if (res.data === 'rejection'){
                setRejection(true);
                resetForm();
              }
            })

            axios.get('/admin', content)
            .then(res => {
             if (cookieName === 'admin'){
               
              setAdmin(true);
              }
             
            })

            axios.get('/user', content)
            .then(res => {
             if (cookieName === 'user'){
               
              setLoggedIn(true);
              }
             
            })
            
            .catch(err => console.log(err))
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">User: </Label>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur} />
            {errors.name && touched.name && errors.name}
            <Label htmlFor="password">Password: </Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur} />
            {errors.password && touched.password && errors.password}
            <Button login form type="submit" disabled={isSubmitting}>Log in</Button>
            </Form>
        )}
    </Formik>
    {admin && <Redirect to='/admin'/>}
    {loggedIn && <Redirect to='/addingQuestion'/>}
    {rejection && <p>Incorrect login details</p>}    
  </>
)}


export default LoginForm;

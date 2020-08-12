import React, { useState} from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Redirect } from 'react-router';

const LoginForm = (props) => {

  const [loggedIn, setloggedIn] = useState(false);
  const [rejection, setRejection] = useState(false);
  const [admin, setAdmin] = useState(false);

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
              if (res.data === 'admin'){
                setAdmin(true);
                }
              if (res.data === 'verified'){
              setloggedIn(true);
              }
              if (res.data === 'rejection'){
                setRejection(true);
                resetForm();
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">User: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur} />
            {errors.name && touched.name && errors.name}
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur} />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>Log in</button>
          </form>
        )}
    </Formik>
    {admin && <Redirect to='/adminDashboard'/>}
    {loggedIn && <Redirect to='/addingQuestion'/>}
    {rejection && <p>Incorrect login details</p>}    
  </>
)}


export default LoginForm;

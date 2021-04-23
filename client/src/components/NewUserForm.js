import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Redirect } from 'react-router';
import Button from '../styles/Button';
import Form from '../styles/Form';
import Label from '../styles/Label';
import Input from '../styles/Input';
import ErrorMessage from '../styles/ErrorMessage';

const NewUserForm = () => {

  const [created, setCreated] = useState(false);
  const [rejection, setRejection] = useState(false);

  return (
  <>
    <Formik
      initialValues={{ newName:'', newPassword:''}}
      validate={values => {
        const errors = {};
        if (!values.newName) {
          errors.newName = 'This field is required';
        }
        const userReg = /^([a-zA-Z0-9]){3,20}$/
        if (!userReg.test(values.newName)) {
          errors.newName = 'User name does not meet the requirements';
        }
        if (!values.newPassword) {
          errors.newPassword = 'This field is required';
        }
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
                if (!passwordReg.test(values.newPassword)) {
          errors.newPassword = 'Password does not meet the requirements';
        }
        return errors;
        
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          name: values.newName,
          password: values.newPassword
        }
        console.log(content, 'content')
    
          axios.post('/newUser', content)
            .then(res => {
            if (res.data === 'created'){
              setCreated(true);
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
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="newName">User: </Label>
            <Input
              type="text"
              name="newName"
              id="newName"
              onChange={handleChange}
              value={values.newName}
              onBlur={handleBlur} />
            <ErrorMessage> {errors.newName ? (errors.newName && touched.newName && errors.newName): ''} </ErrorMessage> 
            <Label htmlFor="newPassword">Password: </Label>
            <Input
              type="newPassword"
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              value={values.newPassword}
              onBlur={handleBlur} />
            <ErrorMessage> {errors.newPassword ? (errors.newPassword && touched.newPassword && errors.newPassword) : ''} </ErrorMessage>
            <Button login form="true" type="submit" disabled={isSubmitting}>Add new user</Button>
          </Form>
        )}
    </Formik>
     {created && <Redirect to='/newUser/created'/>}
    {rejection && <ErrorMessage>This username is already in use</ErrorMessage>}    
  </>
)}


export default NewUserForm;

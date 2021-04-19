import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Redirect } from 'react-router';
import Button from '../styles/Button';
import Form from '../styles/Form';
import Label from '../styles/Label';
import Input from '../styles/Input';

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
        if (!values.newPassword) {
          errors.newPassword = 'This field is required';
        }
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
                if (!reg.test(values.newPassword)) {
          errors.newPassword = 'Password does not meet the requirements';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          name: values.newName,
          password: values.newPassword
        }
    
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
            {errors.newName && touched.newName && errors.newName}
            <Label htmlFor="newPassword">Password: </Label>
            <Input
              type="newPassword"
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              value={values.newPassword}
              onBlur={handleBlur} />
            {errors.newPassword && touched.newPassword && errors.newPassword}
            <Button login form="true" type="submit" disabled={isSubmitting}>Add new user</Button>
          </Form>
        )}
    </Formik>
     {created && <Redirect to='/newUser/created'/>}
    {rejection && <p>This username is already in use</p>}    
  </>
)}


export default NewUserForm;

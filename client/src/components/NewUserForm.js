import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
// import { Redirect } from 'react-router';

const LoginForm = (props) => {

//   const [loggedIn, setloggedIn] = useState(false);
//   const [rejection, setRejection] = useState(false);

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
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          newName: values.newName,
          newPassword: values.newPassword
        }
    
          axios.post('/newUser', content)
            .then(res => {
            console.log(res)
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
            <label htmlFor="newName">User: </label>
            <input
              type="text"
              name="newName"
              id="newName"
              onChange={handleChange}
              value={values.newName}
              onBlur={handleBlur} />
            {errors.newName && touched.newName && errors.newName}
            <label htmlFor="newPassword">Password: </label>
            <input
              type="newPassword"
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              value={values.newPassword}
              onBlur={handleBlur} />
            {errors.newPassword && touched.newPassword && errors.newPassword}
            <button type="submit" disabled={isSubmitting}>Add new user</button>
          </form>
        )}
    </Formik>
    {/* {loggedIn && <Redirect to='/addingQuestion'/>}
    {rejection && <p>Incorrect login details</p>}     */}
  </>
)}


export default LoginForm;

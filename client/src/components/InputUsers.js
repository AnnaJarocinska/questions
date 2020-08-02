import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';

const Input = (props) => (
  <div>
    <Formik
      initialValues={{ name:''}}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'This field is required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          name: values.name
        }
    
          axios.post('/login', content)
            .then(res => {
              if (res.data) {
                resetForm();
                setSubmitting(false);
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
              value={values.newQuestion}
              onBlur={handleBlur} />
            {errors.name && touched.name && errors.name}
            <button type="submit" disabled={isSubmitting}>add user</button>
          </form>
        )}
    </Formik>
  </div>
);


export default Input;

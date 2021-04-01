import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import Input from '../../styles/Input';
import Label from '../../styles/Label';
import Button from '../../styles/Button';
import Form from '../../styles/Form';

const ChangePassword = () => {

    return ( 
        <>
        <Formik
        initialValues={{ password1:'', password2:''}}
        validate={values => {

            const errors = {};
   
            // if (!values.password1 !== values.password2) {
   
            //   errors.password2 = 'Passwords are not the same';
   
            // } else if (
   
            //   values.password1.length <3
   
            // ) {
   
            //   errors.password1 = 'Password is too short';
   
            // }
   
            return errors;
   
          }}
   
          onSubmit={ async (values, { setSubmitting }) => {

            const content = {
                password: values.password1
              }
            
            await axios.post('/user/details/changePassword', content)
            .then(res => {
                if (res.data) {
                      console.log(res.data, 'res.data w change pasword');
                }
              })
                .catch(err => console.log(err, 'err post'))
                 
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
            <Form
            onSubmit={handleSubmit}>
        <p>change password</p>
        <Label>New password</Label>
        <Input
        type="password"
        name="password1"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password1}/>
        {errors.password1 && touched.password1 && errors.password1}
        <Label>New password</Label>
        <Input
        type="password"
        name="password2"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password2}/>
        {errors.password2 && touched.password2 && errors.password2}
        <Button login type="submit" disabled={isSubmitting}>
            Submit
        </Button>
        </Form>)}
        </Formik>
        </>
     );
}
 
export default ChangePassword;
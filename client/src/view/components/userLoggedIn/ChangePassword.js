import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import Input from '../../../styles/Input';
import Label from '../../../styles/Label';
import Button from '../../../styles/Button';
import Form from '../../../styles/Form';

const ChangePassword = () => {
    return ( 
        <>
        <Formik
        initialValues={{ password1:'', password2:''}}
        validate={values => {
            const errors = {};
            if (!values.pssword1) {
              errors.password1 = 'This field is required';
            }
            if (!values.password2) {
              errors.password2 = 'This field is required';
            }
            const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
            if (!reg.test(values.password1)) {
              errors.password1 = 'Password does not meet the requirements';
            }
           else if (values.password1 !== values.password2) {
              errors.password2 = 'Passwords are not the same';
            }
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
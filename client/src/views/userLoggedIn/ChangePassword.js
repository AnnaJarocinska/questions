import React from 'react';
import { Formik } from 'formik';
import Input from '../../styles/Input';
import Label from '../../styles/Label';
import Button from '../../styles/Button';
import Form from '../../styles/Form';

const ChangePassword = () => {

    return ( 
        <>
        <Formik
        initialValues={{ password1:'', password2:''}}
        >
            {({
        values,
        errors,
        handleSubmit,
      }) => (
            <Form>
        <p>change password</p>
        <Label>New password</Label>
        <Input></Input>
        <Label>New password</Label>
        <Input></Input>
        <Button>Submit</Button>
        </Form>)}
        </Formik>
        </>
     );
}
 
export default ChangePassword;
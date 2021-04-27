import React, { useState} from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import actions from '../view/duck/actions';
import Button from '../styles/Button';
import Form from '../styles/Form';
import Label from '../styles/Label';
import Input from '../styles/Input';
import ErrorMessage from '../styles/ErrorMessage';

const LoginForm = ({ admin, user, adminLoggedIn, userLoggedIn}) => {
  
  const [rejection, setRejection] = useState(false);
  const [message, setMessage] = useState('');
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
      onSubmit = { async (values, { resetForm }) => {
        
        const content = {
          name: values.name,
          password: values.password
        }
    
        await axios.post('login', content)
        .then(res => {
          if (res.data) {
                setRejection(true);
          }
        })
          .catch(err => console.log(err, 'err post'))

          const cookieKey = Cookies.get('key');
          const cookieContent = {
            key: cookieKey,
          }

          const applyCookie = Cookies.get('apply');
          
          applyCookie === '1' && await axios.post('admin', cookieContent)
            .then(res => {  
              if (res.data !== "rejection"){
                adminLoggedIn();
              }
              if (res.data === 'rejection'){
                  setRejection(true);
                  setMessage('Incorrect login details');
                  resetForm();
              }
              })
            .catch(err => console.log(err, 'err admin'))

          applyCookie === '2' && await axios.post('user', cookieContent)
            .then(res => {
           
              if (res.data !== "rejection"){
              userLoggedIn(res.data.userName, res.data.created, res.data.admin);
              }
              if (res.data === 'rejection'){
              setRejection(true);
              setMessage('Incorrect login details');
              resetForm();
              }
            })
            .catch(err => console.log(err, 'err user'))
        
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
          <Form onSubmit={handleSubmit} >
            <Label htmlFor="name">User: </Label>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur} />
            <ErrorMessage> {errors.name && touched.name && errors.name} </ErrorMessage>
            <Label htmlFor="password">Password: </Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur} />
            <ErrorMessage> {errors.password && touched.password && errors.password} </ErrorMessage>
            {rejection && <ErrorMessage>{message}</ErrorMessage>}  
            <Button login type="submit" disabled={isSubmitting}>Log in</Button>
            </Form>
        )}
    </Formik>
    {admin && <Redirect to='/admin'/>}
    {user && <Redirect to='/user'/>}
  </>
)}

const mapStateToProps = (state) => ({
    admin: state.view.admin,
    user: state.view.user,
})

const mapDispatchToProps = (dispatch) => ({
    adminLoggedIn: () =>  dispatch(actions.adminLoggedIn()),
    userLoggedIn: (userName, created, adminn) => dispatch(actions.userLoggedIn(userName, created, adminn))
  }) 

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);
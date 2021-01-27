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

const LoginForm = ({ adminn, user, unnamed,
 adminLoggedIn, adminLoggedOut, userLoggedIn, userLoggedOut 
}) => {
  const [loggedIn, setLoggedIn] = useState(false);
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
      onSubmit={async(values, { setSubmitting, resetForm }) => {
        
        const content = {
          name: values.name,
          password: values.password
        }
    
         await axios.post('/login', content)
            .catch(err => console.log(err, 'err post'))
           
            const cookieKey = Cookies.get('key');
            const cookieContent = {
              key: cookieKey,
            }
            const applyCookie = Cookies.get('apply');

            applyCookie === '0' && await axios.post('/admin', cookieContent)
              .then(res => {
                
                  if (res.data === "adminVeryfied"){
                setAdmin(true);
                adminLoggedIn();
                }
                if (res.data === 'rejection'){
                  setRejection(true);
                  resetForm();
                }
              })
              .catch(err => console.log(err, 'err admin'))

              applyCookie === '1' && await axios.post('/user', cookieContent)
            .then(res => {
           
              if (res.data === "userVeryfied"){
              setLoggedIn(true);
              userLoggedIn();
              }
            if (res.data === 'rejection'){
              setRejection(true);
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
    {loggedIn && <Redirect to='/user'/>}
    {rejection && <p>Incorrect login details</p>}    
  </>
)}

const mapStateToProps = (state) => ({
    adminn: state.view.admin,
    user: state.view.user,
    unnamed: state.view.unnamed,
})

const mapDispatchToProps = (dispatch) => ({
    adminLoggedIn: () =>  dispatch(actions.adminLoggedIn()),
    adminLoggedOut: () =>  dispatch(actions.adminLoggedOut()),
    userLoggedIn: () => dispatch(actions.userLoggedIn()),
    userLoggedOut: () => dispatch(actions.userLoggedOut())
  }) 

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);
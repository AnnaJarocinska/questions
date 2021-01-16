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

const LoginForm = ({adminn, user, unnamed,
 adminLoggedIn, adminLoggedOut, userLoggedIn, userLoggedOut 
}) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [rejection, setRejection] = useState(false);
  const [admin, setAdmin] = useState(false);

  const instance = axios.create();

  // const cookieKey = Cookies.get('key');
  // console.log(cookieKey, 'cookieKey')

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
        
            // .then(res => { 
            //   console.log(res.data, 'res.data w login form')
            // //   if (res.data === 'rejection'){
            // //     setRejection(true);
            // //     resetForm();
            // //   }
              
            // }
            // )
            .catch(err => console.log(err, 'err post'))

        //  await axios.post('/admin', content)
        //     .then(res => {
        //       console.log(res.data, 'res.data w /admin post')
        //       let key = res.data;
        //       Cookies.set('key', key);     
        //     //   setAdmin(true);
        //     //   adminLoggedIn();
        //     //   }
        //     })
        //     .catch(err => console.log(err, 'err admin'))

            // axios.post('/admin', cookieKey)
            // .then(res => {
              
            //   console.log(res.data,'drugi res w login form post /admin')
               
            // })
            // .catch(err => console.log(err, 'err admin'))

            // axios.get('/user', content)
            // .then(res => {
            //  if (cookieName === 'user'){
               
            //   setLoggedIn(true);
            //   userLoggedIn();
            //   }
            // })
            // .catch(err => console.log(err, 'err user'))
        
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

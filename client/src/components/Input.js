import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';

const Input = (props) => (
  <div>
    <Formik
      initialValues={{ newQuestion: '', continent: '-', a: '', b: '', c: '', d: '' }}
      validate={values => {
        const errors = {};
        if (!values.newQuestion) {
          errors.newQuestion = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const task = { action: values.newQuestion }
        if (task.action && task.action.length > 0) {
          axios.post('/api/question', task)
            .then(res => {
              if (res.data) {
                props.getQuestions();
                // setAction("")
              }
            })
            .catch(err => console.log(err))
        } else {
          console.log('input field required')
        }
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
            <label htmlFor="newQuestion">New question: </label>
            <input
              type="text"
              name="newQuestion"
              id="newQuestion"
              onChange={handleChange}
              value={values.newQuestion}
              onBlur={handleBlur} />
            <br />
            <label htmlFor="continent">Continent:</label>
            <select id="continent" name="continent">
              <option value="">-</option>
              <option value="africa">Africa</option>
              <option value="antarctica">Antarctica</option>
              <option value="asia">Asia</option>
              <option value="australia">Australia</option>
              <option value="europe">Europe</option>
              <option value="americaN">North America</option>
              <option value="americaS">South America</option>
            </select>
            <br />
            <label htmlFor="a">a</label>
            <input name="a" id="a"></input>
            <label htmlFor="b">b</label>
            <input name="b" id="b"></input>
            <label htmlFor="c">c</label>
            <input name="c" id="c"></input>
            <label htmlFor="d">b</label>
            <input name="d" id="d"></input>
            <button type="submit">add question</button>
          </form>
        )}
    </Formik>
  </div>
);


export default Input;

import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';

const Input = (props) => (
  <div>
    <Formik
      initialValues={{ newQuestion: '', continent: '-', a: '', b: '', c: '', d: '' }}
      validate={values => {
        const errors = {};
        if (!values.newQuestion) {
          errors.newQuestion = 'This field is required';
        }
        if (values.continent === "-") {
          errors.continent = 'This field is required';
        }
        if (!values.a) {
          errors.a = 'This field is required';
        }
        if (!values.b) {
          errors.b = 'This field is required';
        }
        if (!values.c) {
          errors.c = 'This field is required';
        }
        if (!values.d) {
          errors.d = 'This field is required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const content = {
          newQuestion: values.newQuestion,
          continent: values.continent,
          answerA: values.a,
          answerB: values.b,
          answerC: values.c,
          answerD: values.d,
          goodAnswer: values.goodAnswer
        }
    
          axios.post('/api/question', content)
            .then(res => {
              if (res.data) {
                props.getQuestions();
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
            <label htmlFor="newQuestion">New question: </label>
            <input
              type="text"
              name="newQuestion"
              id="newQuestion"
              onChange={handleChange}
              value={values.newQuestion}
              onBlur={handleBlur} />
            {errors.newQuestion && touched.newQuestion && errors.newQuestion}
            <br />
            <label htmlFor="continent">Continent:</label>
            <select
              id="continent"
              name="continent"
              value={values.continent}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">-</option>
              <option value="africa">Africa</option>
              <option value="antarctica">Antarctica</option>
              <option value="asia">Asia</option>
              <option value="australia">Australia</option>
              <option value="europe">Europe</option>
              <option value="americaN">North America</option>
              <option value="americaS">South America</option>
            </select>
            {errors.continent && touched.continent && errors.continent}
            <br />
            <label htmlFor="a">a</label>
            <input
              name="a"
              id="a"
              type="text"
              onChange={handleChange}
              value={values.a}
              onBlur={handleBlur}
            >
            </input>
            {errors.a && touched.a && errors.a}
            <label htmlFor="b">b</label>
            <input
              name="b"
              id="b"
              type="text"
              onChange={handleChange}
              value={values.b}
              onBlur={handleBlur}
            >
            </input>
            {errors.b && touched.b && errors.b}
            <label htmlFor="c">c</label>
            <input
              name="c"
              id="c"
              type="text"
              onChange={handleChange}
              value={values.c}
              onBlur={handleBlur}
            >
            </input>
            {errors.c && touched.c && errors.c}
            <label htmlFor="d">d</label>
            <input
              name="d"
              id="d"
              type="text"
              onChange={handleChange}
              value={values.d}
              onBlur={handleBlur}
            >
            </input>
            {errors.d && touched.d && errors.d}
            <label htmlFor="goodAnswer">good answer</label>
            <input
              name="goodAnswer"
              id="goodAnswer"
              type="text"
              onChange={handleChange}
              value={values.goodAnswer}
              onBlur={handleBlur}
            >
            </input>
            {errors.goodAnswer && touched.goodAnswer && errors.goodAnswer}
            <button type="submit" disabled={isSubmitting}>add question</button>
          </form>
        )}
    </Formik>
  </div>
);


export default Input;

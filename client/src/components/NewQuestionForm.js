import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import Button from '../styles/Button';
import Form from '../styles/Form';
import Label from '../styles/Label';
import Input from '../styles/Input';
import ErrorMessage from '../styles/ErrorMessage';

const NewQuestionForm = (props) => (
 
    <Formik
      initialValues={{ question: '', continent: '-', a: '', b: '', c: '', d: '', goodAnswer: '' }}
      validate={values => {
        const errors = {};
        if (!values.question) {
          errors.question = 'This field is required';
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
          question: values.question,
          continent: values.continent,
          answerA: values.a,
          answerB: values.b,
          answerC: values.c,
          answerD: values.d,
          goodAnswer: values.goodAnswer
        }
    console.log(content, 'content subnmit')
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
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="question">Question: </Label>
            <Input
              type="text"
              name="question"
              id="question"
              onChange={handleChange}
              value={values.question}
              onBlur={handleBlur}> 
              </Input>
            <ErrorMessage>{errors.question && touched.question && errors.question}</ErrorMessage>
            <Label htmlFor="continent">Continent:</Label>
            <select
              id="continent"
              name="continent"
              value={values.continent}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">-</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
            <ErrorMessage>{errors.continent && touched.continent && errors.continent}</ErrorMessage>
            <Label htmlFor="a">a</Label>
            <Input
              name="a"
              id="a"
              type="text"
              onChange={handleChange}
              value={values.a}
              onBlur={handleBlur}
            >
            </Input>
            <ErrorMessage>{errors.a && touched.a && errors.a}</ErrorMessage>
            <Label htmlFor="b">b</Label>
            <Input
              name="b"
              id="b"
              type="text"
              onChange={handleChange}
              value={values.b}
              onBlur={handleBlur}
            >
            </Input>
            <ErrorMessage>{errors.b && touched.b && errors.b}</ErrorMessage>
            <Label htmlFor="c">c</Label>
            <Input
              name="c"
              id="c"
              type="text"
              onChange={handleChange}
              value={values.c}
              onBlur={handleBlur}
            >
            </Input>
            <ErrorMessage>{errors.c && touched.c && errors.c}</ErrorMessage>
            <Label htmlFor="d">d</Label>
            <Input
              name="d"
              id="d"
              type="text"
              onChange={handleChange}
              value={values.d}
              onBlur={handleBlur}
            >
            </Input>
            {errors.d && touched.d && errors.d}
            <Label htmlFor="goodAnswer">good answer</Label>
            <Input
              name="goodAnswer"
              id="goodAnswer"
              type="text"
              onChange={handleChange}
              value={values.goodAnswer}
              onBlur={handleBlur}
            >
            </Input>
            <ErrorMessage>{errors.goodAnswer && touched.goodAnswer && errors.goodAnswer}</ErrorMessage>
            <Button type="submit" login disabled={isSubmitting}>add question</Button>
          </Form>
        )}
    </Formik>
);

export default NewQuestionForm;
import React from 'react';
import { Formik, Form, Field, ErrorMessage, connect } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";

const validateLoginForm = values => {
   const errors = {};
   if (!values.email) {
      errors.email = 'Required 1';
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
   ) {
      errors.email = 'Invalid email address';
   }
   return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

   password: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(10, "Must be shorter than 10 characters")
      .required("Required 2")
});

const LoginForm = (props) => {
   return <Formik
      initialValues={
         {
            email: "",
            password: "",
            rememberMe: false,
         }}
      validate={validateLoginForm}
      validationSchema={validationSchemaLoginForm}
      onSubmit={(values, { resetForm,setSubmitting, setStatus }) => {
         props.loginAccount(values.email,values.password,values.rememberMe,setStatus);
         resetForm({ values: '' });
         setSubmitting(false);
      }}
   >
      {({status}) => (
         <Form>
         <div>{status}</div>
            <div>
               <Field
                  name={'email'}
                  type={'text'}
                  placeholder={'e-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
               <Field
                  name={'password'}
                  type={'password'}
                  placeholder={'password'} />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
               <Field
                  type={'checkbox'}
                  name={'rememberMe'}
                  id='rememberMe' />
               <label htmlFor={'rememberMe'}> remember me </label>
            </div>

            <button type={'submit'}>Login</button>
         </Form>
      )}
   </Formik>
}

const Login = (props) => {
   if(props.isAuth){
   return(
      <Navigate to={"/profile"}/>
   )
}
   return (
      <div>
         <h2>Login </h2>

         <LoginForm 
            loginAccount={props.loginAccount}
            getFormData={props.getFormData}
         />
         <div>
            ...
         </div>

      </div>
   )
}

export default Login;
import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/authSlice";
import { loginSchema } from "./../../utils/validationSchemas"; // Import the schema
import "./login.css";

function Login() {
  const dispatch = useDispatch();

  const customValidation = (values) => {
    const errors = {};

    if (values.username !== "admin" || values.password !== "admin") {
      errors.username = "Invalid username or password";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    dispatch(
      login({
        username: values.username,
        password: values.password,
      })
    );
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={customValidation} // Use the custom validation function here
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

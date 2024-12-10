import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <Formik>
        <Form>
          <Field
            name="email"
            placeholder="Enter email"
            autoComplete="username"
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            required
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

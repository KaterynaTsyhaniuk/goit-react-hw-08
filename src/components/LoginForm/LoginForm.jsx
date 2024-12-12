import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import ContactPage from "../../pages/ContactsPage/ContactPage";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  if (isLoggedIn) {
    return <ContactPage to="/contacts" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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

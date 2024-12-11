import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="name" placeholder="Enter name" />
          <Field
            name="email"
            placeholder="Enter email"
            autoComplete="username"
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter pass"
            autoComplete="new-password"
            required
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

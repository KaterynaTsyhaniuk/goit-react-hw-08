import { Field, Form, Formik } from "formik";

const RegistrationForm = () => {
  return (
    <div>
      <Formik>
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

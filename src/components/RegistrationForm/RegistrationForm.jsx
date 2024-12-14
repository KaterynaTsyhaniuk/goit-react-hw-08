import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Try again!");
      });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={s.boxRegistrationForm}>
      <h2 className={s.registrationText}>Registration</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.registrationForm}>
          <Field name="name" placeholder="Enter name" className={s.inputForm} />
          <Field
            name="email"
            placeholder="Enter email"
            autoComplete="username"
            className={s.inputForm}
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter pass"
            autoComplete="new-password"
            required
            className={s.inputForm}
          />
          <button type="submit" className={s.submitRegistrationBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

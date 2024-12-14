import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Invalid login or password!");
      });
    options.resetForm();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={s.boxLoginForm}>
      <h2 className={s.loginText}>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.loginForm}>
          <Field
            name="email"
            placeholder="Enter email"
            autoComplete="username"
            className={s.inputForm}
          />
          <Field
            name="password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            required
            className={s.inputForm}
          />
          <button type="submit" className={s.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

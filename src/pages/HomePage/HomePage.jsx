import { FcContacts } from "react-icons/fc";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectError, selectLoading } from "../../redux/contacts/selections";
import Loader from "../../components/Loader/Loader";
import s from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={s.homePage}>
      {error && <p> Error: {error}</p>}

      {isLoggedIn ? (
        <h2>
          Welcome to your contacts <FcContacts />. Nice communication!
        </h2>
      ) : (
        <h2>
          Welcome to contacts <FcContacts />.
        </h2>
      )}
    </div>
  );
};

export default HomePage;

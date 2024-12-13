import { FcContacts } from "react-icons/fc";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
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

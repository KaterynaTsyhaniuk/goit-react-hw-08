import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.headerAppBar}>
      <Navigation />
      <div>{user.email}</div>

      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default AppBar;

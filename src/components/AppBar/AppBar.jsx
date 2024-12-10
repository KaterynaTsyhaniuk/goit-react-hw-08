import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={s.headerAppBar}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;

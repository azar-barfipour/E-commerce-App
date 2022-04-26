import { Link, useLocation } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const location = useLocation();
  const login = location.pathname === "/login";

  return (
    <header className={classes.header}>
      <h1>Handy Craft</h1>
      <nav>
        <ul className={classes["header-list"]}>
          <li>
            <CartButton />
          </li>
          <Link to="/login" className={classes["header-login__link"]}>
            <li
              className={`${classes["header-login"]} ${
                login ? classes["header-login__active"] : ""
              }`}
            >
              Login
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

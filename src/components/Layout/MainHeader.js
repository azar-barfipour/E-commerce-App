import { Link, useLocation } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/firebase-slice";

const MainHeader = () => {
  const location = useLocation();
  const login = location.pathname === "/login";
  const home = location.pathname === "/";

  const isLogin = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.logout(false));
  };

  return (
    <header className={classes.header}>
      <h1>Handy Craft</h1>
      <nav>
        <ul className={classes["header-list"]}>
          <Link to="/" className={classes["header-link"]}>
            {isLogin && (
              <li
                className={`${classes["header-home"]} ${
                  home ? classes["header-home__active"] : ""
                }`}
              >
                Home
              </li>
            )}
          </Link>
          <Link to="/login" className={classes["header-link"]}>
            <li
              className={`${classes["header-login"]} ${
                login ? classes["header-login__active"] : ""
              }`}
              onClick={isLogin ? logoutHandler : undefined}
            >
              {!isLogin ? "Login" : "Logout"}
            </li>
          </Link>

          {isLogin && (
            <li>
              <CartButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

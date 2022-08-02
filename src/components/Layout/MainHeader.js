import { Link, useLocation } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/firebase-slice";
import { backgroundActions } from "../../store/background-slice";

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
    <>
      <header className={classes.header}>
        <Link to="/" className={classes["header__icon"]}>
          <img
            width="100px"
            src="https://www.dastsazkala.com/files/upload/products/larg/%D8%A8%D8%AA%D9%87-%DA%86%D9%82%D9%87-%D9%85%D8%B3%DB%8C-%D9%85%DB%8C%D9%86%D8%A7%DA%A9%D8%A7%D8%B1%DB%8C-%D8%B4%D8%AF%D9%87-%DB%8C-%D9%BE%D8%A7%DB%8C%D9%87-%D8%AF%D8%A7%D8%B1-%D8%AF%DA%A9%D9%88%D8%B1%DB%8C-%DA%A9%D8%AF-LT-11-2365.jpg"
          />
        </Link>

        <nav>
          <ul className={classes["header-list"]}>
            <Link
              to="/"
              className={classes["header-link"]}
              onClick={() => dispatch(backgroundActions.setBackground(""))}
            >
              <li
                className={`${classes["header-item"]} ${
                  home ? classes["header-item__active"] : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link
              to="/login"
              className={classes["header-link"]}
              onClick={() =>
                dispatch(
                  backgroundActions.setBackground(
                    "https://c4.wallpaperflare.com/wallpaper/163/916/916/cat-look-fluffy-persian-cat-wallpaper-preview.jpg"
                  )
                )
              }
            >
              <li
                className={`${classes["header-item"]} ${
                  login ? classes["header-item__active"] : ""
                }`}
                onClick={isLogin ? logoutHandler : undefined}
              >
                {!isLogin ? "Login" : "Logout"}
              </li>
            </Link>

            <li className={classes["header__cart"]}>
              <CartButton />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;

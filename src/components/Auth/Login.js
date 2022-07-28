import { sighIn } from "./Firebase";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/firebase-slice";
import { useNavigate, Route } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sighInHandler = () => {
    sighIn();
    if (auth.currentUser) {
      dispatch(loginActions.login(true));
      navigate("/");
    }
  };

  return (
    <div className={classes["login-wrapper"]}>
      <button
        onClick={sighInHandler}
        className={classes["login-with-google-btn"]}
      >
        Sign In with Google
      </button>
      {/* <img src="https://c4.wallpaperflare.com/wallpaper/163/916/916/cat-look-fluffy-persian-cat-wallpaper-preview.jpg"></img> */}
    </div>
  );
};

export default Login;

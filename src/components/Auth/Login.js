import { sighIn } from "./Firebase";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/firebase-slice";
import { Navigate, Route } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  const sighInHandler = () => {
    sighIn();
    if (auth.currentUser) {
      <Route path="/redirect" element={<Navigate to="/" />} />;
      dispatch(loginActions.login(true));
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
    </div>
  );
};

export default Login;

import { sighIn } from "../../store/firebase-slice";
import { auth } from "../../store/firebase-slice";
const Login = () => {
  console.log(auth.currentUser?.emailVerified);
  return (
    <div>
      <button onClick={sighIn}>sigh In</button>
    </div>
  );
};

export default Login;

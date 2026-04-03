import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateFunction } from "../../utils/Validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCLick = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = () => {
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const confirmPasswordVal = confirmpassword.current?.value;
    let error = ValidateFunction(emailVal, passwordVal);

    if (!isSignIn && passwordVal !== confirmPasswordVal) {
      error = "Password and Confirm Password did not match.";
    }
    setErrorMsg(error);
    // If there is any error then return from here itself and if there is no error go for authentication logic.
    if (error) return;

    if (!isSignIn) {
      //SignUp Logic
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <div>
        <img
          className="w-full h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
          alt="background-image"
        />
        <form
          className="absolute inset-0 flex justify-center items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="bg-black/70 p-8 rounded cursor-pointer">
            <h1 className="text-white my-10 font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <input
              ref={email}
              className="block m-2 p-2 w-64"
              type="text"
              placeholder="Email ID"
            />
            <input
              ref={password}
              className="block m-2 p-2 w-64"
              type="password"
              placeholder="Password"
            />
            {!isSignIn ? (
              <input
                ref={confirmpassword}
                className="block m-2 p-2 w-64"
                type="password"
                placeholder="Confirm Password"
              />
            ) : (
              ""
            )}
            <h3 className="text-red-600 mx-3  w-64 break-words">{errorMsg}</h3>
            <button
              className="block mx-2 my-10 p-2 w-64 bg-red-600"
              onClick={handleBtnClick}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <h3 className="text-white" onClick={handleCLick}>
              {isSignIn ? "New to Netfilx- Sign Up" : "Existing User - Sign In"}
            </h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

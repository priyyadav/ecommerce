import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { onSnapshot, query, where } from "firebase/firestore";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../firebase/firebaseConfig";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const userSignupFunction = async () => {
    if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
      setErrorMessage("All Fields are required");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
      await updateProfile(auth.currentUser, { displayName: userSignup.name });

      const newUser = {
        name: userSignup.name,
        email: userSignup.email,
        uid: userCredential.user.uid,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const userRef = collection(fireDB, "user");
      await addDoc(userRef, newUser);

      setUserSignup({
        name: "",
        email: "",
        password: ""
      });

      setLoading(false);
      setIsSignUpForm(false);
    } catch (error) {
      console.error("Error signing up:", error.message);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  const userLoginFunction = async () => {
    if (userLogin.email === "" || userLogin.password === "") {
      setErrorMessage("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      setLoading(false);
      const displayName = userCredential.user.displayName;
      const userData = {
        email: userLogin.email,
        name: displayName,
        
      };
      localStorage.setItem("user", JSON.stringify(userData));
      navigate('/');
    } catch (error) {
      console.error("Error signing in:", error.message);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>

        {isSignUpForm && (
          <input
            value={userSignup.name}
            onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          value={isSignUpForm ? userSignup.email : userLogin.email}
          onChange={(e) => {
            if (isSignUpForm) setUserSignup({ ...userSignup, email: e.target.value });
            else setUserLogin({ ...userLogin, email: e.target.value });
          }}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          value={isSignUpForm ? userSignup.password : userLogin.password}
          onChange={(e) => {
            if (isSignUpForm) setUserSignup({ ...userSignup, password: e.target.value });
            else setUserLogin({ ...userLogin, password: e.target.value });
          }}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={isSignUpForm ? userSignupFunction : userLoginFunction}
        >
          {!isSignUpForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignUpForm
            ? "New to smartBuyer? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

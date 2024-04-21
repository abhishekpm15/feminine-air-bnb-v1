import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContextProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  async function Register(email, password, name) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Authentication Success", userCredential.user);
        toast.success("Registered Successfully!");
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log("error", error);
      });
  }

  async function SigninWithEmail(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Authentication Success", userCredential.user);
        toast.success("Signed in Successfully!");
        setTimeout(() => {
          // window.location.replace("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log("error", error);
      });
  }

  async function SignOut() {
    await signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
        toast.success("Signed out successfully");
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  async function SignUp() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((user) => {
        console.log("Authentication Success", user);
        toast.success("Signed in Successfully!");
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return subscribe;
  }, [user]);

  const value = {
    SignOut,
    SignUp,
    user,
    setUser,
    SigninWithEmail,
    Register,
  };

  return (
    <AuthContextProvider.Provider value={value}>
      <ToastContainer />
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };

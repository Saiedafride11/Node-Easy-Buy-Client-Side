import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {  useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google Sign In Button
    const SignInUsingGoogle = () => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider)
      .finally(() => {
        setIsLoading(false)
    })
  }

  useEffect( () => {
    const unsubscribed =  onAuthStateChanged(auth, user => {
         if (user) {
             setUser(user)
         } else {
             setUser({})
         }
         setIsLoading(false);
       });
       return () => unsubscribed;
 }, [auth])

   // SignOut Button
   const logOut = () => {
    signOut(auth)
    .then(() => {})
  }
    return {
      user, SignInUsingGoogle, logOut, isLoading
    }
};

export default useFirebase;
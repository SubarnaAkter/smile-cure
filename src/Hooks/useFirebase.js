import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // google sign in 
  const signInWithUsingGoogle = () => {
   signInWithPopup(auth, provider)

      .then((result) => {

        const user = result.user;
        setUser(user)
       console.log(user)
        // ...
      })
      .catch((error) => {
       
      
      });

  }


  const processLogin = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {

        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  const createNew = (email, password,userName) => {
    createUserWithEmailAndPassword(auth, email,password)
      .then(result => {
        const user = result.user;
        user.displayName=userName;
        setUser(user)

        console.log(user);

      })
      .catch(error => {
        setError(error.message);
      })

  }



  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    })
  }, [])

  return {
    user,
    signInWithUsingGoogle ,
    logOut,
    processLogin,
    createNew,
  }

}
export default useFirebase;
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
           
  // google sign in 
  const signInWithUsingGoogle = () => {
    setIsLoading(true);
    return  signInWithPopup(auth, provider);
    

  }


  const processLogin = (email, password) => {
    setIsLoading(true);
   return signInWithEmailAndPassword(auth, email, password);
      
  }
  const createNew = (email, password) => {
    setIsLoading(true);
     return createUserWithEmailAndPassword(auth, email,password);
      

      }
 
  // const updateUserInfo=(userName)=>{
  //   updateProfile(auth.currentUser, {
  //     displayName: userName})
  //     .then((result) => {
  //       setUser(result.user)
  //      })
      

  // }
  


  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
    
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
    }
    setIsLoading(false);
    })
  }, [])

  return {
    user,
    error,
    isLoading,
    setIsLoading,
    signInWithUsingGoogle ,
    logOut,
    processLogin,
    createNew,

    
  }

}
export default useFirebase;
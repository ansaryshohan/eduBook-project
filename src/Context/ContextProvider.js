import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);


const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const googleProvider= new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUserWithEmailPassword = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateProfileInfo = (name, photoUrl) => {
    setloading(true)
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
  }


  const verifyEmail = () => {
    setloading(true)
    return sendEmailVerification(auth.currentUser)
  }

  const signIn = (email, password) => { 
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password) 
  }

  const forgetPassword=(email)=>{
    setloading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut= ()=>{
    setloading(true)
    return signOut(auth);
  }

  const singInWithGoogle=()=>{
    return signInWithPopup(auth, googleProvider)
  }

  const signInWithGithub=()=>{
    return signInWithPopup(auth, githubProvider)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        // console.log(user)
        setloading(false)
   })

    return () => unsubscribe();
  }, [user])


  const authInfo = {
    user,
    loading,
    createUserWithEmailPassword,
    updateProfileInfo,
    verifyEmail,
    signIn,
    forgetPassword,
    logOut,
    singInWithGoogle,
    signInWithGithub,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
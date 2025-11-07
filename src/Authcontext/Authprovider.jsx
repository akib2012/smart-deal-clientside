import React, { useEffect, useState } from "react";
import Authcontext from "./Authcontext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";


const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singupuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login here

  const loginuser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };


  // singin with google here

  const singinwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  ///  update profile 

  const updateprofile = (updatedata) => {

    return updateProfile(auth.currentUser, updatedata);


  }


  // logout 


  const logout  = () => {
    setLoading(true);
    return signOut(auth);
  }

  // observer here

  useEffect(() => {
    const unsubcrive = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      unsubcrive();
    };
  }, []);




  const authinfo = {
    name: "akib  boss",
    singupuser,
    user,
    loading,
    setUser,
    setLoading,
    loginuser,
    singinwithgoogle,
    updateprofile,
    logout,
  };

  return (
    <div>
      <Authcontext value={authinfo}>{children}</Authcontext>
    </div>
  );
};

export default Authprovider;

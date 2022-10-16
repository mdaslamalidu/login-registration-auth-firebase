import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../Firebase/firebase.config"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export const authContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: "Aslam"})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscrite = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })

        return () => {
            unsubscrite()
        }
    }, [])


    const userInfo = { user, createUser, signInUser, logOut, signWithGoogle }

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;
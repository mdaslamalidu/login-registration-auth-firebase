import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/firebase.config"

const auth = getAuth(app)

export const authContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: "Aslam"})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { user, createUser, signInUser }

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;
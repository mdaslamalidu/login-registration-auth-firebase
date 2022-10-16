import React, { createContext, useState } from 'react';
import {getAuth} from "firebase/auth";
import app from "../Firebase/firebase.config"

const auth = getAuth(app)

export const authContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: "Aslam"})
    const userInfo = {user}

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;
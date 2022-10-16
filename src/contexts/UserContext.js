import React, { createContext } from 'react';


const authContext = createContext()

const UserContext = ({children}) => {
    const user = {dispalyName: "aslam"}
    const userInfo = {user}

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;
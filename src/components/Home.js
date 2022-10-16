import React, { useContext } from 'react';
import { authContext } from '../contexts/UserContext';

const Home = () => {

    const user = useContext(authContext)

    return (
        <div>
            <h2>{user?.user?.email}</h2>
        </div>
    );
};

export default Home;
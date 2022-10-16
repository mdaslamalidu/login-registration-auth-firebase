import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../contexts/UserContext';

const Header = () => {

    const {user, logOut} = useContext(authContext);
   
    const handleSignout = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    return (
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Auth Aplication</Link>
            <Link className="btn btn-ghost normal-case text-sm" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-sm" to="/login">Log in</Link>
                <Link className="btn btn-ghost normal-case text-sm" to="/register">Register</Link>
                {user?.email && <p>Welcome, {user?.email} </p>}
                { user?.email ? 
                    <button className="btn btn-ghost normal-case text-sm" onClick={handleSignout}> Log Out</button>
                    : 
                <Link to="/login"><button className='btn btn-outline btn-primary'>Log in</button></Link>
                }
            </div>
    );
};

export default Header;
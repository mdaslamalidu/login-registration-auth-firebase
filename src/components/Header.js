import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../contexts/UserContext';

const Header = () => {

    const userName = useContext(authContext);
    const user = userName.user.displayName;

    return (
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Auth Aplication</Link>
            <Link className="btn btn-ghost normal-case text-sm" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-sm" to="/login">Log in</Link>
                <Link className="btn btn-ghost normal-case text-sm" to="/register">Register</Link>
                {user && <p>Welcome, {user}</p>}
            </div>
    );
};

export default Header;
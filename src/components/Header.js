import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Auth Aplication</Link>
            <Link className="btn btn-ghost normal-case text-sm" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-sm" to="/login">Log in</Link>
                <Link className="btn btn-ghost normal-case text-sm" to="/register">Register</Link>
            </div>
    );
};

export default Header;
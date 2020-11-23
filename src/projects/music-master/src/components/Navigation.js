import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-background">
                <Link className="navbar-brand navbar-brand-style" to='/'>DD Web Based Solutions</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarList" aria-controls="navBarList" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarList">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link btn btn-nav-item" to='/'>Home</Link>
                        <a className="nav-item nav-link btn btn-nav-item pr-20" href="#">About</a>
                        <a className="nav-item nav-link btn btn-contact" href="#">Contact Me</a>
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default Navigation;
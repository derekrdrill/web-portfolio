import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/header-logo.png';

const Navigation = ({ children }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top nav-background">
                <Link className="navbar-brand navbar-brand-style" to='/'><img className="header-logo" src={headerLogo}></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarList" aria-controls="navBarList" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarList">
                    <div className="navbar-nav ml-auto">
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                For Fun!
                            </a>
                            <div className="dropdown-menu ml-auto" aria-labelledby="navbarDropdown">
                                <Link className="nav-item nav-link btn btn-nav-item" to='/jokes'>Jokes</Link>
                                <div className="dropdown-divider" style={{borderTop: '1px dashed gainsboro'}}></div>
                                <Link className="nav-item nav-link btn btn-nav-item" to='/music-master'>Music Master</Link>
                            </div>
                        </div>
                        <Link className="nav-item nav-link btn btn-nav-item" to='/business-prototypes'>Prototypes</Link>
                        <a className="nav-item nav-link btn btn-nav-item pr-20" href="#">About</a>
                        {/* <a className="nav-item nav-link btn btn-contact" href="#">Contact Me</a> */}
                    </div>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default Navigation;
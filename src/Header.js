import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Timer">Timer</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/ClassComponent">ClassComponent</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/TodoApp">TodoApp</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/ApiClass">ApiClass</a>
                    </li>
                    </ul>
                </div>
                </nav>
        </>
        );
    }
}

export default Header;
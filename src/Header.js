import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        <>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Timer">Timer</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/ClassComponent">ClassComponent</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/TodoApp">TodoApp</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/ApiClass">ApiClass</a>
                    </li>
                    </ul>
                </div>
                </nav>
        </>
        );
    }
}

export default Header;
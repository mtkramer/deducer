import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <h1>(Navbar Component)</h1>
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

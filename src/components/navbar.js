import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav id="navbar">
                <a className="navButton" href="#home">Home</a>
                <a className="navButton" href="#login">Login</a>
                <a className="navButton" href="#about">About</a>
                <a className="navButton" href="#contact">Contact us</a>
            </nav>
        );
    }
}

export default Navbar;

function $(x) { return document.getElementById(x); }
var pastOffset = window.pageYOffset;
window.onscroll = function() {
    var currentOffset = window.pageYOffset;
    pastOffset > currentOffset ? $("navbar").style.left = "0" : $("navbar").style.left = "-110%";
    pastOffset = currentOffset;
};

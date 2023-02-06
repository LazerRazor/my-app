import React from "react";
import "../styles/Navbar.css";
function Navbar() {
    return (
        <>
            <div className="navigationBar">
                <div className="navigationLogo">KJSCE Arena</div>
                <div className="navigationMenu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contests">Contests</a></li>
                        <li><a href="/problemset">Problem Set</a></li>
                        <li><a href='/leaderboard'>Leaderboard</a></li>
                    </ul>
                </div>
                <div className="navigationLogin">Log In</div>
            </div>
            <div className="navigationBarResponive">

            </div>
        </>
    );
}

export default Navbar;

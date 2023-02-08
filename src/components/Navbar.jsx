import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";
function Navbar() {
    const [toggle, setToggle] = useState(0);

    function toggleHandler()
    {
        setToggle(1 - toggle);
    }

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
            <div className="navigationBarResponsive">

                <div className="navigationHamburger" onClick={toggleHandler}>
                    {toggle ? <div>X</div> : <div>H</div>}                
                </div>
                <div className="navigationLogo">
                    KJSCE ARENA
                </div>
            </div>
           {toggle && <div className="responsiveMenu">
                    <a href="/">Home</a>
                    <a href="/contests">Contests</a>
                    <a href="/problemset">Problem Set</a>
                    <a href='/leaderboard'>Leaderboard</a>
            </div>}
            {/* <script>
            
            </script> */}
        </>
    );
}

export default Navbar;

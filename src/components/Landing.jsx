import React from "react";
import "../styles/Landing.css";
import heroImage from "../images/heroImage.png";
import landJobs from "../images/landJobs.png";
import problemSolving from "../images/problemSolving.png";
import winCompetitions from "../images/winCompetitions.png";

function Landing() {
    return (
        <>
            <div className="heroSection">
                <div className="heroText">
                    Get Better At Competitive Programming, One Bit At A Time.
                </div>
                <img className="heroImage" src={heroImage}></img>
            </div>
            <div className="advantagesSection">
                <div className="advantages">
                    <img
                        className="advantageImage"
                        src={problemSolving}
                        alt=""
                        srcset=""
                    />
                    Improve Problem Solving
                </div>
                <div className="advantages">
                    <img
                        className="advantageImage"
                        src={winCompetitions}
                        alt=""
                        srcset=""
                    />
                    Win Competitions
                </div>
                <div className="advantages">
                    <img
                        className="advantageImage"
                        src={landJobs}
                        alt=""
                        srcset=""
                    />
                    Land Your Dream Job
                </div>
            </div>
            <div className="problemSetSection">
                <div className="problemSetExample">
                    <table>
                        <tr>
                            <th>Problem Name</th>
                            <th>Rating</th>
                            <th>Solves</th>
                        </tr>
                        <tr>
                            <td>Xenia and Trees</td>
                            <td>2400</td>
                            <td>1254</td>
                        </tr>
                        <tr>
                            <td>Range Update Point Query</td>
                            <td>1500</td>
                            <td>3269</td>
                        </tr>
                        <tr>
                            <td>Game on Axis</td>
                            <td>1900</td>
                            <td>2257</td>
                        </tr>
                        <tr>
                            <td>Josuke and Complete Graph</td>
                            <td>1100</td>
                            <td>8465</td>
                        </tr>
                        <tr>
                            <td>Boris and His Amazing Haircut</td>
                            <td>1600</td>
                            <td>5453</td>
                        </tr>
                        <tr>
                            <td>The Forbidden Permutation</td>
                            <td>800</td>
                            <td>15762</td>
                        </tr>
                        
                    </table>
                </div>
                <div className="problemSetText">
                    Rock Solid Problem Set
                </div>
            </div>
            <div className="leaderBoardSection">
                <div className="leaderBoardText">
                    World Class Competitors
                </div>
                <div className="leaderBoardExample">
                    <table>
                        <tr>
                            <th>User Name</th>
                            <th>Rating</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Tourist</td>
                            <td>4400</td>
                            <td>🇧🇾</td>
                        </tr>
                        <tr>
                            <td>Um_Nik</td>
                            <td>3600</td>
                            <td>🇺🇦</td>
                        </tr>
                        <tr>
                            <td>Utkarsh Gupta</td>
                            <td>3269</td>
                            <td>🇮🇳</td>
                        </tr>
                        <tr>
                            <td>Everule</td>
                            <td>2667</td>
                            <td>🇮🇳</td>
                        </tr>
                        <tr>
                            <td>codemastercpp</td>
                            <td>1900</td>
                            <td>🇮🇳</td>
                        </tr>
                        <tr>
                            <td>Fluffyking</td>
                            <td>1050</td>
                            <td>🇮🇳</td>
                        </tr>
                        
                    </table>
                </div>
            </div>

            <div className="joinUs">
                What Are You Waiting For?
                <div className="joinUsButton">
                    Join Us Today
                </div>
            </div>
        </>
    );
}

export default Landing;

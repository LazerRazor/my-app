import React from "react";
import "../styles/Leaderboard.css";

function Leaderboard() {
    return (
        <>
            <div className="leaderboardPage">
                <div className="Title">Leaderboard</div>
                <div className="contestSearchBox">
                    <div className="sortByInstitute">
                        Sort By Institute
                    </div>
                    <div className="searchForPerson">
                        search for person // icon
                    </div>
                </div>
                <div className="leaderboardTable">
                <table>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Contests</th>
                            <th>Rating</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>omnking</td>
                            <td>64</td>
                            <td>4000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>fluffy_memory</td>
                            <td>12</td>
                            <td>3500</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Queue</td>
                            <td>120</td>
                            <td>3000</td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>fluffyking</td>
                            <td>13</td>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Everule</td>
                            <td>5</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Madoka</td>
                            <td>17</td>
                            <td>1500</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Leaderboard;

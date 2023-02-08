import React from "react";
import "../styles/Contests.css";

function Contests() {
    return (
        <>
            <div className="contestPage">
                <div className="Title">Contests</div>
                <div className="contestSearchBox">
                    <div className="sortByDivision">
                        Sort By Division
                    </div>
                    <div className="searchForContest">
                        search for contest // icon
                    </div>

                </div>
                <div className="upcomingContests">
                <table>
                        <tr>
                            <th>Upcoming Contests</th>
                            <th>Author</th>
                            <th>Start Time </th>
                            <th>Register</th>
                        </tr>
                        <tr>
                            <td>Round #851 (Div. 2)</td>
                            <td>omnking</td>
                            <td>Feb/09/2023 20:05UTC</td>
                            <td>Click Here</td>
                        </tr>
                        <tr>
                            <td>Round #852 (Div. 2)</td>
                            <td>fluffy_memory</td>
                            <td>Feb/09/2023 20:05UTC</td>
                            <td>Click Here</td>

                        </tr>
                        <tr>
                            <td>Educational Codeforces Round 143 (Rated for Div. 2)</td>
                            <td>Queue</td>
                            <td>Feb/09/2023 20:05UTC</td>
                            <td>Click Here</td>

                        </tr>
                        <tr>
                            <td>Codeforces Round (Div. 2)</td>
                            <td>fluffyking</td>
                            <td>Feb/09/2023 20:05UTC</td>
                            <td>Click Here</td>

                        </tr>
                        <tr>
                            <td>Educational Codeforces Round 144 (Rated for Div. 2)</td>
                            <td>Everule</td>
                            <td>Feb/09/2023 20:05UTC</td>
                            <td>Click Here</td>
                        </tr>
                        <tr>
                            <td>Codeforces Round (Div. 2)</td>
                            <td>Madoka</td>
                            <td>Feb/09/2023 20:05UTC</td>
                            <td>Click Here</td>
                        </tr>
                    </table>
                </div>
                <div className="pastContests">
                <table>
                        <tr>
                            <th>Past Contests</th>
                            <th>Author</th>
                            <th>Practice</th>
                        </tr>
                        <tr>
                            <td>Round #851 (Div. 2)</td>
                            <td>omnking</td>
                            <td>Click Here</td>
                        </tr>
                        <tr>
                            <td>Round #852 (Div. 2)</td>
                            <td>fluffy_memory</td>
                            <td>Click Here</td>

                        </tr>
                        <tr>
                            <td>Educational Codeforces Round 143 (Rated for Div. 2)</td>
                            <td>Queue</td>
                            <td>Click Here</td>

                        </tr>
                        <tr>
                            <td>Codeforces Round (Div. 2)</td>
                            <td>fluffyking</td>
                            <td>Click Here</td>

                        </tr>
                        <tr>
                            <td>Educational Codeforces Round 144 (Rated for Div. 2)</td>
                            <td>Everule</td>
                            <td>Click Here</td>
                        </tr>
                        <tr>
                            <td>Codeforces Round (Div. 2)</td>
                            <td>Madoka</td>
                            <td>Click Here</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Contests;

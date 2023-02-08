import React from "react";
import "../styles/Problemset.css";

function Problemset() {
    return (
        <>
            <div className="problemSetPage">
                <div className="Title">Problem Set</div>
                <div className="contestSearchBox">
                    <div className="filterByTag">
                        Filter Tag
                    </div>
                    <div className="minRating">
                        Min Rating
                    </div>
                    <div className="maxRating">
                        Max Rating
                    </div>
                </div>
                <div className="problemSetTable">
                <table>
                        <tr>
                            <th>Problem Name</th>
                            <th>Rating</th>
                            <th>Tags</th>
                            <th>Solves</th>
                        </tr>
                        <tr>
                            <td>Xenia and Trees</td>
                            <td>2400</td>
                            <td>Centroid Decomposition</td>
                            <td>1254</td>
                        </tr>
                        <tr>
                            <td>Range Update Point Query</td>
                            <td>1500</td>
                            <td>Brute Force</td>
                            <td>3269</td>
                        </tr>
                        <tr>
                            <td>Game on Axis</td>
                            <td>1900</td>
                            <td>Cancer Math</td>
                            <td>2257</td>
                        </tr>
                        <tr>
                            <td>Josuke and Complete Graph</td>
                            <td>1100</td>
                            <td>Graph Theory</td>

                            <td>8465</td>
                        </tr>
                        <tr>
                            <td>Boris and His Amazing Haircut</td>
                            <td>1600</td>
                            <td>Data Structures</td>
                            <td>5453</td>
                        </tr>
                        <tr>
                            <td>The Forbidden Permutation</td>
                            <td>800</td>
                            <td>Permutations</td>
                            <td>15762</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Problemset;

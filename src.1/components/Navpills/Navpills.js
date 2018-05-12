import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified nav-menu">
            <li>
                <div>
                    <a href="/">Game of Thrones Memory Game</a>
                </div>
            </li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                <div>
                    {props.message}
                </div>
            </li>
            <li>
                <div>
                    Score: <span style={{ color: "yellow" }}>{props.score}</span> | Top Score: {props.topScore}
                </div>
            </li>
        </ul>
    </div>
);

export default Navpills;
import React from "react";
import "./App.css";
import pic from "./images/profile pic.png";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <div>
                    <header className="App-header">Sara Fleck</header>
                </div>
                <p></p>
                <div className="Profile">
                    <img className="Image" src={pic} />
                </div>
                <div className="About"> About Me</div>
                <ul className="Body">
                    <li>
                        Undergraduate Exercise Science & Computer Science
                        student at the University of Delaware
                    </li>
                    <li>
                        {" "}
                        Research assistant with the Falls and Mobility Lab{" "}
                    </li>
                    <li>
                        Teaching assistant for introductory computer science
                        classes at UD
                    </li>
                    <li>Towamencin swim team coach</li>
                </ul>
            </div>
        </>
    );
}

export default App;

import React from "react";
import "./About.css";

function About() {

    return (
        <div>
            <div className="jumbotron homeapp texcenter">
                <div>
                    <h1 id="title1">About Us</h1>
                </div>
                <hr />
                <div>
                    <p id="title2">We are a team of developers who are passionate about creating new and innovative applications.</p>
                    <p id="title2" style={{ textDecoration: "underline" }}>Team Members:</p>
                    <p id="title2">Renuka Patwari</p>
                    <p id="title2">Suyog Havare</p>
                    <p id="title2">Vibodh Bhosure</p>
                    <p id="title2">Yash Jagdale</p>
                    <p id="title2" style={{ textDecoration: "underline" }}>Mentor/Guide:</p>
                    <p id="title2">Prof. Divya Surve</p>
                    <p id="title2" style={{ textDecoration: "underline" }}>Affiliation:</p>
                    <p id="title2">Computer Engineering Department</p>
                    <p id="title2">Vidyalankar Institute of Technology, Mumbai</p>
                </div>
            </div>
        </div >
    );
}

export default About;
import React from "react";
import "./Home.css"
import { useState } from "react";
import axios from "axios";

function Home() {
    const [data, setdata] = useState({
        message: "",
        prediction: ""
    });
    const [submitButtonText, setsubmitButtonText] = useState("Predict");
    const [submitButton, setsubmitButton] = useState(false);
    const [q1, setq1] = useState('');
    const [q2, setq2] = useState('');
    const [q3, setq3] = useState('');
    const [q4, setq4] = useState('');
    const [q5, setq5] = useState('');
    const [q6, setq6] = useState('');
    const [q7, setq7] = useState('');
    const [q8, setq8] = useState('');
    const [q9, setq9] = useState('');
    const [q10, setq10] = useState('');
    const [age, setage] = useState('');
    const [sex, setsex] = useState('');
    const [ethnicity, setethnicity] = useState('');
    const [childjaundice, setchildjaundice] = useState('');
    const [familyjaundice, setfamilyjaundice] = useState('');
    const [algo, setalgo] = useState('1');

    const handleChangeq1 = (event) => {
        setq1(event.target.value);
    };
    const handleChangeq2 = (event) => {
        setq2(event.target.value);
    };
    const handleChangeq3 = (event) => {
        setq3(event.target.value);
    };
    const handleChangeq4 = (event) => {
        setq4(event.target.value);
    };
    const handleChangeq5 = (event) => {
        setq5(event.target.value);
    };
    const handleChangeq6 = (event) => {
        setq6(event.target.value);
    };
    const handleChangeq7 = (event) => {
        setq7(event.target.value);
    };
    const handleChangeq8 = (event) => {
        setq8(event.target.value);
    };
    const handleChangeq9 = (event) => {
        setq9(event.target.value);
    };
    const handleChangeq10 = (event) => {
        setq10(event.target.value);
    };
    const handleChangeage = (event) => {
        setage(event.target.value);
    };
    const handleChangesex = (event) => {
        setsex(event.target.value);
    };
    const handleChangeethnicity = (event) => {
        setethnicity(event.target.value);
    };
    const handleChangechildjaundice = (event) => {
        setchildjaundice(event.target.value);
    };
    const handleChangefamilyjaundice = (event) => {
        setfamilyjaundice(event.target.value);
        setsubmitButton(true);
    };
    const handleChangealgo = (event) => {
        setalgo(event.target.value);
    };

    let answer = `${q1},${q2},${q3},${q4},${q5},${q6},${q7},${q8},${q9},${q10},${age},${sex},${ethnicity},${childjaundice},${familyjaundice}`;
    console.log(answer);

    console.log(algo);

    let baseUrl = `https://autism-detection-system.onrender.com/api/algo/${algo}/data/${answer}`;

    async function identifyChange() {
        setsubmitButton(false);
        setsubmitButtonText("Predicting...");
        await axios.get(baseUrl).then((response) => {
            setdata(response.data);
        });
        document.getElementById("hidden").style.display = "block";
        setsubmitButton(true)
        setsubmitButtonText("Predict");
    }

    function closeOverlay() {
        document.getElementById("hidden").style.display = "none";
    }

    console.log(data);

    return (
        <div>
            <div id="hidden">
                <div className="container-fluid tex-center  ">
                    <div className="row" style={{ marginTop: "15.688rem" }}>
                        <div className="col-md">
                            <p className="label-text" style={{ color: "#3377ff", textShadow: "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff" }}>The Prediction is: {data.message} </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <button className="btn btn-warning" onClick={closeOverlay}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron homeapp tex-center">
                <div>
                    <h1 id="title1">Autism Screening Test</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Does your child look at you when you call his/her name?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq1}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"}>Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>How easy is it for you to get eye-contact with your child?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq2}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"} >Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Does your child point to indicate that he/she wants something?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq3} >
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"} >Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Does your child point to share interest with you?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq4}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"} >Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Does your child pretend?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq5}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"} >Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Does your child follow where you are looking?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq6}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"} >Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>If you or someone in your family is visibly upset,</p>
                                <p>does your child show signs of wanting to comfort them?</p>
                                <select className="form-control" onChange={handleChangeq7}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"}>Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Would you describe your child first words as?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq8} >
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"}>Very Typical</option>
                                    <option value={"0"}>Quite Typical</option>
                                    <option value={"1"}>Slightly Unusual</option>
                                    <option value={"1"}>Very Unusual</option>
                                    <option value={"1"}>Child does not speak</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Does your child use simple gestures?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq9}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"}>Always</option>
                                    <option value={"0"}>Usually</option>
                                    <option value={"1"}>Sometimes</option>
                                    <option value={"1"}>Rarely</option>
                                    <option value={"1"}>Never</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Does your child stare at nothing with no apparent purpose?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeq10}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"1"} >Always</option>
                                    <option value={"1"}>Usually</option>
                                    <option value={"0"}>Sometimes</option>
                                    <option value={"0"}>Rarely</option>
                                    <option value={"0"}>Never</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Enter child age in months:</p>
                                <p>&nbsp;</p>
                                <input type="text" placeholder="Enter Age..." className="form-control" value={age} onChange={handleChangeage} />

                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Enter Child sex:</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangesex}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"1"}>Male</option>
                                    <option value={"0"}>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Enter child Ethnicity:</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangeethnicity}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"0"}>Hispanic</option>
                                    <option value={"1"}>Latino</option>
                                    <option value={"3"}>Others</option>
                                    <option value={"4"}>Pacifica</option>
                                    <option value={"5"}>White European</option>
                                    <option value={"6"}>Asian</option>
                                    <option value={"7"}>Black</option>
                                    <option value={"8"}>Middle eastern</option>
                                    <option value={"9"}>Mixed</option>
                                    <option value={"10"}>South Asian</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Does the child has an history of jaundice?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangechildjaundice}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"1"}>Yes</option>
                                    <option value={"0"}>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <p>Does the child family has an ASD history?</p>
                                <p>&nbsp;</p>
                                <select className="form-control" onChange={handleChangefamilyjaundice}>
                                    <option value={""}>Select a option...</option>
                                    <option value={"1"}>Yes</option>
                                    <option value={"0"}>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md">
                            <div>
                                <p>Which Algorithm do you want to use?</p>
                                <p>(For Research Purpose Only)</p>
                                <select className="form-control" onChange={handleChangealgo}>
                                    <option value={"1"}>Logistic Regression</option>
                                    <option value={"2"}>Decision Tree Classifier</option>
                                    <option value={"3"}>K-Nearest Neighbor Classifier</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-success" onClick={identifyChange} disabled={!submitButton}>{submitButtonText}</button>
            </div >
        </div>
    );
}

export default Home;
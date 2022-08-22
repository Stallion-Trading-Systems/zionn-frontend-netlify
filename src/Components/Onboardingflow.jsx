import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import "./onboardingflow.css";
import Button2 from "./Button2";
import { useNavigate } from "react-router";
import slider from "../assets/slider.svg"
import * as api from "../axios";

const Onboardingflow = () => {
    const navigate = useNavigate();
const [curr_employer, setEmployer] = useState("");
const [designation, setDesignation] = useState("");
const [tenure, setTenure] = useState(0);
const [tenuredis, setTenuredis] = useState("");
const [user, setUser] = useState(false);
const [slidervalue, setSlidervalue] = useState(false);

const onboard = async (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("user"));

    let email = data.email

    // axios req

    let res = await api.onBoarding({ email, curr_employer, designation, tenure })

    console.log(res.data.message);
    if (res.data.message === "Details saved") {
        setTimeout(() => {
            navigate("/");
        }, 500);
    } else {
        alert(res.data.message)
    }
};
const settenurefun = (e) => {
    e.preventDefault();
    setSlidervalue(true);
    setTenure(e.target.value);
    if (e.target.value == 1)
        setTenuredis("<=");
    else if (e.target.value == 10)
        setTenuredis(">=");
    else setTenuredis("");
}
return (
    <>
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 order-2 order-lg-1">
                        <div className="con-image mt-5">
                            <img className="img-signup" src={signuppic} alt="signuppic" />
                        </div>
                    </div>
                    <div className="col-md-6 order-1 mt-10 d-flex justify-content-center" >
                        <div className="mob-v-only" >
                            <img className='img-slider' src={slider} alt="slider" />
                            <div className='txt-slider'>
                                <div class="ticker-wrapper-h">
                                    <ul class="news-ticker-h">
                                        <li><p>&nbsp;&nbsp;liquidate your ESOPs.&nbsp;&nbsp;</p></li>
                                        <li><p>&nbsp;&nbsp;be rich.&nbsp;&nbsp;</p></li>
                                        <li><p>&nbsp;&nbsp;build long term wealth.&nbsp;&nbsp;</p></li>
                                        <li><p>&nbsp;&nbsp;finalize that trip to the baltics.&nbsp;&nbsp;</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form-on ">
                            <form id="form1" onSubmit={onboard}>
                                <div className=" container">
                                    <div className="row">
                                        <p className="txt-2">a few questions to get to know you</p>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="inp-css">
                                                <input
                                                    onChange={(e) => {
                                                        setEmployer(e.target.value);
                                                    }}
                                                    type="text"
                                                    className="butto-2 input-form"
                                                    placeholder="current employer"
                                                    required
                                                />
                                            </div>
                                            <div className="inp-css mt-4">
                                                <input
                                                    onChange={(e) => {
                                                        setDesignation(e.target.value);
                                                    }}
                                                    type="text"
                                                    className="butto-2 input-form"
                                                    placeholder="designation (time to brag!)"
                                                    required
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="txt-2">tenure at current firm </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-3 input-range-side-1">
                                            &#60; 1 year
                                        </div>
                                        <div className="col-6">
                                            <input className="form-range input-slider" value={tenure} type="range" min="1" max="10" id="customRange2" onInput={settenurefun} />

                                        </div>
                                        <div className="col-3 input-range-side-2">
                                            &#62;10 years

                                        </div>
                                    </div>
                                    <div className="row ten-cen-css">
                                        {tenuredis}{tenure} Years
                                    </div>
                                    <div className="row ">
                                        <div className="col d-flex justify-content-center">
                                            <div className="sign-btn">
                                                <button
                                                    form="form1"
                                                    type="submit"
                                                    className="btn-2-suu"
                                                    onSubmit={onboard}
                                                >
                                                    getstarted
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default Onboardingflow;

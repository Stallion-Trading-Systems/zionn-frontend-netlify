import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import "./onboardingflow.css";
import Button2 from "./Button2";
import { useNavigate } from "react-router";

import * as api from "../axios";

const Onboardingflow = () => {
    const [curr_employer, setEmployer] = useState("");
    const [designation, setDesignation] = useState("");
    const [tenure, setTenure] = useState(0);
    const [tenuredis, setTenuredis] = useState("");
    const [user, setUser] = useState(false);
    const [slidervalue,setSlidervalue]=useState(false);
    const navigate = useNavigate();

    const onboard = async (e) => {
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem("user"));

        let email = data.email

        // axios req

        let res = await api.onBoarding({email , curr_employer,designation,tenure})

        console.log(res.data.message);
        if(res.data.message==="Details saved"){
            setTimeout(() => {
                navigate("/");
            }, 500);
        }else{
            alert(res.data.message)
        }
    };
    const settenurefun=(e)=>{
        e.preventDefault();
        setSlidervalue(true);
        setTenure(e.target.value);
        if(e.target.value==1)
        setTenuredis("<=");
        else if(e.target.value==10)
        setTenuredis(">=");
        else setTenuredis("");
    }
    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col order-2 order-lg-1">
                        <div className="con-image mt-5">
                            <img className="img-signup" src={signuppic} alt="signuppic" />
                        </div>
                    </div>
                    <div className="txt col pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                        <div className="container">
                            <form id="form1" onSubmit={onboard}>
                                <div className="container">
                                    <div className="row">
                                        <p className="txt-2">a few questions to get to know you</p>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col-8">
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
                                        <div className="col"></div>
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
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col"></div>
                                        <div className="col">
                                            <div className="sign-btn">
                                                <button
                                                    form="form1"
                                                    type="submit"
                                                    className="btn-2-su"
                                                    onSubmit={onboard}
                                                >
                                                    getstarted
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col"></div>
                                        <div className="col"></div>
                                        <div className="col-4"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboardingflow;

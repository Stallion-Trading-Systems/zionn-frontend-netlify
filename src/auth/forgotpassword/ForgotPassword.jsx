import React, { useState } from "react";
import signuppic from "../../assets/helloworld.gif";
import userexists from "../../assets/userexists.gif";
import usernotexists from "../../assets/usernotexists.gif";
import invalidotp from "../../assets/invalidotp.gif";
import slider from "../../assets/slider.svg"
import "../../Components/signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button2 from "../../Components/Button2";
import Slider from "../../Components/Slider"

import * as api from "../../axios";
import Loading from "../../Components/Loading";
import { NavLink, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const curruser = localStorage.getItem("user");
    const navigate = useNavigate();
    if (curruser !== null) {
        setTimeout(() => {

            navigate("/");
        }, 500)
    }
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [erroruae, setErroruae] = useState(false);  //user not exists
    const [errorotp, setErrorotp] = useState(false);  //OTP Invalid
    const [user, setUser] = useState(false);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsActive((current) => !current);
    };
    const defaultClick = (e) => {
        e.preventDefault();
        setIsActive(false);
    };
    const emailcheck = async (e) => {
        setLoading(true);
        e.preventDefault();
        let res = await api.emailfp({ email:email });
        // storing user token in local storage
        console.log(res.data.message);
        if(res.data.message=="User does'nt exits"){
            setErroruae(true);
            setError(true);
            setLoading(false);
        }
        else if(res.data.message=="OTP SENT"){
            setUser(true);
            setLoading(false);
            setError(false);
            setErroruae(false);
        }
    };

    const verify = async (e) => {
        setLoading(true);
        e.preventDefault();
        let res = await api.otpfp({ email, otp });
        console.log(res.data.message);
        if (res.data.message.includes("not")) {
            setError(true);
            setErrorotp(true);
            setLoading(false);
        } else {
            setError(false);
            setErroruae(false);
            setErrorotp(false);
            navigate(`/auth/resetpassword/${email}`);
            setLoading(false);
        }
    };

    return (
        <>
            {curruser ? (<></>) : (<div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-lg-1">
                            <div className="con-image mt-5">
                                {error ? (
                                    <></>
                                ) : (
                                    <img className="img-signup" src={signuppic} alt="signuppic" />
                                )}
                                {errorotp ? (
                                    <img className="img-signup" src={invalidotp} alt="signuppic" />
                                ) : <></>}
                                {erroruae ? (
                                    <img className="img-signup" src={usernotexists} alt="signuppic" />
                                ) : <></>}
                            </div>
                        </div>
                        <div className="form-css-su col-md-6 order-1 mt-10">
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
                            <div className="container form-su">
                                {user == false ? (
                                    <form id="form1" onSubmit={emailcheck}>
                                        <div className="container">
                                            {/* {erroruae&&<div className="row">
                                                <div class="alert alert-primary" role="alert">
                                                    user doesn't exits
                                                </div>
                                            </div>} */}
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <div className="inp-css mt-4">
                                                        <input
                                                            onChange={(e) => {
                                                                setError(false);
                                                                setErroruae(false);
                                                                setErrorotp(false);
                                                                setEmail(e.target.value);
                                                            }}
                                                            type="email"
                                                            className="butto-2 input-form"
                                                            placeholder="email"
                                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                            title="Please enter valid email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <div className="row ">
                                                <div className="col d-flex justify-content-center">
                                                    <div className="sign-btn ">
                                                        {loading ? (<><Loading /></>) : <><button
                                                            form="form1"
                                                            type="submit"
                                                            onPointerLeave={defaultClick}
                                                            onPointerDown={handleClick}
                                                            onPointerUp={handleClick}
                                                            className={isActive ? "btn-2-suu btn-2-suu-pressed" : "btn-2-suu"}
                                                            onSubmit={emailcheck}
                                                        >
                                                            verify email
                                                        </button></>}
                                                        {/* <Loading/> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <p className="txt-2">new user? <NavLink style={{ textDecoration: "none" }} className="pur-nav-css" to="/signup">sign up</NavLink> </p>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <form id="form2" onSubmit={verify}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <div className="inp-css mt-4">
                                                        <input type="text" style={{ display: "none" }} />
                                                        <input
                                                            onChange={(e) => {
                                                                setError(false);
                                                                setErroruae(false);
                                                                setErrorotp(false);
                                                                setOtp(e.target.value);
                                                            }}
                                                            type="text"
                                                            className="butto-2"
                                                            placeholder="enter otp (check email)"
                                                            title="otp should be of 6 digits"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col"></div>
                                            </div>

                                            <div className="row">
                                                <div className="col  d-flex justify-content-center">
                                                    <div className="sign-btn">
                                                        {loading ? <><Loading /></> : <button
                                                            form="form2"
                                                            type="submit"
                                                            className="btn-2-suu"
                                                            onSubmit={verify}
                                                        >
                                                            reset password
                                                        </button>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default ForgotPassword;

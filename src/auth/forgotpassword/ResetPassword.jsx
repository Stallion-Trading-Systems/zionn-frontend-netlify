import React, { useState } from "react";
import signuppic from "../../assets/helloworld.gif";
import "../../Components/signin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import slider from "../../assets/slider.svg"

import * as api from "../../axios";
import Loading from "../../Components/Loading";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const curruser = localStorage.getItem("user");
    const navigate = useNavigate();
    if (curruser !== null) {
        setTimeout(() => {
            navigate("/");
        }, 500)
    }
    const params = useParams();
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");
    const [error, setError] = useState(false);
    const [user, setUser] = useState(false);
    const [done, setDone] = useState(false);
    const [match, setMatch] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsActive((current) => !current);
    };
    const defaultClick = (e) => {
        e.preventDefault();
        setIsActive(false);
    };

    const resetpass = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (password != cpassword) {
            setMatch(true);
            setLoading(false);
            return;
        }
        let res = await api.passfp({ email: params.email, password: password });
        console.log(res.data.message);
        if (res.data.message == "Password reset") {
            setDone(true);
        }
        else {
            setLoading(false);
            alert("some error occured");
        }
    };

    return (
        <>
            {curruser ? (<></>) : (<div>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 order-2 order-lg-1">
                            <div className="con-image mt-5">
                                {error ? (
                                    <></>
                                ) : (
                                    <img className="img-signup" src={signuppic} alt="signuppic" />
                                )}
                            </div>
                        </div>
                        <div className="form-css-su col-md-6 order-1">
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
                            <div className="container form-si">
                                {done ? <div className="row">
                                    <div class="alert alert-success" role="alert">
                                        password changed successfully <NavLink style={{ textDecoration: "none" }} className="pur-nav-css" to="/signin">sign in here</NavLink>
                                    </div>
                                </div> : <>
                                    <form id="form1" onSubmit={resetpass}>
                                        <div className="container">
                                            {match && <div class="alert alert-warning" role="alert">
                                                password is not same
                                            </div>}
                                            <div className="row">
                                                <div className="col"></div>
                                                <div className="col-8">
                                                    <div className="inp-css mt-4">
                                                        <input
                                                            onChange={(e) => {
                                                                setPassword(e.target.value);
                                                                setMatch(false);
                                                            }}
                                                            type="password"
                                                            className="butto-2 input-form"
                                                            placeholder="password"
                                                            pattern=".{6,}"
                                                            title="Password should contain six or more characters"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="inp-css mt-4">
                                                        <input
                                                            onChange={(e) => {
                                                                setcPassword(e.target.value);
                                                                setMatch(false);
                                                            }}
                                                            type="password"
                                                            className="butto-2 input-form"
                                                            placeholder="confirm password"
                                                            pattern=".{6,}"
                                                            title="Password should contain six or more characters"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-center">
                                                    <div className="sign-btn">
                                                        {loading ? <><Loading /></> : <><button
                                                            form="form1"
                                                            type="submit"
                                                            onPointerLeave={defaultClick}
                                                            onPointerDown={handleClick}
                                                            onPointerUp={handleClick}
                                                            className={isActive ? "btn-2-suu btn-2-suu-pressed" : "btn-2-suu"}
                                                            onSubmit={resetpass}
                                                        >
                                                            reset password
                                                        </button></>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default ResetPassword;

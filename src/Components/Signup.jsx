import React, { useState } from "react";
import slider from "../assets/slider.svg"
import "./signup.css";
// import google from "../assets/google.png";
// import linkedin from "../assets/linkedin.png";
import Typewriter from "typewriter-effect";
import logo from "../assets/Vector.svg"

// import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";

import * as api from "../axios";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const curruser = localStorage.getItem("user");
  const navigate = useNavigate();
  if (curruser !== null) {
    setTimeout(() => {

      navigate("/");
    }, 500)
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [erroruae, setErroruae] = useState(false);  //user already exists
  const [errorotp, setErrorotp] = useState(false);  //OTP Invalid
  const [user, setUser] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const responseGoogle = async (res) => {
    console.log(res.profileObj.name);
    let nm = res.profileObj.name;
    let em = res.profileObj.email;
    let user_token = await api.userSignUp({
      name: nm,
      email: em,
      phone: undefined,
      password: undefined,
    });
    console.log(user_token);
    // storing user token in local storage
    localStorage.setItem(
      "user",
      JSON.stringify({ name: nm, email: em, token: user_token.data.token })
    );
    navigate("/onboarding");
  };
  const responseGoogleFail = (err) => {
    console.log(err);
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
  };
  const defaultClick = (e) => {
    e.preventDefault();
    setIsActive(false);
  };
  const [ut, setUT] = useState();
  const signupfun = async (e) => {
    setLoading(true);
    e.preventDefault();
    let user_token = await api.userSignUp({ name, email, phone, password });
    // storing user token in local storage
    console.log(user_token);
    setUT(user_token.data.taken);
    if (user_token.data.message === "User already exit") {
      setError(true);
      setErroruae(true);
      setOtp("");
      setLoading(false);
    }
    else {
      setError(false);
      setErroruae(false);
      setErrorotp(false);
      setUser(true);
      setOtp("");
      setLoading(false);
    }

  };

  const verify = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await api.otpVerify({ email, otp });

    if (res.data.message.includes("not")) {
      setError(true);
      setErrorotp(true);
      setLoading(false);
    } else {
      setError(false);
      setErroruae(false);
      setErrorotp(false);
      navigate("/onboarding");
      localStorage.setItem(
        "user",
        JSON.stringify({ name: name, email: email, token: ut })
      );
      setLoading(false);
    }
  };

  return (
    <>
      {curruser ? (<></>) : (<div>
        <div id="leftHalf-auth">
          <div className="container justify-content-center align-items-center">

            <div className="row d-flex ">
              <div className="typewriter-effect-auth-side-css">
                <Typewriter

                  onInit={(typewriter) => {
                    typewriter
                      .typeString("> Liquidate your ESOPs")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> Invest in private tech unicorns")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> The future of private market liquidity")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> Liquidate your ESOPs")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> Invest in private tech unicorns")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> The future of private market liquidity")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> Liquidate your ESOPs")
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="rightHalf-auth">
          <div className="container">
            <div className="top-right-css">
              <img className="mon-img-sb" src={logo} />
            </div>
            <div className="row">
              <div className="form-css-su">
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
                    <form id="form1" onSubmit={signupfun}>
                      <div className="container">
                        <div className="row">
                          <div className="col-2"></div>
                          <div className="col-8">
                            {erroruae&&<div style={{ textAlign: "center" }} class="alert alert-warning" role="alert">
                              user already exists
                            </div>}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col"></div>
                          <div className="col-8">
                            <div className="inp-css">
                              <input
                                onChange={(e) => {
                                  setError(false);
                                  setErroruae(false);
                                  setErrorotp(false);
                                  setName(e.target.value);
                                }}
                                type="text"
                                className="butto-2 input-form"
                                placeholder="full name"
                                required
                              />
                            </div>
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
                            <div className="inp-css mt-4">
                              <input
                                onChange={(e) => {
                                  setError(false);
                                  setErroruae(false);
                                  setErrorotp(false);
                                  setPhone(e.target.value);
                                }}
                                type="tel"
                                className="butto-2 input-form"
                                placeholder="phone #"
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                title="Phone number should contain 10 digits"
                                required
                              />
                            </div>
                            <div className="inp-css mt-4">
                              <input
                                onChange={(e) => {
                                  setError(false);
                                  setErroruae(false);
                                  setErrorotp(false);
                                  setPassword(e.target.value);
                                }}
                                type="password"
                                className="butto-2 input-form"
                                placeholder="password"
                                pattern=".{6,}"
                                title="Password should contain six or more characters"
                                required
                              />
                            </div>
                          </div>
                          <div className="col"></div>
                        </div>
                        {/* <div className="row">
                          <p className="txt-2">sign up using </p>
                        </div> */}
                        {/* <div className="row">
                          <div className="col d-flex justify-content-center">
                            <GoogleLogin
                              form="form322"
                              clientId="996239129131-q9s3srbpod0s7vat2g1ufj6o87enmtu0.apps.googleusercontent.com"
                              render={(renderProps) => (
                                <button
                                  className="social-btn"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                  form="form322"
                                >
                                  <img
                                    className="social-media-google"
                                    src={google}
                                  />
                                </button>
                              )}
                              buttonText="Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogleFail}
                              cookiePolicy={"single_host_origin"}
                            />
                          </div> */}
                          {/* <div className="col-2">
                              <button className="social-btn" form="form2">
                                <img
                                  className="social-media-linkedin"
                                  src={linkedin}
                                />
                              </button>
                            </div> */}
                        {/* </div> */}
                        <div className="row mt-3">
                          <div className="col d-flex justify-content-center">
                            <div className="sign-btn ">
                              {loading ? (<><Loading /></>) : <><button
                                form="form1"
                                type="submit"
                                onPointerLeave={defaultClick}
                                onPointerDown={handleClick}
                                onPointerUp={handleClick}
                                className={isActive ? "btn-2-suu btn-2-suu-pressed" : "btn-2-suu"}
                                onSubmit={signupfun}
                              >
                                sign up
                              </button></>}
                              {/* <Loading/> */}
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <p className="txt-2">already a user? <NavLink style={{ textDecoration: "none" }} className="pur-nav-css" to="/signin">sign in</NavLink> </p>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form id="form2" onSubmit={verify}>
                      <div className="container">
                      <div className="row">
                          <div className="col-2"></div>
                          <div className="col-8">
                            {errorotp&&<div style={{ textAlign: "center" }} class="alert alert-danger" role="alert">
                              wrong otp
                            </div>}
                          </div>
                        </div>
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
                                verify OTP
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
        </div>
      </div>)}
    </>
  );
};

export default Signup;

import React, { useState } from "react";
import signuppic from "../assets/helloworld.gif";
import userexists from "../assets/userexists.gif";
import invalidotp from "../assets/invalidotp.gif";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import Button2 from "./Button2";

import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";

import * as api from "../axios";

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
    setTimeout(() => {
      navigate("/onboarding");
    }, 2000);
  };
  const responseGoogleFail = (err) => {
    console.log(err);
  };

  const signupfun = async (e) => {
    e.preventDefault();
    setOtp("");
    let user_token = await api.userSignUp({ name, email, phone, password });
    setOtp("");
    // storing user token in local storage
    localStorage.setItem(
      "user",
      JSON.stringify({ name: name, email: email, token: user_token.data.token })
    );
    setOtp("");
    console.log(user_token.data.message);
    if (user_token.data.message === "User already exit") {
      setError(true);
      setErroruae(true);
      setOtp("");
    }
    else {
      setError(false);
      setErroruae(false);
      setErrorotp(false);
      setUser(true);
      setOtp("");
      console.log(otp);
    }

  };

  const verify = async (e) => {
    e.preventDefault();
    let res = await api.otpVerify({ email, otp });

    if (res.data.message.includes("not")) {
      console.log(e.target.value);
      setError(true);
      setErrorotp(true);
    } else
      setTimeout(() => {
        setError(false);
        setErroruae(false);
        setErrorotp(false);
        navigate("/onboarding");
      }, 500);
  };

  return (
    <>
      {curruser ? (<></>) : (<div>
        <div className="container ">
          <div className="row">
            <div className="col order-2 order-lg-1">
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
                  <img className="img-signup" src={userexists} alt="signuppic" />
                ) : <></>}
              </div>
            </div>
            <div className="txt col pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
              <div className="container">
                {user == false ? (
                  <form id="form1" onSubmit={signupfun}>
                    <div className="container">
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
                      <div className="row">
                        <p className="txt-2">sign up using </p>
                      </div>
                      <div className="row">
                        <div className="col"></div>
                        <div className="col-8">
                          <div className="row">
                            <div className="col-4"></div>
                            <div className="col-2">
                              <GoogleLogin
                                form="form322"
                                clientId="1002474588776-p7fi5pd1hpf1fjp1p9v33iet3i9u1fco.apps.googleusercontent.com"
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
                            </div>
                            <div className="col-2">
                              <button className="social-btn" form="form2">
                                <img
                                  className="social-media-linkedin"
                                  src={linkedin}
                                />
                              </button>
                            </div>
                            <div className="col-4"></div>
                          </div>
                        </div>
                        <div className="col"></div>
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
                              onSubmit={signupfun}
                            >
                              sign up
                            </button>
                          </div>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-4"></div>
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
                          <input type="text" style={{display:"none"}}/>
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
                        <div className="col-3"></div>
                        <div className="col"></div>
                        <div className="col">
                          <div className="sign-btn">
                            <button
                              form="form2"
                              type="submit"
                              className="btn-2-su"
                              onSubmit={verify}
                            >
                              verify OTP
                            </button>
                          </div>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-4"></div>
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

export default Signup;

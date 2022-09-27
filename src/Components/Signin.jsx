import React, { useState } from "react";
import "./signin.css";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";
import slider from "../assets/slider.svg"
import Typewriter from "typewriter-effect";
import logo from "../assets/Vector.svg"

import * as api from "../axios";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const curruser = localStorage.getItem("user");
  const navigate = useNavigate();
  if (curruser !== null) {
    setTimeout(() => {
      navigate("/");
    }, 500)
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorwep, setErrorwep] = useState(false); //wrong email password
  const [errorune, setErrorune] = useState(false); //user not exists
  const [user, setUser] = useState(false);
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
  const responseGoogle = async (res) => {
    let em = res.profileObj.email;
    let user_token = await api.userSignIn({ email: em });

    localStorage.setItem(
      "user",
      JSON.stringify({ email: em, token: user_token.data.token })
    );

    if (user_token.data.message === "user logged in") {
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      console.log(user_token.data.message);
    }

  };
  const responseGoogleFail = (err) => {
    console.log(err);
  };

  const signinfun = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await api.userSignIn({ email, password });
    console.log(res);
    if (res.data.message === "User logged up") {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, token: res.data.token })
      );
      setTimeout(() => {
        navigate("/");
      }, 500);
      setLoading(false);
    } else {
      console.log(res.data.message);
      if (res.data.message === "user doesn't exist") {
        setError(true);
        setErrorune(true);
        setLoading(false);

      }
      else if (res.data.message === "Wrong password or email") {
        setError(true);
        setErrorwep(true);
        setLoading(false);
      }
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
                      .typeString("> Invest in private tech unicorns=")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> The future of private market liquidity")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> Liquidate your ESOPs")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("> Invest in private tech unicorns=")
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
          <div className="container ">
            <div className="top-right-css">
              <img className="mon-img-sb" src={logo} />
            </div>
            <div className="row">

              <div className="form-css-su col">
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
                  <form id="form1" onSubmit={signinfun}>
                    <div className="container">
                      <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                          {errorune && <div style={{ textAlign: "center" }} class="alert alert-danger" role="alert">
                            user not exists
                          </div>}
                          {errorwep && <div style={{ textAlign: "center" }} class="alert alert-danger" role="alert">
                            wrong email or password
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
                                setErrorune(false);
                                setErrorwep(false);
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
                        <p className="txt-2">sign in using </p>
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-center">
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
                        {/* <div className="col-2">
                            <button className="social-btn" form="form2">
                              <img
                                className="social-media-linkedin"
                                src={linkedin}
                              />
                            </button>
                          </div> */}
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
                              onSubmit={signinfun}
                            >
                              sign in
                            </button></>}
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <p className="txt-2">forgot password? <NavLink style={{ textDecoration: "none" }} className="pur-nav-css" to="/auth/forgotpassword">reset now</NavLink> </p>
                      </div>
                      <div className="row mt-3">
                        <p className="txt-2">not registered with us? <NavLink style={{ textDecoration: "none" }} className="pur-nav-css" to="/signup">sign up</NavLink> </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Signin;

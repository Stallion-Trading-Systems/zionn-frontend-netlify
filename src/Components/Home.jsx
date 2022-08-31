import React, { useState, useCallback } from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import Open from "../assets/Open.png";
import TitleButton from "./TitleButton";
import ola from "../assets/ola.png";
import swiggy from "../assets/swiggy.png";
import lenskart from "../assets/lenskart.svg";
import unacademy from "../assets/unacademy.png";
import Button2 from "./Button2";
import ofbusiness from "../assets/ofbusiness.svg"
import pharmeasy from "../assets/pharmeasy.png"
import logo from "../assets/Vector.svg";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Delayed from './Delayed';
import FooterP from './FooterP';
import monkey from "../assets/monkey.svg"
import pic1 from "../assets/Pic1.svg"
import pic2 from "../assets/Pic2.svg"
import pic3 from "../assets/Pic3.svg"
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router";
import Slider from "./Slider";
import Loading from "./Loading";

const Home = () => {
    const user = localStorage.getItem("user");
    const userobj = JSON.parse(localStorage.getItem('user'));
    var uname = "zionn";
    if (user !== null) {
        uname = userobj.email.substring(0, userobj.email.indexOf('@'));
        uname = "https://staging.zionn.trade/signup?utm=" + uname;
    }
    const navigate = useNavigate();
    if (user === null) {
        setTimeout(() => {
            navigate("/signup");
        }, 500)
    }
    let logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/signup");
    };
    const [openlogout, setOpenlogout] = useState(false);
    const [linkref, setLinkref] = useState(uname);
    const [refon, setrefon] = useState(false);
    const reflinkfun = (e) => {
        e.preventDefault();
        setLinkref(uname);
        navigator.clipboard.writeText(linkref)
        setrefon(true);
        navigator.clipboard.writeText(linkref)
        setTimeout(() => {
            navigator.clipboard.writeText(linkref)
            setrefon(false);
        }, 1000);
        navigator.clipboard.writeText(linkref)
    }
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsActive((current) => !current);
    };
    const defaultClick = (e) => {
        e.preventDefault();
        setIsActive(false);
    };
    const items = [
        <SidebarItem>
            <div className="">
                <div>
                    <NavLink to="/" style={{ textDecoration: 'none' }}><img className="logo-size" src={logo} /></NavLink>

                </div>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-top">
                <NavLink to="/sellbuy" style={{ textDecoration: 'none' }}><Button widthv={120} name="sell/buy" /></NavLink>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top mb-4">
                <p data-tooltip-location="right" data-tooltip="we are still in beta. apologies for the half cooked experience"><Button widthv={120} name="calculator" /></p>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top mt-3">
                <NavLink to="/scoops" style={{ textDecoration: 'none' }}><Button widthv={120} name="scoops" /></NavLink>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <p data-tooltip-location="right" data-tooltip="we are still in beta. apologies for the half cooked experience"><Button widthv={120} name="learn" /></p>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="last-but mar-mid-top">
                <button onClick={reflinkfun} className={refon ? "refon" : "btn-2-ref"}>{refon ? "link copied!" : "refer to get $"}</button>

            </div>
        </SidebarItem>,
    ];
    return (
        <>
            {user && <div>
                <Sidebar
                    className="side-bar z-s-i-css"
                    content={items}
                    width={200}
                    background={"#FFF"}
                    toggleIconColor={"#7B61FF"}
                    color={"#000000"}
                    activeHightlight={"#FFF"}
                    hoverHighlight={"#FFF"}
                    textAlign={"center"}
                >
                    <div className="fix-nav ">
                        <div className="container">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-6 til-mob-css">
                                    <TitleButton name="we are still in beta. apologies for the half cooked experience" />
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2 logo-top">
                                    <div className={openlogout ? "dropdown-monkey monkey-click" : "dropdown-monkey"}>
                                        <button className="monkey-btn-css" onClick={() => { setOpenlogout(current => !current) }}><img className="logo-top-size " src={monkey} /></button>
                                        <div className={openlogout ? "dropdown-content-monkey monkey-click" : "dropdown-content-monkey"}>
                                            <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/company/zionn/" target="__blank"><Button name="contact" /></a>
                                            <button
                                                onPointerLeave={defaultClick}
                                                onPointerDown={handleClick}
                                                onPointerUp={handleClick}
                                                onClick={logOut}
                                                className={isActive ? "butt butt-ac logout-btn-css" : "butt logout-btn-css"}
                                            >
                                                logout&nbsp;
                                                <i class="bi bi-arrow-up-right"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setOpenlogout(false)} className="container con-abs">
                        <div className="row ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-10">

                                        <div className="container">
                                            <div className="row ">
                                                <div className="card-com-css col-lg-4 col ml-2 mt-5 d-flex">
                                                    <Card imgl={lenskart} name="Lenskart" ev=" $4.5B" in=" SoftBank, Premji Invest" cname="Lenskart" />
                                                </div>
                                                <div className="card-com-css col col-lg-4 ml-5 mt-5 d-flex">
                                                    <Card imgl={ola} name="OLA" ev=" $5B" in=" Softbank, Tencent" cname="OLA" />
                                                </div>
                                                <div className="card-com-css col col-lg-4 ml-5 mt-5 d-flex">
                                                    <Card imgl={unacademy} name="Unacademy" ev=" $3.44B" in=" Sequoia, Softbank" cname="Unacademy" />
                                                </div>

                                                <div className="card-com-css col col-lg-4 ml-5 mt-5 d-flex">
                                                    <Card imgl={Open} name="Open" ev=" $1B" in=" Tiger, Temasek" cname="Open" />
                                                </div>
                                                <div className="card-com-css col col-lg-4 ml-5 mt-5 d-flex">
                                                    <Card imgl={swiggy} name="Swiggy" ev=" $10.7B" in=" Prosus, Accel" cname="Swiggy" />
                                                </div>
                                                <div className="card-com-css col col-lg-4 ml-5 mt-5 d-flex">
                                                    <Card imgl={ofbusiness} name="OfBusiness" ev=" $5B" in=" Creation Investments, Matrix Partners" cname="OfBusiness" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-1"></div>
                                </div>

                            </div>
                        </div>
                        <br />
                        <div className="row mt-5 mb-5 home-slider-css">
                            <Slider />
                        </div>
                        <br />
                        <div className="mt-5 mb-5">
                            <Delayed waitBeforeShow={500}>
                                <Carousel interval={9000} controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={pic1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={pic2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={pic3}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Delayed>
                        </div>
                        <div className="home-footer-css">
                            <FooterP />
                        </div>
                    </div>
                </Sidebar>
            </div>}
            {/* {user == null ?
                (<h1>
                    Please Log In
                </h1>)
                :
                (<><div>
                    <Sidebar
                        className="side-bar"
                        content={items}
                        width={200}
                        background={"#FFF"}
                        toggleIconColor={"#7B61FF"}
                        color={"#000000"}
                        activeHightlight={"#FFF"}
                        hoverHighlight={"#FFF"}
                        textAlign={"center"}
                    >
                        <div className="fix-nav">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <TitleButton name="search pricing, analyst updates, etc ( cmd + K)" />
                                    </div>
                                    <div className="col-4"></div>
                                    <div className="col-2 logo-top">
                                        <img className="logo-top-size" src={monkey} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container con-abs">
                            <div className="row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-10">

                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-4 ml-2 mt-5 ">
                                                        <Card imgl={lenskart} name="Lenskart" ev="$5B" in="Sequoia, Tiger" cname="Lenskart" />
                                                    </div>
                                                    <div className="col-4 ml-5 mt-5">
                                                        <Card imgl={ola} name="OLA" ev="$5B" in="Sequoia, Tiger" cname="OLA" />
                                                    </div>
                                                    <div className="col-4 ml-5 mt-5">
                                                        <Card imgl={unacademy} name="Unacademy" ev="$5B" in="Sequoia, Tiger" cname="Unacademy" />
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-4 ml-5 mt-5">
                                                        <Card imgl={ola} name="GoDigit" ev="$5B" in="Sequoia, Tiger" cname="GoDigit" />
                                                    </div>
                                                    <div className="col-4 ml-5 mt-5">
                                                        <Card imgl={swiggy} name="Swiggy" ev="$5B" in="Sequoia, Tiger" cname="Swiggy" />
                                                    </div>
                                                    <div className="col-4 ml-5 mt-5">
                                                        <Card imgl={ola} name="OfBusiness" ev="$5B" in="Sequoia, Tiger" cname="OfBusiness" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-1"></div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5 mb-5">
                                <Delayed waitBeforeShow={500}>
                                    <Carousel interval={9000} controls={false} indicators={false}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={pic1}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={pic2}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={pic3}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Delayed>
                            </div>
                            <div className="home-footer-css">
                                <Footer />
                            </div>
                        </div>
                    </Sidebar>
                </div>

                </>)} */}
        </>
    );
};

export default Home;

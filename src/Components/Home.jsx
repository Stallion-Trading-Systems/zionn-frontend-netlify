import React, { useState } from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import TitleButton from "./TitleButton";
import ola from "../assets/ola.png";
import swiggy from "../assets/swiggy.png";
import lenskart from "../assets/lenskart.jpg";
import unacademy from "../assets/unacademy.png";
import Button2 from "./Button2";
import logo from "../assets/Vector.svg";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Delayed from './Delayed';
import Footer from './Footer';
import monkey from "../assets/monkey.svg"
import pic1 from "../assets/Pic1.svg"
import pic2 from "../assets/Pic2.svg"
import pic3 from "../assets/Pic3.svg"
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router";
import Slider from "./Slider";

const Home = () => {
    const user = localStorage.getItem("user");
    const userobj = JSON.parse(localStorage.getItem('user'));
    var uname = userobj.email.substring(0, userobj.email.indexOf('@'));
    uname = "https://staging.zionn.trade/signup?utm=" + uname;
    const navigate = useNavigate();
    if (user === null) {
        setTimeout(() => {
            navigate("/signup");
        }, 500)
    }
    const [linkref, setLinkref] = useState("");
    const [refon, setrefon] = useState(false);
    const reflinkfun = (e) => {
        e.preventDefault();
        setLinkref(uname);
        setrefon(true);
        navigator.clipboard.writeText(linkref)
        setTimeout(() => {
            setrefon(false);
        }, 1000);
    }
    const items = [
        <SidebarItem>
            <div className="">
                <div>
                    <img className="logo-size" src={logo} />
                </div>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-top">
                <NavLink to="/sellbuy" style={{ textDecoration: 'none' }}><Button widthv={120} name="sell/buy" /></NavLink>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <Button widthv={120} name="calculator" />
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <NavLink to="/scoops" style={{ textDecoration: 'none' }}><Button widthv={120} name="scoops" /></NavLink>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top">
                <Button widthv={120} name="Learn Centre" />
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
                        <div className="row ">
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
                        <br />
                        <div className="row mt-5 mb-5 ">
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
                            <Footer />
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

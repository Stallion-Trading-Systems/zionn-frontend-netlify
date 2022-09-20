import React, { useState, useCallback } from "react";
import "../Components/sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "../Components/Button"
import TitleButton from "../Components/TitleButton";
import logo from "../assets/Vector.svg";
import { NavLink } from "react-router-dom";
import FooterP from '../Components/FooterP';
import monkey from "../assets/monkey.svg";
import pic1 from "../assets/Pic1.svg";
import pic2 from "../assets/Pic2.svg";
import pic3 from "../assets/Pic3.svg";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router";
import Loading from "../Components/Loading";
import OpenOffers from "../Tables/OpenOffersTable.jsx/OpenOffers";
import Payout from "../Tables/PayoutTable/Payout";
import HoldingTable from "../Tables/HoldingsTable/HoldingTable";

const Dashboard = () => {
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
            <div className="sidebar-btn mar-mid-top mt-2">
                <NavLink to="/dashboard" style={{ textDecoration: 'none' }}><Button widthv={120} name="dashboard" /></NavLink>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top mt-2">
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
                        {/* <div className="row p-5">
                            <div className="col-6">
                                <OpenOffers heading="open offers" />
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5">
                                <Payout heading="payout" />
                            </div>
                        </div> */}
                        <div className="row p-5 mt-2">
                            <div className="col-1"></div>
                            <div className="col">
                                <HoldingTable heading="holdings" />
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div className="row mt-5 ">
                            <FooterP />
                        </div>
                    </div>

                </Sidebar>

            </div>

            }

        </>
    );
};

export default Dashboard;

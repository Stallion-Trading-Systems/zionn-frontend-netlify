import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import TitleButton from "./TitleButton";
import monkey from "../assets/monkey.svg"
import Tables from "../Components/Tables";
import LineChartP from "../Components/LineChartP";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Delayed from "./Delayed";
import PieChartP from "../Components/PieChartP";
import Grid from "../Components/Grid";
import Unacademy from "../assets/unacademy.png";
import Swiggy from "../assets/swiggy.png";
import Lenskart from "../assets/lenskart.svg"
import OfBusiness from "../assets/ofbusiness.svg"
import Ola from "../assets/ola.png"
import Pharmeasy from "../assets/pharmeasy.png"
import TableTop from "./TableTop";
import Button2 from "./Button2";
import FooterP from "./FooterP";
import NewsCard from "./NewsCard";
import logo from "../assets/Vector.svg";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import * as api from "../axios"
import Table2 from "./Table2";

const SidebarP = (props) => {
  const [sloading, setSloading] = useState(false);
  const user = localStorage.getItem("user");
  const userobj = JSON.parse(localStorage.getItem('user'));
  const [sharePrice, setSharePrice] = useState();
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
  const params = useParams();
  const [cname, setCname] = useState("");
  const [cdetails, setDetails] = useState([])
  useEffect(() => {
    setCname(params.cname);
    setSloading(true);
    async function f() {
      
      let res = await api.getLastSharePrice(params.cname)

      setSharePrice(parseInt(res.data.result[0].last_share_price));
      // console.log(parseInt(res.data.result[0].last_share_price));
      setSloading(false);
    }

    f()
    
  }, [])
  // setSloading(false);
  console.log(sharePrice);
  const [linkref, setLinkref] = useState(uname);
  const [openlogout, setOpenlogout] = useState(false);
  const [refon, setrefon] = useState(false);
  const [refonf, setrefonf] = useState(false);

  let logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/signup");
  };
  const reflinkfun = (e) => {
    e.preventDefault();
    setLinkref(uname);
    setrefon(true);
    navigator.clipboard.writeText(linkref)
    setTimeout(() => {
      setrefon(false);
    }, 1000);
  }
  const reflinkfunf = (e) => {
    e.preventDefault();

    setLinkref(uname);
    setrefonf(true);
    navigator.clipboard.writeText(linkref)
    setTimeout(() => {
      setrefonf(false);
    }, 1000);
  }
  const scname = cname.toLowerCase();
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
      {/* <Skeleton/> */}
      {/* {sloading&&<Skeleton/>} */}
      {user ? (
        <div>
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
                  <div className="col-1"></div>
                  <div className="col-6">
                    <TitleButton name="we are still in beta. apologies for the half cooked experience" />
                  </div>
                  <div className="col-2"></div>
                  <div className="col-2 logo-top">
                    <div className={openlogout ? "dropdown-monkey monkey-click" : "dropdown-monkey"}>
                      <button className="monkey-btn-css" onClick={() => { setOpenlogout(current => !current) }}><img className="logo-top-size " src={monkey} /></button>
                      <div className={openlogout ? "dropdown-content-monkey monkey-click" : "dropdown-content-monkey"}>
                        <Button name="contact" />
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
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-2">
                      <img className="img-size" src={Unacademy} />
                    </div>
                    <div className="col-6">
                      <h3 className="title-name">{cname}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <div className="pie-size">

                    {sloading ? (<><div className="heading-cp-css mt-5">share holding pattern</div><Skeleton
                      count={5} /></>) : (<><div className="heading-cp-css pie-head-css">share holding pattern</div><PieChartP heading="share holding pattern" company={params.cname} /></>)}
                  </div>
                </div>
                <div className="col-6">
                  <div className="table-top ">

                    {sloading ? <><div className="heading-cp-css">bid / ask spread</div><Skeleton count={5} /></> : (<TableTop heading="bid / ask spread" price={sharePrice} />)}
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
              <Delayed waitBeforeShow={1000}>
                <div className="row">
                  <div className="grid-mar">
                    <div className="heading-cp-css">price history</div>
                    {sloading ? (<><Skeleton count={10} /></>) : (<><Grid company={params.cname} /></>)}
                  </div>
                </div>
              </Delayed>
              <div className="row mt-3">
                <div className="col-4">
                  <div className="but-below">
                    <NavLink to="/sellbuy" style={{ textDecoration: 'none' }}><Button widthv={200} name="sell/buy" /></NavLink>

                  </div>
                </div>
                <div className="col-4">
                  <div className="but-below">
                    <button
                      style={{ width: 200 }}
                      onClick={reflinkfunf}
                      onPointerLeave={defaultClick}
                      onPointerDown={handleClick}
                      onPointerUp={handleClick}
                      className={isActive ? "butt butt-ac" : "butt"}
                    >
                      {refonf ? "link copied!" : <>Share w family<i class="bi bi-arrow-up-right"></i></>}

                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row mt-5">
                <Tables heading="financials" cname={params.cname} />
              </div>
              <div className="row mt-5">
                <Table2 heading="peer comparison" cname={params.cname} />
              </div>
              <div className="row mt-5 mb-5">
                <NewsCard heading="scoops" company={cname}
                />
              </div>
              <div>
                <FooterP />
              </div>
            </div>
          </Sidebar>
        </div>
      ) : (<></>)}
    </>
  );
};

export default SidebarP;

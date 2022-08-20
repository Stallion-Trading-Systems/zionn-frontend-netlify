import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import TitleButton from "./TitleButton";
import monkey from "../assets/monkey.svg"
import Tables from "../Components/Tables";
import LineChartP from "../Components/LineChartP";
import PieChartP from "../Components/PieChartP";
import Grid from "../Components/Grid";
import unacademy from "../assets/unacademy.png";
import TableTop from "./TableTop";
import Button2 from "./Button2";
import Footer from "./Footer";
import NewsCard from "./NewsCard";
import logo from "../assets/Vector.svg";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const SidebarP = (props) => {
  const user = props.curruser;
  const userobj = JSON.parse(localStorage.getItem('user'));
  var uname="zionn";
    if(user!==null)
    {uname = userobj.email.substring(0, userobj.email.indexOf('@'));
    uname = "https://staging.zionn.trade/signup?utm=" + uname;}
  const navigate = useNavigate();
  if (user === null) {
    setTimeout(() => {
      navigate("/signup");
    }, 500)
  }
  const params = useParams();
  const [cname, setCname] = useState("");
  useEffect(() => {

    setCname(params.cname);
  }, [])
  const [linkref, setLinkref] = useState("");
  const [refon, setrefon] = useState(false);
  const [refonf, setrefonf] = useState(false);
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
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const x = props.widthv;
  const defaultClick = (e) => {
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
                <div className="col-6">
                  <div className="row">
                    <div className="col-2">
                      <img className="img-size" src={unacademy} />
                    </div>
                    <div className="col-6">
                      <h3 className="title-name">{cname}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column animated">
                  <div className="pie-size">
                    <PieChartP />
                  </div>
                </div>
                <div className="col-lg-6 order-2 order-lg-1 header-img mt-4 mb-5">
                  <div className="table-top ">
                    <TableTop price={10000} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="grid-mar">
                  <Grid />
                </div>
              </div>
              <div className="row g-0">
                <div className="col-4">
                  <div className="but-below">
                    <NavLink to="/sellbuy" style={{ textDecoration: 'none' }}><Button widthv={200} name="sell/buy" /></NavLink>

                  </div>
                </div>
                <div className="col">
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
                <Tables cname={params.cname} />
              </div>
              <div className="row mt-5">
                <Tables cname={params.cname} />
              </div>
              <div className="row mt-5">
                <NewsCard
                  hone="Abhinavjdhgdgvfsdgfvkjjdhfvudkjfbkdjbfckjdbfcdjkfbdcjkfbcdjkhfbciudkjfchnfiucvdsg"
                  uone="Abhinav Awasthi"
                  cone="kjgjhiugvbhjkfsdhkgvuhsdvgdkgvbsdjsgbfvkjdsbfvkjdssgfvjkdsgsfvbhvdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkvbkdj"
                  htwo="Abhinavjdhgdgvfsdgfvkjjdhfvudkjfbkdjbfckjdbfcdjkfbdcjkfbcdjkhfbciudkjfchnfiucvdsg"
                  utwo="Abhinav Awasthi"
                  ctwo="kjgjhiugvbhkvbkdj"
                  hthr="Abhinavjdhgdgvfsdgfvkjjdhfvudkjfbkdjbfckjdbfcdjkfbdcjkfbcdjkhfbciudkjfchnfiucvdsg"
                  uthr="Abhinav Awasthi"
                  cthr="kjgjhiugvbhkvbkdj"
                />
              </div>
            </div>
          </Sidebar>
        </div>
      ) : (<></>)}
    </>
  );
};

export default SidebarP;

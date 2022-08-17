import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import Button from "./Button";
import TitleButton from "./TitleButton";
import ola from "../assets/ola.png";
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

const SidebarP = (props) => {
  const params = useParams();
const [cname,setCname]=useState("");
  useEffect(() => {

    setCname (params.cname);
}, [])

  const items = [
    <SidebarItem>
      <div className="">
        <div>
        <NavLink to="/"><img className="logo-size" src={logo} /></NavLink>
          
        </div>
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-top">
        <NavLink to="/sellbuy"><Button widthv={120} name="sell/buy" /></NavLink>
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top">
        <Button widthv={120} name="calculator" />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top">
        <NavLink to="/scoops"><Button widthv={120} name="scoops" /></NavLink>
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="sidebar-btn mar-mid-top">
        <Button widthv={120} name="Learn Centre" />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div className="last-but mar-mid-top">
        <Button2 name="refer to get $" />
      </div>
    </SidebarItem>,
  ];
  return (
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
              <div className="col-9">
                <TitleButton name="search pricing, analyst updates, etc ( cmd + K)" />
              </div>
              <div className="col-1"></div>
              <div className="col-2 logo-top">
                <img className="logo-top-size" src={ola} />
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
                <Button widthv={200} name="sell/buy " />
              </div>
            </div>
            <div className="col">
              <div className="but-below">
                <Button widthv={200} name="Share w family " />
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
          <br />
          <NavLink to="/signup">
            <Button name="Button to signup page"></Button>
          </NavLink>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarP;

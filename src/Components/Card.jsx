import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="con-card">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img className="logo-card-css align-items-stretch" src={props.imgl} />
            </div>
            <div className="col-9">
              <div className="logo-name-div-css"><h3 className="logo-name-card-css">{props.name}</h3></div>
            </div>
          </div>
          <div className="row content-card-css">
            <div className="container">
              <div className="row">
                <p className="text-1">
                  recent valuation :
                  {props.ev}
                </p>
              </div>
              <div className="row">
                <p className="text-1">
                  Top Investors :
                  {props.in}
                </p>
              </div>
            </div>
          </div>
          <div className="row card-btn-css">
            <div className="col"></div>
            <div className="col">
            {props.cname=="Open"?(<div ><Button data-tooltip-location="right" data-tooltip="we are still in beta. apologies for the half cooked experience" name="sell/buy" /></div>):(<NavLink to={`/company/${props.cname}`} style={{ textDecoration: 'none' }} ><Button name="sell/buy" /></NavLink>)}
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

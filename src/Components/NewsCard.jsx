import React from "react";
import "./newscard.css";

const NewsCard = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="container">
            <div className="row">
              <div className="news-bor">
                <div className="row">
                  <h3 className="heading-trun">{props.hone}</h3>
                  <p className="user-trun">by: {props.uone}</p>
                  <p className="content-trun">{props.cone}</p>
                </div>
                <div className="row">
                  <h3 className="heading-trun">{props.htwo}</h3>
                  <p className="user-trun">by: {props.utwo}</p>
                  <p className="content-trun">{props.ctwo}</p>
                </div>
                <div className="row">
                  <h3 className="heading-trun">{props.hthr}</h3>
                  <p className="user-trun">by: {props.uthr}</p>
                  <p className="content-trun">{props.cthr}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        '<div className="col-1"></div>
      </div>
    </div>
  );
};

export default NewsCard;

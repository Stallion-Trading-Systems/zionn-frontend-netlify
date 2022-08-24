import React, { useEffect, useState } from "react";
import "./newscard.css";
import * as api from "../axios"

const NewsCard = (props) => {
  const company = props.company;

  const [cdetails, setDetails] = useState([])
  useEffect(() => {

    async function f() {
      let res = await api.newsData(company)

      setDetails(res.data.news_details);

    }

    f()

  }, [company]);
  console.log(cdetails);
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="container">
            <div className="row">
              <div className="heading-cp-css">{props.heading}</div>
              <div className="news-bor">
                {cdetails.map((detail) => {
                  return (<div className="row">
                    <a className="scoop-link" target="__blank" href={detail.new_url} ><h3 className="scoop-title heading-trun">{detail.new_title}</h3></a>
                    {/* <p className="user-trun scoop-tag">by: {props.uone}</p> */}
                    <p className="content-trun">{detail.news_content}</p>
                  </div>)
                })}

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

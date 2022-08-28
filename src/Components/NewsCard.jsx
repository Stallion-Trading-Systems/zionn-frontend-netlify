import React, { useEffect, useState } from "react";
import "./newscard.css";
import * as api from "../axios"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="container">
            <div className="row">
              <div className="heading-cp-css">{props.heading}</div>
              <div className="news-bor">
                <div className="row">
                  <a className="scoop-link" target="__blank" href={cdetails[0]?.new_url} ><h3 className="scoop-title heading-trun">{cdetails[0]?.new_title || <Skeleton />}</h3></a>
                  <p className="content-trun">{cdetails[0]?.news_content || <Skeleton />}</p>
                </div>
                <div className="row">
                  <a className="scoop-link" target="__blank" href={cdetails[1]?.new_url} ><h3 className="scoop-title heading-trun">{cdetails[1]?.new_title || <Skeleton />}</h3></a>
                  <p className="content-trun">{cdetails[1]?.news_content || <Skeleton />}</p>
                </div>

                <div className="row">
                  <a className="scoop-link" target="__blank" href={cdetails[2]?.new_url} ><h3 className="scoop-title heading-trun">{cdetails[2]?.new_title || <Skeleton />}</h3></a>
                  <p className="content-trun">{cdetails[2]?.news_content || <Skeleton />}</p>
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

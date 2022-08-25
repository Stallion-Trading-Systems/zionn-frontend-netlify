import React, { useEffect, useState } from "react";
import "./newscard.css";
import * as api from "../axios"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NewsCard = (props) => {
  const company = props.company;
  const [sloading, setSloading] = useState(true);
  const [cdetails, setDetails] = useState([])
  useEffect(() => {

    async function f() {
      let res = await api.newsData(company)

      setDetails(res.data.news_details);

    }

    f()
  }, [company]);
  setTimeout(() => {
    setSloading(false);
  }, 1000)
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="container">
            <div className="row">
              <div className="heading-cp-css">{props.heading}</div>
              <div className="news-bor">
                {sloading ? <>
                  <Skeleton width={100} />
                  <Skeleton width={600} />
                  <Skeleton />
                  <hr /><Skeleton width={100} />
                  <Skeleton width={600} />
                  <Skeleton />
                  <hr /><Skeleton width={100} />
                  <Skeleton width={600} />
                  <Skeleton />
                  <hr />
                </> : <></>}
                {cdetails[0]?.news_content ? <>
                </> : <><Skeleton width={100} />
                  <Skeleton width={600} />
                  <Skeleton />
                  <Skeleton width={100} />
                  <Skeleton width={600} />
                  <Skeleton />
                  <Skeleton width={100} />
                  <Skeleton width={600} />
                  <Skeleton /></>}
                {cdetails.map((detail) => {
                  return (<div className="row">
                    <a className="scoop-link" target="__blank" href={detail.new_url} ><h3 className="scoop-title heading-trun">{detail.new_title || <Skeleton />}</h3></a>
                    {/* <p className="user-trun scoop-tag">by: {props.uone}</p> */}
                    <p className="content-trun">{detail.news_content || <Skeleton />}</p>
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

import React, { Component, useEffect } from "react";
import Row from "./RowTop";
import "../Components/TableTop.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as api from "../axios"
import { useState } from "react";


const TableTop = (props) => {

  const [bidAskDetails, setBidAskDetails] = useState([]);

  useEffect(() => {
    async function f() {

      let res = await api.bidaskFetch({ c_name: props.cname });

      setBidAskDetails(res.data.result);

      // console.log(res);

    }

    f()

  }, [])
  
  const bidDetails = bidAskDetails.filter((detail) => detail.buy_price != null);
  const askDetails = bidAskDetails.filter((detail) => detail.buy_price == null);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

            {(bidDetails.length>0||askDetails.length>0)&&
            <div className="container ">
            <div className="row">
              <div className="heading-cp-css">bid / ask spread</div>
              <div className="">
                <div className="">
                  <div className="container-sm  main-con">
                    <div className="row mb-1">
                      <div className="col-3">
                        <div className="cell-wide cell purple-b">
                          <strong>buy side</strong>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="cell-mid cell purple-b">
                          <strong>bid price</strong>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="cell-mid cell purple-b">
                          <strong>ask price</strong>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="cell-mid cell purple-b">
                          <strong>sell side</strong>
                        </div>
                      </div>
                    </div>
                    
                    {(bidDetails.length>0||askDetails.length>0)&&<Row
                      a={bidDetails[0]?.no_of_shares||"--"}
                      b={bidDetails[0]?.buy_price||"--"}
                      c={askDetails[0]?.sell_price||"--"}
                      d={askDetails[0]?.no_of_shares||"--"}
                    />}
                    {(bidDetails.length>1||askDetails.length>1)&&<Row
                      a={bidDetails[1]?.no_of_shares||"--"}
                      b={bidDetails[1]?.buy_price||"--"}
                      c={askDetails[1]?.sell_price||"--"}
                      d={askDetails[1]?.no_of_shares||"--"}
                    />}
                    {(bidDetails.length>2||askDetails.length>2)&&<Row
                      a={bidDetails[2]?.no_of_shares||"--"}
                      b={bidDetails[2]?.buy_price||"--"}
                      c={askDetails[2]?.sell_price||"--"}
                      d={askDetails[2]?.no_of_shares||"--"}
                    />}

                  </div>
                </div>
              </div>
            </div>
          </div>
            }
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  )
}

export default TableTop

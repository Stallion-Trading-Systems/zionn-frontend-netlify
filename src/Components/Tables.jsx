import React, { useEffect, useState } from "react";
import "../Components/Tables.css";
import Row from "./Row";
import * as api from "../axios"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Tables = (props) => {


  const [cname, setCname] = useState(props.cname)
  const [cdetails, setDetails] = useState([])
  const [sloading, setSloading] = useState(true);

  useEffect(() => {

    async function f() {
      let res = await api.getCompanyData(cname)

      setDetails(res.data.result2);

      console.log(res.data.result2);
    }

    f()
    setSloading(false);
  }, [cname]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

            <div className="container">
              <div className="row">
                <div className="heading-cp-css">{props.heading1}</div>
                <div className="bor-table">
                  <div className="">
                    <div className="container-sm  main-con">
                      <div className="row g-4">
                        <div className="col-3">
                          <div className="cell-wide cell purple-b">
                            <strong>factor</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 19</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 20</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 21</strong>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="cell-last cell purple-b">
                            <strong>analyst rating</strong>
                          </div>
                        </div>
                      </div>
                      <Row
                        a="assets"
                        b={(cdetails[2]?.assets/10000000).toFixed(2)}
                        c={(cdetails[1]?.assets/10000000).toFixed(2)}
                        d={(cdetails[0]?.assets/10000000).toFixed(2)}
                        e="POSITIVE"
                        f={cdetails[0]?.assets_check == 1 ? "true" : ""}
                      />
                      <Row
                        a="liabilities"
                        b={(cdetails[2]?.total_curr_lb/10000000).toFixed(2)}
                        c={(cdetails[1]?.total_curr_lb/10000000).toFixed(2)}
                        d={(cdetails[0]?.total_curr_lb/10000000).toFixed(2)}
                        e="POSITIVE"
                        f={cdetails[0]?.total_curr_lib_check == 1 ? "true" : ""}
                      />
                      <Row
                        a="revenue"
                        b={cdetails[2]?.revenue.toFixed(2)}
                        c={cdetails[1]?.revenue.toFixed(2)}
                        d={cdetails[0]?.revenue.toFixed(2)}
                        e="POSITIVE"
                        f={cdetails[0]?.revenue_check == 1 ? "true" : ""}
                      />
                      <Row
                        a="net profit"
                        b={(cdetails[2]?.net_margin/10000000).toFixed(2)}
                        c={(cdetails[1]?.net_margin/10000000).toFixed(2)}
                        d={(cdetails[0]?.net_margin/10000000).toFixed(2)}
                        e="POSITIVE"
                        f={cdetails[0]?.net_proft_check == 1 ? "true" : ""}
                      />
                      {/* <Row
                        a="return on equity"
                        b={cdetails[2]?.return_on_equity}
                        c={cdetails[1]?.return_on_equity}
                        d={cdetails[0]?.return_on_equity}
                        e="POSITIVE"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          '<div className="col-1"></div>
        </div>
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-10">

            <div className="container">
              <div className="row">
                <div className="heading-cp-css">{props.heading2}</div>
                <div className="bor-table">
                  <div className="">
                    <div className="container-sm  main-con">
                      <div className="row g-4">
                        <div className="col-3">
                          <div className="cell-wide cell purple-b">
                            <strong>factor</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 19</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 20</strong>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 21</strong>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="cell-last cell purple-b">
                            <strong>analyst rating</strong>
                          </div>
                        </div>
                      </div>
                      {/* <Row
                        a="revenue &#40;in Cr&#41;"
                        b={cdetails[2]?.revenue}
                        c={cdetails[1]?.revenue}
                        d={cdetails[0]?.revenue}
                        f={cdetails[0]?.revenue_check == 1 ? "true" : ""}
                      /> */}
                      <Row
                        a="revenue growth"
                        b={cdetails[2]?.revenue_growth}
                        c={cdetails[1]?.revenue_growth}
                        d={cdetails[0]?.revenue_growth}
                        f={cdetails[0]?.revenue_growth_check == 1 ? "true" : ""}
                      />
                      <Row
                        a="return on equity"
                        b={cdetails[2]?.return_on_equity}
                        c={cdetails[1]?.return_on_equity}
                        d={cdetails[0]?.return_on_equity}
                      />
                      <Row
                        a="operating cost"
                        b={(cdetails[2]?.op/10000000).toFixed(2)}
                        c={(cdetails[1]?.op/10000000).toFixed(2)}
                        d={(cdetails[0]?.op/10000000).toFixed(2)}
                        f={cdetails[0]?.op_cost_check == 1 ? "true" : ""}
                      />
                      <Row
                        a="EBITDA"
                        b={(cdetails[2]?.ebitda_margin/10000000).toFixed(2)}
                        c={(cdetails[1]?.ebitda_margin/10000000).toFixed(2)}
                        d={(cdetails[0]?.ebitda_margin/10000000).toFixed(2)}
                        f={cdetails[0]?.ebidta_growth_check == 1 ? "true" : ""}
                      />
                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          '<div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
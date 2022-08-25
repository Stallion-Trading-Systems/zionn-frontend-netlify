import React, { useEffect, useState } from "react";
import "../Components/Tables.css";
import Row from "./Row";
import * as api from "../axios"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Tables = (props) => {


  const [cname, setCname] = useState(props.cname)
  const [cdetails, setDetails] = useState([])
  const [sloading,setSloading]=useState(true);

  useEffect(() => {

    async function f() {
      let res = await api.getCompanyData(cname)

      setDetails(res.data.result2);
      
      // console.log(res.data.result2);
    }

    f()
    setSloading(false);
  }, [cname]);
  var nma;
  if(cdetails[2]?.net_margin)nma=cdetails[2]?.net_margin+"%";
  var nmb;
  if(cdetails[1]?.net_margin)nmb=cdetails[1]?.net_margin+"%";
  var nmc;
  if(cdetails[0]?.net_margin)nmc=cdetails[0]?.net_margin+"%";
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">

            <div className="container">
              <div className="row">
                <div className="heading-cp-css">{props.heading}</div>
                <div className="bor-table">
                  <div className="">
                    <div className="container-sm  main-con">
                      <div className="row">
                        <div className="col-4">
                          <div className="cell-wide cell purple-b">
                            <strong>factor</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 19</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 20</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-mid cell purple-b">
                            <strong>FY 21</strong>
                          </div>
                        </div>
                        <div className="col">
                          <div className="cell-last cell purple-b">
                            <strong>analyst rating</strong>
                          </div>
                        </div>
                      </div>
                      <Row
                        a="revenue &#40;in Cr&#41;"
                        b={cdetails[2]?.revenue}
                        c={cdetails[1]?.revenue}
                        d={cdetails[0]?.revenue}
                        e="POSITIVE"
                        f={cdetails[0]?.revenue_check==1?"true":""} 
                      />
                      <Row
                        a="revenue growth"
                        b={cdetails[2]?.revenue_growth}
                        c={cdetails[1]?.revenue_growth}
                        d={cdetails[0]?.revenue_growth}
                        e="POSITIVE"
                        f={cdetails[0]?.revenue_growth_check==1?"true":""} 
                      />
                      <Row
                        a="EBITDA margin"
                        b={cdetails[2]?.ebitda_margin}
                        c={cdetails[1]?.ebitda_margin}
                        d={cdetails[0]?.ebitda_margin}
                        e="POSITIVE"
                        f={cdetails[0]?.ebidta_growth_check==1?"true":""} 
                      />
                      <Row
                        a="net margin"
                        b={nma}
                        c={nmb}
                        d={nmc}
                        e="POSITIVE"
                        f={cdetails[0]?.net_proft_check==1?"true":""} 
                      />
                      <Row
                        a="return on equity"
                        b={cdetails[2]?.return_on_equity}
                        c={cdetails[1]?.return_on_equity}
                        d={cdetails[0]?.return_on_equity}
                        e="POSITIVE"
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
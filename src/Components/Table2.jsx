import React, { useEffect, useState } from "react";
import "../Components/table2.css";
import Row2 from "./Row2";
import * as api from "../axios"

const Table2 = (props) => {


    const [cname, setCname] = useState(props.cname)
    const [cdetails, setDetails] = useState([])


    useEffect(() => {

        async function f() {
            let res = await api.getCompanyData(cname)

            setDetails(res.data.result2);
            // console.log(res.data.result2);
        }

        f()

    }, [cname]);

    console.log(cdetails);
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
                                            <div className="row mb-1 g-1">
                                                <div className="col-3 mr-2">
                                                    <div className="cell-t2-css cell purple-b">
                                                        <strong>name</strong>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="row g-1">
                                                        <div className="col-6">
                                                            <div className="cell-t2-css cell purple-b">
                                                                <strong>revenue</strong>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="cell-t2-css cell purple-b">
                                                                <strong>growth</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="cell-t2-css cell purple-b">
                                                        <strong>funding raised</strong>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="cell-t2-css cell purple-b">
                                                        <strong>multiple</strong>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="cell-t2-css cell purple-b">
                                                        <strong>analyst rating</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <Row2
                                                a={cname}
                                                b={cdetails[2]?.revenue}
                                                c={cdetails[1]?.revenue}
                                                d={cdetails[0]?.revenue}
                                                e="POSITIVE"
                                                f={cdetails[0]?.revenue_check == 1 ? "true" : ""}
                                            />
                                            <Row2
                                                a="revenue growth"
                                                b={cdetails[2]?.revenue_growth}
                                                c={cdetails[1]?.revenue_growth}
                                                d={cdetails[0]?.revenue_growth}
                                                e="POSITIVE"
                                                f={cdetails[0]?.revenue_growth_check == 1 ? "true" : ""}
                                            />
                                            <Row2
                                                a="EBITDA margin"
                                                b={cdetails[2]?.ebitda_margin}
                                                c={cdetails[1]?.ebitda_margin}
                                                d={cdetails[0]?.ebitda_margin}
                                                e="POSITIVE"
                                                f={cdetails[0]?.ebidta_growth_check == 1 ? "true" : ""}
                                            />
                                            <Row2
                                                a="net margin"
                                                b={cdetails[2]?.net_margin + "%"}
                                                c={cdetails[1]?.net_margin + "%"}
                                                d={cdetails[0]?.net_margin + "%"}
                                                e="POSITIVE"
                                                f={cdetails[0]?.net_proft_check == 1 ? "true" : ""}
                                            />
                                            <Row2
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

export default Table2;
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import RowHoldings from './RowHoldings'
import Button from '../../Components/Button'
import * as api from "../../axios"

const HoldingTable = (props) => {
    const [details, setDetails] = useState([])
    const [openOffers, setOpenOffers] = useState([])
    useEffect(() => {
        async function f() {

            let res = await api.holdings()
            setDetails(res.data.result)
            console.log(res.data.result);
            let res1 = await api.getOpenOffer({ email: props.email });
            setOpenOffers(res1.data.result);
            console.log(res1.data.result);
        }
        f()

    }, [])
    
    const onlySellTrans=details.filter((detail)=>detail.trans_type=="sell");
    return (
        <div>
            <div className="container text-align-css-left">
                <div className="row">
                    <div className="heading-cp-css mb-4">{props.heading}</div>
                    <div>
                        <div className="bor-table">
                            <div className="container-sm  main-con">
                                {onlySellTrans[0] ? <><div className="row gr-2">
                                    <div className="col-3">
                                        <div className="cell-wide cell purple-b">
                                            <strong>company</strong>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cell-mid cell purple-b">
                                            <strong>units</strong>
                                        </div>
                                    </div>
                                    <div className='col-7'>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className="col-4">
                                                    <div className="cell-mid cell purple-b">
                                                        <strong>order type</strong>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="cell-mid cell purple-b">
                                                        <strong>price</strong>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="cell-mid cell purple-b">
                                                        <strong>current status</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    {openOffers.map((detail) => {
                                        return (
                                            <RowHoldings
                                                a={detail?.c_name}
                                                b={detail?.no_of_secu}
                                                c={(detail?.c_name)?"offer":detail?.secu_type}
                                                d={detail?.trans_price}
                                                e={detail?.status}
                                            />
                                        )
                                    })}
                                    {details.map((detail) => {
                                        return (
                                            <RowHoldings
                                                a={detail?.c_name}
                                                b={detail?.no_of_shares-detail?.shares_on_trade}
                                                c={detail?.trans_type}
                                                d={detail?.trans_type=="sell"?detail.sell_price:detail.buy_price}
                                                e="open bidding"
                                            />
                                        )

                                    })}</> : <>
                                    <div class="alert alert-info" role="alert">
                                        you don't have any holdings
                                    </div>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoldingTable
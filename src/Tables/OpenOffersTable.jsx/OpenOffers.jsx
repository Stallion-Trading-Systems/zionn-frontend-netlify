import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import RowOpenOffers from './RowOpenOffers'
import Button from '../../Components/Button'
import * as api from "../../axios"
import RowPayout from "../PayoutTable/RowPayout";
import { useNavigate } from "react-router-dom";

const OpenOffers = (props) => {
    const [openOffers, setOpenOffers] = useState([])
    const [done, setDone] = useState(false)
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function f() {

            // console.log(res.data.result);
            let res1 = await api.getOpenOffer({ email: props.email });
            setOpenOffers(res1.data.result);
            console.log(res1.data.result);
        }

        f()

    }, [])
    var moneyReceived = 0;
    var zionnFee = 0;
    var inwardFlow = 0;
    var tax = 0;
    const onlyOpenOffers = openOffers.filter((detail) => detail.status == "OPEN OFFER");
    if (onlyOpenOffers[0]) {
        moneyReceived = onlyOpenOffers[0].trans_price * onlyOpenOffers[0].no_of_secu;
        zionnFee = moneyReceived * onlyOpenOffers[0].seller_commission / 100;
        tax = moneyReceived * 20 / 100;
        inwardFlow = moneyReceived - tax - zionnFee;
    }
    const navigate = useNavigate();
    const acceptOffer = async (e) => {
        e.preventDefault();

        setLoading(true);
        let res = await api.acceptOfferTrans({ transc_id: onlyOpenOffers[0].transc_id, status: 1 });
        setLoading(false);
        if (res.data.message == "Status updated") {
            setDone(true);
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
        else alert(res.data.message);

    }
    return (
        <div>
            <div className="row p-5">
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="heading-cp-css mb-4">open offers</div>
                            <div className="bor-table">
                                {onlyOpenOffers[0] ? <div className="">
                                    {(!done && !loading) ? <>
                                        <div className="container-sm  main-con">
                                            <div className="row g-4">
                                                <div className="col-5">
                                                    <div className="cell-wide cell purple-b">
                                                        <strong>company</strong>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="cell-mid cell purple-b">
                                                        <strong>units</strong>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="cell-mid cell purple-b">
                                                        <strong>bid price</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <RowOpenOffers
                                                a={onlyOpenOffers[0]?.c_name}
                                                b={onlyOpenOffers[0]?.no_of_secu}
                                                c={onlyOpenOffers[0]?.trans_price}
                                            />
                                            <div className='row p-2 mt-2 mt-4'>
                                                <div className='justify-content-center d-flex align-items-center'>
                                                    <button onClick={(e) => { acceptOffer(e) }} className="no-custom-btn" ><Button name="accept" /></button>
                                                </div>
                                            </div>

                                        </div></> : <>
                                        <div className="container">
                                            <div className="p-5 row mt-2">
                                                {done && <div class="alert alert-success" role="alert">
                                                    offer accepted successfully!
                                                </div>}
                                                {loading && <div class="alert alert-info" role="alert">
                                                    we are processing your request
                                                </div>}

                                            </div>
                                        </div>
                                    </>}
                                </div> : <>
                                    <div className=" pt-3 mb-0container">
                                    <div class="alert alert-info" role="alert">
                                        you don't have any open offers
                                    </div>
                                    </div>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                {onlyOpenOffers[0] && <div className="col-5">
                    <div className="container text-align-css-left">
                        <div className="row">
                            <div className="heading-cp-css mb-4">payout</div>
                            <div>
                                <div className="">
                                    <div className="container-sm  main-con">
                                        <div className="row g-4">
                                            <div className="col-6">
                                                <div className="cell-wide cell purple-b">
                                                    <strong>header</strong>
                                                </div>
                                            </div>
                                            <div className='col-1'></div>
                                            <div className="col-5">
                                                <div className="cell-mid cell purple-b">
                                                    <strong>amount</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <RowPayout
                                            a="Monies Received"
                                            b={moneyReceived}
                                        />
                                        <RowPayout
                                            a="Zionn Fee"
                                            b={zionnFee}
                                        />
                                        <RowPayout
                                            a="est. Tax"
                                            b={tax}
                                        />
                                        <RowPayout
                                            a="Net Inward flow"
                                            b={inwardFlow}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default OpenOffers
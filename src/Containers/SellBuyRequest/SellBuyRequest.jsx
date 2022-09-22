import React, { useState } from 'react'
import "./sellbuyrequest.css"
import Unacademy from "../../assets/unacademy.png";
import Swiggy from "../../assets/swiggy.png";
import Lenskart from "../../assets/lenskart.svg"
import OfBusiness from "../../assets/ofbusiness.svg"
import Open from "../../assets/Open.png";
import Ola from "../../assets/ola.png";
import Button from '../../Components/Button';

const SellBuyRequest = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (event) => {
        setIsActive((current) => !current);
    };
    const defaultClick = (e) => {
        setIsActive(false);
    };
    const createrequestsubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='container '>
                <div className="row">
                    <div className='col-1'></div>
                    <div className="col-10">
                        <div className="container ">
                            <div className="row sellbuyreq-css">
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col-3">
                                            {props.cname == "Lenskart" && <img className="img-size" src={Lenskart} />}
                                            {props.cname == "Swiggy" && <img className="img-size" src={Swiggy} />}
                                            {props.cname == "OfBusiness" && <img className="img-size" src={OfBusiness} />}
                                            {props.cname == "OLA" && <img className="img-size" src={Ola} />}
                                            {props.cname == "Open" && <img className="img-size" src={Open} />}
                                            {props.cname == "Unacademy" && <img className="img-size" src={Unacademy} />}
                                        </div>
                                        <div className="col-7">
                                            <h3 className="title-name">{props.cname}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-7 selldiv-text-css'>
                                    <p className='sellbuyreq-con-css'>Create Indication of Interest </p>
                                    <p className='sellbuyreq-con-des-css'>Submit this form to express the terms that you would consider for a transaction. IOIs are non-binding and not a commitment to trade. If you need help, contact your specialist.</p>
                                    <br />
                                    <p className='sellbuyreq-con-css'>Order type</p>
                                    <form onSubmit={createrequestsubmit} id="req-form" >
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className='wrapper '>
                                                <input className='input-display-none' type="radio" name="select" id="option-1" checked />
                                                <input className='input-display-none' type="radio" name="select" id="option-2" />
                                                <label for="option-1" class="option option-b option-1">
                                                    <span>buy</span>
                                                </label>
                                                <label for="option-2" class="option option-s option-2">
                                                    <span>sell</span>
                                                </label>
                                            </div>
                                        </div>
                                        <p className='mt-4 sellbuyreq-con-css mb-4'>Number of equity shares</p>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <p className='label-input-css-sellbuyreq'>Min.</p>
                                                    <input className='sellbuyreq-input-css' type="number" />
                                                </div>
                                                <div className='col-6'>
                                                    <p className='label-input-css-sellbuyreq'>Max.</p>
                                                    <input className='sellbuyreq-input-css' type="number" />
                                                </div>
                                            </div>

                                        </div>
                                        <p className='mt-5 mb-3 sellbuyreq-con-css'>Bid Price</p>

                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <input className='sellbuyreq-input-css' type="number" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-4'></div>
                                                <div className='col-4'>
                                                    <div className='mt-5 mb-4 d-flex justify-content-center align-items-center'>
                                                        <button

                                                            onPointerLeave={defaultClick}
                                                            onPointerDown={handleClick}
                                                            onPointerUp={handleClick}
                                                            onClick={createrequestsubmit}
                                                            className={isActive ? "butt butt-ac" : "butt"}
                                                        >
                                                            create request
                                                            <i class="bi bi-arrow-up-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='col-4'></div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellBuyRequest
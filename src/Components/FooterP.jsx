import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./footerp.css"

const FooterP = () => {
    const [isActiveP, setIsActiveP] = useState(false);
    const handleClickP = (event) => {
        event.preventDefault();
        setIsActiveP((current) => !current);
    };
    const defaultClickP = (e) => {
        e.preventDefault();
        setIsActiveP(false);
    };
    const [isActiveL, setIsActiveL] = useState(false);
    const handleClickL = (event) => {
        event.preventDefault();
        setIsActiveL((current) => !current);
    };
    const defaultClickL = (e) => {
        e.preventDefault();
        setIsActiveL(false);
    };
    return (
        <div>
            <div className='footerp-css '>
                <div className='container'>
                    <div className='row '>
                        <div className='col-5'>
                            <div className='container '>
                                <div className='row btn-group-css'>
                                    <div className='col-lg-7 col-sm-10 mb-2'>
                                        <NavLink style={{ textDecoration: "none" }} to="/privacy-policy" target="__blank">
                                            <button
                                                onPointerLeave={defaultClickP}
                                                onPointerDown={handleClickP}
                                                onPointerUp={handleClickP}
                                                className={isActiveP ? "butt-footer butt-ac-footer" : "butt-footer"}
                                            >
                                                privacy policy
                                                <i class="bi bi-arrow-up-right"></i>
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div className='col-lg-5 col-sm-10 mb-2'>
                                        <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/company/zionn/" target="__blank">
                                            <button
                                                onPointerLeave={defaultClickL}
                                                onPointerDown={handleClickL}
                                                onPointerUp={handleClickL}
                                                className={isActiveL ? "butt-footer butt-ac-footer" : "butt-footer"}
                                            >
                                                linkedin
                                                <i class="bi bi-arrow-up-right"></i>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'></div>
                        <div className='col'>
                            <p className='pb-0'>
                                Regd Office: <br />WeWork, 2 horizon centre, gurugram, haryana
                            </p>
                            <p className='pb-0'>
                                GSTIN: <br />06ATCPL5739L1ZC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterP
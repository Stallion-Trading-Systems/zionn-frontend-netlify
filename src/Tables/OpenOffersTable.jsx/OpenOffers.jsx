import React from 'react'
import Skeleton from 'react-loading-skeleton'
import RowOpenOffers from './RowOpenOffers'
import Button from '../../Components/Button'

const OpenOffers = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="heading-cp-css mb-4">{props.heading}</div>
                    <div className="bor-table">
                        <div className="">
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
                                    a="#value"
                                    b="#value"
                                    c="#value"
                                />
                                <RowOpenOffers
                                    a="#value"
                                    b="#value"
                                    c="#value"
                                />
                                <RowOpenOffers
                                    a="#value"
                                    b="#value"
                                    c="#value"
                                />
                                <div className='row p-2 mt-2 mt-4'>
                                    <div className='justify-content-center d-flex align-items-center'>
                                    <Button name="accept"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenOffers
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import RowPayout from './RowPayout'
import Button from '../../Components/Button'

const Payout = (props) => {
    return (
        <div>
            <div className="container text-align-css-left">
                <div className="row">
                    <div className="heading-cp-css mb-4">{props.heading}</div>
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
                                    b="#value"
                                />
                                <RowPayout
                                    a="Zionn Fee"
                                    b="#value"
                                />
                                <RowPayout
                                    a="est. Tax"
                                    b="#value"
                                />
                                <RowPayout
                                    a="Net Inward flow"
                                    b="#value"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payout
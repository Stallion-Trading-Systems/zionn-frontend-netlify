import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RowHoldings = (props) => {
    return (
        <div>
            <div className="row gr-2 mt-2">
                <div className="col-3">
                    <div className="cell-wide cell">
                        {props.a || <Skeleton width={80} height={15} />}
                    </div>
                </div>
                <div className="col-2">
                    <div className="cell-mid cell">
                        {props.b || <Skeleton width={80} height={15} />}
                    </div>
                </div>
                <div className='col-7'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-4">
                                <div className="cell-mid cell">
                                    {props.c || <Skeleton width={80} height={15} />}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="cell-mid cell">
                                    {props.d || <Skeleton width={80} height={15} />}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="cell-mid cell ">
                                    {props.e || <Skeleton width={80} height={15} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowHoldings;

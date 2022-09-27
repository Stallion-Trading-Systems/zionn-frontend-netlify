import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CountUp from 'react-countup';

const RowPayout = (props) => {
    return (
        <div>
            <div className="row gr-4 mt-2">
                <div className="col-6">
                    <div className="cell-wide cell">
                    {props.a
                    || <Skeleton width={80} height={15} />}
                    </div>
                </div>
                <div className='col-1'></div>
                <div className="col-5">
                    <div className="cell-mid cell">
                    {<CountUp duration={1} end={props.b} /> || <Skeleton width={80} height={15} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowPayout;

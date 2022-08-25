import React from "react";
import Cell from "../Components/Cell";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Row = (props) => {
  const check = props.f;
  
  return (
    <div>
      <div className="row mt-2 gr-4">
        <div className="col-3 ">
          <div className="cell-wide cell">{props.a}</div>
        </div>
        <div className="col-2 ">
          <div className="cell-mid cell">{props.b||<Skeleton width={80} height={15} />}</div>
        </div>
        <div className="col-2">
          <div className="cell-mid cell">{props.c||<Skeleton width={80} height={15} />}</div>
        </div>
        <div className="col-2">
          <div className="cell-mid cell">{props.d||<Skeleton width={80} height={15} />}</div>
        </div>

        {check ? (
          <div className="col-3">
            <div className="cell-last cell">
              
              {props.d?<Cell bool="true" />:<Skeleton width={120} height={15} />}
            </div>
          </div>
        ) : (
          <div className="col">
            <div className="cell-last cell">
            {props.d?<Cell />:<Skeleton width={120} height={15} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;

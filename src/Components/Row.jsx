import React from "react";
import Cell from "../Components/Cell";
const Row = (props) => {
  const check = props.f;

  return (
    <div>
      <div className="row mt-1">
        <div className="col-4">
          <div className="cell-wide cell">{props.a}</div>
        </div>
        <div className="col ">
          <div className="cell-mid cell">{props.b}</div>
        </div>
        <div className="col">
          <div className="cell-mid cell">{props.c}</div>
        </div>
        <div className="col">
          <div className="cell-mid cell">{props.d}</div>
        </div>

        {check ? (
          <div className="col">
            <div className="cell-last cell">
              <Cell bool="true" />
            </div>
          </div>
        ) : (
          <div className="col">
            <div className="cell-last cell">
              <Cell />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Row;

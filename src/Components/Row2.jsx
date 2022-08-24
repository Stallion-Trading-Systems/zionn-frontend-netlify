import React from "react";
import Cell from "../Components/Cell";
const Row2 = (props) => {
    const check = props.f;

    return (
        <div>
            <div className="row mb-1 g-1">
                <div className="col-3 mr-2">
                    <div className="cell-t2-css cell">
                        {props.a}
                    </div>
                </div>
                <div className="col-3">
                    <div className="row g-1">
                        <div className="col-6">
                            <div className="cell-t2-css cell">
                                {props.b}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="cell-t2-css cell">
                                {props.c}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="cell-t2-css cell">
                        {props.d}
                    </div>
                </div>
                <div className="col-2">
                    <div className="cell-t2-css cell">
                        {props.e}
                    </div>
                </div>
                <div className="col-2">
                    <div className="cell-t2-css cell">
                        {check?<Cell bool="true" />:<Cell />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Row2;

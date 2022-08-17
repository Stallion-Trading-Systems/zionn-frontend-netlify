import React from 'react'
import Cell from '../Components/Cell'
const RowTop = (props) => {
    const check = props.f;
    
    return (
        <div>
            <div className='row mb-1'>
                <div className='col-3'>
                    <div className='cell-wide-t cell-t'>{props.a}</div>
                </div>
                <div className='col-3'>
                    <div className='cell-mid-t cell-t'>{props.b}</div>
                </div>
                <div className='col-3'>
                    <div className='cell-mid-t cell-t'>{props.c}</div>
                </div>
                <div className='col-3'>
                    <div className='cell-mid-t cell-t'>{props.d}</div>
                </div>

            </div>
        </div>
    )
}

export default RowTop

import React from 'react'
import Cell from '../Components/Cell'
const RowTop = (props) => {

    return (
        <div>
            <div className='row mb-1'>
                <div className='col-3'>
                    <div className='cell-wide cell'>{props.a}</div>
                </div>
                <div className='col-3 gr-0'>
                    <div className='cell-mid cell'>{props.b}</div>
                </div>
                <div className='col-3'>
                    <div className='cell-mid cell'>{props.c}</div>
                </div>
                <div className='col-3'>
                    <div className='cell-mid cell'>{props.d}</div>
                </div>

            </div>
        </div>
    )
}

export default RowTop

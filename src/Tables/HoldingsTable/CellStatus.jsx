import React from 'react'
import "./cellstatus.css"

const CellStatus = (props) => {
    const check = props.bool;
    return (
        <div>
            {check=="sold" && <div className='sold'>SOLD</div>}
            {check=="open bidding" && <div className='open-bidding'>OPEN BIDDING</div>}
            {check=="open offer" && <div className='open-offer'>OPEN OFFER</div>}
        </div>
    )
}

export default CellStatus

import React from 'react'
import '../Components/Cell.css'

const Cell = (props) => {
    const check = props.bool;
    return (
        <div>
            {check ? <div className='positive'>Positive</div>
                : <div className='negative'>Negative</div>}
        </div>
    )
}

export default Cell

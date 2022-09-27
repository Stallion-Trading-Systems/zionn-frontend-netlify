import React from 'react'
import Avatar from "react-avatar";
const KMPCard = (props) => {
    return (
        <div>
            <div className='container '>
                <div className="row d-flex justify-content-center align-items-center">
                        <Avatar
                            name={props.name}
                            round={true}
                            size="90"
                        />
                </div>
                <div className="row mt-4 mb-0">
                    <div className='col'>
                        <p className='kmp-name-css'>{props.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <p className='kmp-des-css'>{props.designation}</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col'>
                        <p className='kmp-about-css'>{props.about}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KMPCard
import React from 'react'
import "./kmp.css"
import KMPCard from './KMPCard'

const KMP = (props) => {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="heading-cp-css mb-5">{props.heading}</div>
                        <div className="container ">
                            <div className="row">
                                <div className='col-4'>
                                    <KMPCard img="" name="Abhinav Awasthi" designation="Frontend Engineer" about="Competitive Programmer"/>
                                </div>
                                <div className='col-4'>
                                    <KMPCard img="" name="Shreyansh Thakur" designation="Backend Engineer" about="Full Stack Developer"/>
                                </div>
                                <div className='col-4'>
                                    <KMPCard img="" name="Dummy Person" designation="Dummy Designation" about="Dummy Content"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KMP
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
                                    <KMPCard img="" name="Abhinav Awasthi" designation="frontend engineer" about="competitive programmer"/>
                                </div>
                                <div className='col-4'>
                                    <KMPCard img="" name="abhinav awasthi" designation="frontend engineer" about="competitive programmer"/>
                                </div>
                                <div className='col-4'>
                                    <KMPCard img="" name="abhinav awasthi" designation="frontend engineer" about="competitive programmer"/>
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
import React from 'react'
import "./analystreport.css"

const AnalystReport = (props) => {
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="heading-cp-css mb-5">{props.heading}</div>
                        <div className="container main-pdf-view">
                            <object data="https://zionn-report-test.s3.amazonaws.com/user_doc/1ccf82b7-d7b2-42c1-a077-1fcff5f3b7f7-abhinav+resume.pdf" type="application/pdf" width="100%" height="100%">
                            </object>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalystReport
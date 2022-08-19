import React from 'react'
import "./slider.css"
import slider from "../assets/slider.svg"
import Ticker from 'nice-react-ticker';
import Union from "../assets/Union.svg"

const Slider = () => {
    return (
        <div>
            <div className=''>
                <img className='img-slider' src={slider} alt="slider" />
                <div className='txt-slider'>
                    <div class="ticker-wrapper-h">
                        <ul class="news-ticker-h">
                            <li><p>&nbsp;&nbsp;liquidate your ESOPs.&nbsp;&nbsp;</p></li>
                            <img src={Union} />
                            <li><p>&nbsp;&nbsp;be rich.&nbsp;&nbsp;</p></li>
                            <img src={Union} />
                            <li><p>&nbsp;&nbsp;build long term wealth.&nbsp;&nbsp;</p></li>
                            <img src={Union} />
                            <li><p>&nbsp;&nbsp;finalize that trip to the baltics.&nbsp;&nbsp;</p></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider
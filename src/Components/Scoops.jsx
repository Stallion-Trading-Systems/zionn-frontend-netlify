import React, { useState } from 'react'
import { useEffect } from 'react'
import * as api from '../axios'
import "./scoops.css"
import { useNavigate } from "react-router";
import FooterP from './FooterP';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Scoops = () => {
    const user = localStorage.getItem("user");
    const [sloading,setSloading]=useState(true);
    const navigate = useNavigate();
    if (user===null) {
        
        navigate("/signup");
    }
    const [details, setDetails] = useState([]);
    useEffect(() => {
        async function f() {
            let res = await api.scoopsData()

            setDetails(res.data.result);
        }

        f()
        // setSloading(false);
    }, []);
    setTimeout(()=>{
        setSloading(false);
    },1000)
    return (
        <>
            {user?(<div>
            <div className='container'>
                <div className='row'>
                    <h1>
                        Scoops
                    </h1>
                    {sloading?<>
                        <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    <hr/>
                    <Skeleton width={100}/>
                    <Skeleton width={600} />
                    <Skeleton />
                    
                    </>:<></>}
                    <div className='scoop-txt'>
                        {details.map((detail) => {
                            return (
                                <div>
                                    <p className='scoop-tag'>{sloading?<Skeleton/>:detail.tag}</p>
                                    <h6 className='scoop-title'><a className='scoop-link' target="__blank" href={detail.url}>{sloading?<Skeleton/>:detail.title}</a></h6>
                                    <p>{sloading?<Skeleton/>:detail.para}</p>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>
            <FooterP/>
        </div>):(<></>)}
        </>
    )
}

export default Scoops
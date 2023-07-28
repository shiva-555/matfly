import React, { useState } from 'react'
import { MenubarData } from './MenubarData'
import { colors } from '@mui/material';
const Menubar = () => {

    const [activeTabs, setActiveTabs] = useState([]);
    const [isClosing, setIsClosing] = useState(false);

    const handleAnimation =()=>{
        setIsClosing(true);
    }
    return <div className='Menubar'>
        <button
           className={isClosing ? 'button-fade-out' : ''}
            style={{

                background: "none",
                border: "none",
                boxShadow: "none",
                fontSize: "26px",
                marginLeft: "160px",
                color: 'white',
                position: "absolute",
                bottom:190
            }}
            type="button"
            aria-label="Close"
            onClick={handleAnimation}
        >
            <span aria-hidden="true" style={{ width: "14", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", }}>
                &times;
            </span>
        </button>


        <ul className='m-0 p-0'>
            {MenubarData.map((val, key) => {
                return (
                    <>
                        <li className={activeTabs.some((el) => el === val.title) && 'active'} style={{ listStyleType: "none" }} key={key}
                            onClick={() => {
                                // window.location.pathname = val.link
                                if (activeTabs.some((el) => el === val.title)) {
                                    let activeTab = [...activeTabs];
                                    let index = activeTab.findIndex((el) => el === val.title);
                                    activeTab.splice(index, 1);
                                    setActiveTabs(activeTab);
                                } else {
                                    setActiveTabs([...activeTabs, val.title])
                                }
                            }}
                        >
                                        <div style={{ color: "white", marginLeft:"15px",bottom:20}}>
                                            {val.Headers}
                                        </div>
                                 <div style={{}} className='p-0'>
                                <ul className='p-1 m-0 ulist'>
                                    <li
                                        className='d-flex abc p-0 hoverEffectClass'
                                        style={{ padding: "10px" }}
                                    >
                                        <div className='Icon' style={{}}>
                                            {val.icon}
                                        </div>
                                        <div className='MenubarTitle'>
                                            {val.title}
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </li>
                    </>
                )

            })}
        </ul>
    </div>

}

export default Menubar



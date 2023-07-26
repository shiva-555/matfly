import React, { useState } from 'react'
import { MenubarData } from './MenubarData'
const Menubar = () => {
    const [bgColor, setbgColor] = useState()


    function handleClick() {
        var menuTitleDiv = document.querySelector('.MenubarTitle');
        menuTitleDiv.style.backgroundColor = 'red';
      }
      

    return <div className='Menubar'>
        <button style={{ float: "right", backgroundImage: "none" }} type="button" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>

        <ul className='m-0 p-0'>
            {MenubarData.map((val, key) => {
                return (
                    <>
                        <li style={{ listStyleType: "none" }} key={key}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}
                            className='p-1'
                        >
                            <div style={{}} className='p-0'>
                                <ul className='p-1 m-0'>
                                    <li
                                        className='d-flex abc p-0 hoverEffectClass'
                                        style={{ padding: "5px" }}
                     
                                    >
                                        <div className='Icon' style={{}}>
                                            {val.icon}
                                        </div>
                                        <div className='ps-4 MenubarTitle'  onClick={handleClick}>
                                            {val.Headers}
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




import React, { useContext } from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import TopBar from '../../Components/TopBars/TopBar'
import { MyContext } from '../../context/Mystate'

const WebSite = ({ children }) => {

    const context = useContext(MyContext)
    const { DarkMode } = context
    return (<div div className='d-flex gap-1'>
        <SideBar />

        <div className='page position-relative flex-grow-1 overflow-x-auto '>
            <TopBar />
            <div className='site ' style={{ color: DarkMode ? "white" : "black", background: DarkMode ? "#1a222c" : "#f1f5f9" }} >
                <div className='container px-3 pb-2'>

                    {children}
                </div>
            </div>

        </div>
    </div>
    )
}

export default WebSite

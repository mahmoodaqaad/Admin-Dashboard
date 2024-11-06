import React, { useContext } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faBagShopping, faCartShopping, faEye, faUsers } from '@fortawesome/free-solid-svg-icons'
import LineCharts from '../../Components/Charts/lineCharts'
import BarCharts from '../../Components/Charts/BarCharts'
import TopChannel from '../../Components/TopChannel/TopChannel'
import Todos from '../../Components/Todos/Todo'
import User from '../Users/User'
import { MyContext } from '../../context/Mystate'
import RadarChart from '../../Components/Charts/RadarChart'
import PolarAreaChart from '../../Components/Charts/PolarAreaChart'

const Home = () => {
    const context = useContext(MyContext)
    const { DarkMode, setDarkMode, isOpenBars, SetIsOpenBars } = context
    const backgroundColor = { background: DarkMode ? "rgb(38 48 68)" : "white", color: DarkMode ? "white" : "black", }
    const iconColor = { color: DarkMode ? "white" : "#3c50e0", background: DarkMode ? "rgb(32, 41, 61)" : "#eff2f7" }
    return ( 
        <div>
            <div className="title py-2"><h1 className='my-2'>Dasboard</h1></div>

            <div className='row g-2 '>
                <div className="col-12 col-sm-6  col-lg-3 ">
                    <div className={`cards  rounded-3 px-3 pt-3 pb-2  ${!DarkMode && "shadow"}`} style={backgroundColor}>
                        <div className="icon mb-3 px-3 ms-2 mt-1" style={iconColor}>
                            <FontAwesomeIcon icon={faEye} />
                        </div>

                        <div className="head"><h1>$3.456K</h1></div>
                        <p className='mt-1 d-flex justify-content-between'>Total Views <span className='text-success-alt'>0.43% <span><FontAwesomeIcon icon={faArrowUp} /></span></span></p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className={`cards rounded-3 px-3 pt-3 pb-2 ${!DarkMode && "shadow"}`} style={backgroundColor}>
                        <div className="icon mb-3 px-3 ms-2 mt-1" style={iconColor}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>

                        <div className="head"><h1>$45.3K</h1></div>
                        <p className='mt-1 d-flex justify-content-between'>Total Profit <span className='text-success-alt'>4.35% <span><FontAwesomeIcon icon={faArrowUp} /></span></span></p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className={`cards rounded-3 px-3 pt-3 pb-2 ${!DarkMode && "shadow"}`} style={backgroundColor}>
                        <div className="icon mb-3 px-3 ms-2 mt-1" style={iconColor}>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </div>

                        <div className="head"><h1>2.450</h1></div>
                        <p className='mt-1 d-flex justify-content-between'>Total Product <span className='text-success-alt'>2.59% <span><FontAwesomeIcon icon={faArrowUp} /></span></span></p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className={`cards rounded-3 px-3 pt-3 pb-2 ${!DarkMode && "shadow"}`} style={backgroundColor}>
                        <div className="icon mb-3 px-3 ms-2 mt-1" style={iconColor}>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>

                        <div className="head"><h1>3.456</h1></div>
                        <p className='mt-1 d-flex justify-content-between'>Total Users<span className='text-filed-alt'>0.95% <span><FontAwesomeIcon icon={faArrowDown} /></span></span></p>
                    </div>
                </div>
            </div>

            <div className="row g-2 mt-4 justify-content-between">
                <div className='col-12 col-lg-6 ' >
                    <LineCharts mode={DarkMode} />
                </div>
                <div className='col-12 col-lg-6' >
                    <BarCharts mode={DarkMode} />
                </div>
            </div>


            <div className='row mt-4 g-2'>
                <div className='col-12 col-lg-8'>
                    <TopChannel mode={DarkMode} />
                </div>
                <div className='col-12 col-lg-4 '>
                    <Todos mode={DarkMode} />
                </div>
            </div>

            <div className='row mt-4 g-2'>
                <div className="col-lg-6 col-12 mb-4">
                    <RadarChart mode={DarkMode} /> {/* إضافة الرسم البياني المنطقي */}
                </div>
                <div className="col-lg-6 col-12 mb-4">
                    <PolarAreaChart mode={DarkMode} /> {/* إضافة الرسم البياني الشمسي */}
                </div>
            </div>


            <div className='row mt-4  g-2'>

                <div className=' col-12 p-3  rounded-3 shadow' style={{ background: DarkMode ? "rgb(38 48 68)" : "white" }} >
                    <User mode={DarkMode} />
                </div>

            </div>

        </div>



    )
}

export default Home

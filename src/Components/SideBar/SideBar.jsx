import React, { useContext, useState } from 'react';
import './SideBar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBox, faCalendar, faCartShopping, faChartSimple, faDashboard, faGear, faHistory, faHome, faList, faRepeat, faShop, faSignOut, faTable, faUserPlus, faUsers, faUsersGear, faX } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'; // أيقونة جديدة للتقارير
import { MyContext } from '../../context/Mystate';
import sideBar from '../../Data/SideBar';

const SideBar = () => {
    const context = useContext(MyContext);
    const { DarkMode, isOpenBars, SetIsOpenBars } = context;
    const Navgite = useNavigate();

    // تحديد ألوان مختلفة لكل أيقونة
    const iconColors = {
        home: DarkMode ? "#4CAF50" : "#388E3C", // أخضر
        order: DarkMode ? "#2196F3" : "#1976D2", // أزرق
        form: DarkMode ? "#FF9800" : "#F57C00", // برتقالي
        calendar: DarkMode ? "#9C27B0" : "#7B1FA2", // بنفسجي
        charts: DarkMode ? "#FF5722" : "#E64A19", // أحمر
        users: DarkMode ? "#3F51B5" : "#303F9F", // أزرق داكن
        product: DarkMode ? "#009688" : "#00796B", // فيروز
        profile: DarkMode ? "#8BC34A" : "#7CB342", // أخضر فاتح
        history: DarkMode ? "#E91E63" : "#D81B60", // وردي
        reports: DarkMode ? "#F44336" : "#D32F2F" // أحمر داكن
    };

    return (
        <div className={`sideBar p-2 ${isOpenBars && "show"} ${!DarkMode && "light"}`}
            style={{
                background: DarkMode ? "#111827" : "white",
                width: isOpenBars ? "250px" : "65px",
                boxShadow: DarkMode ? "0 .1rem 1rem #c2c2c226 " : "0 .5rem 1rem #00000026"
            }}
        >
            <div className="position-relative h-100">
                <h2 style={{ color: DarkMode ? "white" : "black" }} className='text-center text-truncate mb-4 mt-2 d-flex align-items-center gap-2 pointer'>
                    <FontAwesomeIcon icon={faDashboard} />
                    <div style={{ display: !isOpenBars ? "none" : "flex", justifyContent: "space-between", gap: "20px" }}>
                        <p onClick={e => Navgite("/")} className='m-0'>Dashboard</p>
                        <div onClick={() => SetIsOpenBars(false)} className='pointer d-block d-md-none'><FontAwesomeIcon icon={faAngleLeft} /></div>
                    </div>
                </h2>

                <ul className='p-0'>
                    {sideBar?.map((item, key) => (
                        <NavLink key={key} onClick={() => SetIsOpenBars(false)} to={item.link}>
                            <FontAwesomeIcon color={iconColors[item.iconColor]} icon={item.icon} /> {/* استدعاء اللون بشكل صحيح */}
                            <p className='m-0' style={{ display: !isOpenBars ? "none" : "", color: DarkMode ? "white" : "black" }}>{item.title}</p>
                        </NavLink>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default SideBar;

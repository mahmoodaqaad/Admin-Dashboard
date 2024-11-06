import React, { useContext, useEffect, useRef, useState } from 'react'
import './TopBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowDown, faBars, faBell, faMoon, faNoteSticky, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../../context/Mystate'
import { faEnvelope, faFileAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import NotificationList from '../Notification/Notification'

const TopBar = () => {
  const context = useContext(MyContext);
  const { DarkMode, setDarkMode, Profile, SetIsOpenBars } = context;

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
const not=useRef()
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    scrollRef.current.scrollTop = scrollTop - deltaY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(true);
  };

  const handleClickOutside = (event) => {
    if (scrollRef.current && !scrollRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`position-absolute w-100 topbar rounded-2 ${!DarkMode && "shadow"}`}

      style={{
        background: !DarkMode && "white"
      }}>

      <div className=' d-flex align-items-center justify-content-between p-3 flex-wrap'>
        <div className=' col-1 col-md-1 d-flex align-items-center '>
      
          <div className="bars pointer" onClick={() => SetIsOpenBars(prev => !prev)}><FontAwesomeIcon fontSize={"30px"} color={DarkMode ? "white" : "bwlack"} icon={faBars} /></div>
        </div>

        <div className=" col-12 col-md-4 d-none d-md-flex serach ">
          <input type="text" placeholder='search' className='m-0' style={{ color: DarkMode ? "white" : "black" }} />
          <FontAwesomeIcon icon={faSearch} color={DarkMode ? "white" : "bwlack"} />
        </div>

        <div className=" col-7 col-md-2  icons d-flex align-items-center justify-content-end order-md-3 order-sm-2">
          <div className="search pointer d-block d-md-none">
            <FontAwesomeIcon color={DarkMode && "white"} icon={faSearch} />


          </div>
          <div className="notification pointer position-relative" onClick={toggleNotifications}>
            <FontAwesomeIcon color={DarkMode ? "white" : "black"} fontSize={"20px"} icon={faBell} />
            <div className='btn btn-danger rounded-circle'>5</div>

            {showNotifications && (
              <div
                className='position-absolute notif-slide text-white'
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <NotificationList mode={DarkMode} />
              </div>
            )}
          </div>

          <div className="mode pointer" onClick={e => setDarkMode(prev => !prev)} >
            <FontAwesomeIcon color={DarkMode && "white"} icon={!DarkMode ? faMoon : faSun} />
          </div>
          <div className="user">
            <NavLink to={"profile"}><img className='img-fluid' src={Profile ? URL.createObjectURL(Profile) : require('../../IMG/avatar-05.png')} alt="" /></NavLink>
          </div>



        </div>
      </div>
    </div>
  )
}

export default TopBar

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt, faUserEdit, faBell } from '@fortawesome/free-solid-svg-icons';

const NotificationList = ({ mode }) => {
    const color = { color: mode ? "white" : "#000" }
    return (
        <div className='pb-2 rounded' style={{ background: mode ? "#3b3d41" : "#ffffff", border: "1px solid #dee2e6" }}>
            <div className='header py-2' style={{ background: "#007bff", color: "#ffffff" }}>
                <h6 className='px-2 pt-2 text-uppercase d-flex justify-content-between align-items-center'>Notifications  <FontAwesomeIcon color={"white"} fontSize={"15px"} icon={faBell} /></h6>
            </div>
            <div className='border-top'>
                <div className='d-flex flex-column gap-2'>
                    <div className='d-flex gap-3 py-1 px-2 align-items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon-notif' />
                        <p className='m-0' style={color}>Received a new email</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faFileAlt} className='icon-notif' />
                        <p className='m-0' style={color}>Check the latest reports</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faUserEdit} className='icon-notif' />
                        <p className='m-0' style={color}>Update your profile picture</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faBell} className='icon-notif' />
                        <p className='m-0' style={color}>You have a new notification</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon-notif' />
                        <p className='m-0' style={color}>Received another email</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faFileAlt} className='icon-notif' />
                        <p className='m-0' style={color}>New report available</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faUserEdit} className='icon-notif' />
                        <p className='m-0' style={color}>Update your personal information</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faBell} className='icon-notif' />
                        <p className='m-0' style={color}>Reminder: Meeting tomorrow</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon-notif' />
                        <p className='m-0' style={color}>Feedback received from client</p>
                    </div>
                    <div className='d-flex gap-3 py-1 px-2 border-top align-items-center'>
                        <FontAwesomeIcon icon={faFileAlt} className='icon-notif' />
                        <p className='m-0' style={color}>System maintenance scheduled</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationList;

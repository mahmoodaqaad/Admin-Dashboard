import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './user.css'
import { user } from '../../Data/User'
import { MyContext } from '../../context/Mystate'
import Table from '../../Components/Table/Table'
import TableShow from '../../Components/Table/Table'
const User = (props) => {
    const context = useContext(MyContext)
    const { DarkMode, setDarkMode, isOpenBars, SetIsOpenBars } = context
    const mode = props.mode || DarkMode

    const color = { color: DarkMode ? "white" : "black" }
    const usersShow = user.map((user, key) => (
        <tr key={key}>
            <td style={color} scope="col"><input className="ref " type="checkbox" name="" id="" /></td>

            <td style={color}>{key + 1}</td>
            <td style={color}>{user.name}</td>
            <td style={color}>{user.email}</td>
            <td style={color}>{user.role}</td>
            <td style={color} className='text-center'>
                <button className="btn btn-primary me-md-3 me-1"><FontAwesomeIcon icon={faPen} /></button>
                <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>

    ))



    const header = [

        {
            key: "name",
            name: 'Name'
        },
        {
            key: "email",
            name: 'Email'
        },
        {
            key: 'role',
            name: 'Role'
        },


    ]


    return (
        <div>
            <div className='d-flex justify-content-between align-items-center py-2'>
                <h1 className='my-2'>User</h1>
                <div><div className="btn btn-primary">Add User</div></div>
            </div>
            <div className='mt-3 border-top overflow-x-auto p-2'>

                <TableShow usersShow={usersShow} color={color} Header={header} />

            </div>
        </div >
    )
}

export default User

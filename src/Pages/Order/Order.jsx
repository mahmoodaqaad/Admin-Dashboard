import React, { useContext, useEffect, useState } from 'react';
// import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faEye, faPen } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../context/Mystate';
import TableShow from '../../Components/Table/Table';
import { orders } from '../../Data/order';
import { NavLink } from 'react-router-dom';

const Order = () => {
    const { DarkMode } = useContext(MyContext);


    const color = { color: DarkMode ? "white" : "black" }

    const orderShow = orders.map((order, key) => (
        <tr key={order.id}>
            <td style={color} scope="col"><input className="ref " type="checkbox" name="" id="" /></td>

            <td style={color}>{key + 1}</td>
            <td style={color}>{order.customer}</td>
            <td style={color}>{order.date}</td>
            <td style={color}>{order.status}</td>
            <td style={color}>{order.total}</td>

            <td className='text-center'>
                <button className="btn btn-sm btn-info me-2">
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="btn btn-sm btn-warning me-2">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn btn-sm btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    ))

    const header = [

        {
            key: "Customer",
            name: 'Customer'
        },
        {
            key: "Date",
            name: 'Date'
        },
        {
            key: "Status",
            name: 'Status'
        },
        {
            key: "Total",
            name: 'Total'
        },


    ]


    return (
        <div>

            <div className='d-flex py-2 justify-content-between align-items-center'>
                <h1 className='my-2'>Order</h1>
                <NavLink to="/adduser"><div className="btn btn-primary">Add Order</div></NavLink>
            </div>
            <div className=' border-top overflow-x-auto '>

                <TableShow usersShow={orderShow} color={color} Header={header} />

            </div>
        </div >

    );
};

export default Order;

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { MyContext } from '../../context/Mystate';
import TableShow from '../../Components/Table/Table';
import { historyData } from '../../Data/History';
import { NavLink } from 'react-router-dom';
 
const History = () => {
    const { DarkMode } = useContext(MyContext);
    const color = { color: DarkMode ? "white" : "black" };

    const historyShow = historyData.map((entry, key) => (
        <tr key={entry.id}>
            <td style={color} scope="col"><input className="ref " type="checkbox" /></td>
            <td style={color}>{key + 1}</td>
            <td style={color}>{entry.action}</td>
            <td style={color}>{entry.date}</td>
            <td style={color}>{entry.status}</td>
            <td className='text-center'>
                <button className="btn btn-sm btn-info me-2">
                    <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="btn btn-sm btn-danger">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    ));

    const header = [
        { key: "Action", name: 'Action' },
        { key: "Date", name: 'Date' },
        { key: "Status", name: 'Status' }
    ];

    return (
        <div>
            <div className='d-flex py-2 justify-content-between align-items-center title'>
                <h1 className='my-2'>History</h1>
            </div>
            <div className='border-top overflow-x-auto'>
                <TableShow usersShow={historyShow} color={color} Header={header} />
            </div>
        </div>
    );
};

export default History;

import React, { useContext } from 'react'
import { MyContext } from '../../../context/Mystate'
import TableShow from '../../../Components/Table/Table'
import { user } from '../../../Data/User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { product } from '../../../Data/product'

const Product = () => {

    const context = useContext(MyContext)
    const { DarkMode, setDarkMode, isOpenBars, SetIsOpenBars } = context

    const color = { color: DarkMode ? "white" : "black" }
    const usersShow = product.map((product, key) => (
        <tr key={key}>
            <td style={color} scope="col"><input type="checkbox" name="" id="" /></td>

            <td style={color}>{key + 1}</td>
            <td style={color}><img className='img-fluid' style={{ width: "40px", height: "40px", objectFit: "cover" }} src={product.image} alt="" /></td>
            <td style={color}>{product.name}</td>
            <td style={color}>{product.count}</td>
            <td style={color} className='text-center'>
                <button className="btn btn-primary me-md-3 me-1"><FontAwesomeIcon icon={faPen} /></button>
                <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
            </td>
        </tr>

    ))



    const header = [

        {
            key: "image",
            name: 'Image'
        },
        {
            key: "email",
            name: 'Name'
        },
        {
            key: 'count',
            name: 'count'
        },


    ]


    return (
        <div>
            <div className='d-flex justify-content-between align-items-center py-2'>
                <h1 className='my-2'>Products</h1>
                <div className="btn btn-primary">Add Product</div>
            </div>
            <div className='mt-3 border-top overflow-x-auto p-2'>

                <TableShow usersShow={usersShow} color={color} Header={header} />

            </div>
        </div >
    )
}

export default Product

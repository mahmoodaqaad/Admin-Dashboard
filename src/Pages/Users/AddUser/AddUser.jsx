import React, { useContext } from 'react'
import { MyContext } from '../../../context/Mystate'
import './AddUser.css'
import { useNavigate } from 'react-router'
const AddUser = () => {
    const context = useContext(MyContext)
    const { DarkMode, setDarkMode, isOpenBars, SetIsOpenBars } = context
    const stayleInput = { color: DarkMode ? "white" : "black", backgroundColor: "transparent" }
const navegite=useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        navegite("/user")

    }
    return (
        <div>
            <h1>Add user</h1>

            <form action="" onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className='col-8 d-flex align-items-center gap-2 rounded-3 overflow-hidden ' style={{ border: DarkMode ? "1px solid white" : "1px solid #aaa" }}>
                        <input type="text" style={stayleInput} className='inputs' placeholder='Name' />
                    </div>

                    <div className='col-8 d-flex align-items-center gap-2 rounded-3 overflow-hidden ' style={{ border: DarkMode ? "1px solid white" : "1px solid #aaa" }}>
                        <input type="email" style={stayleInput} className='inputs' placeholder='Email' />
                    </div>

                    <div className='col-8 d-flex align-items-center gap-2 rounded-3 overflow-hidden ' style={{ border: DarkMode ? "1px solid white" : "1px solid #aaa" }}>
                        <input type="password" style={stayleInput} className='inputs' placeholder='Password' />
                    </div>

                    <div className='col-8 py-3  d-flex align-items-center gap-2 rounded-3 overflow-hidden ' style={{ border: DarkMode ? "1px solid white" : "1px solid #aaa" }}>
                        <select style={stayleInput} name="" id="" className='w-100 border-0 outline-0 bg-transparent'>
                            <option style={{color:"black"}} value="admin">Choose Role</option>
                            <option style={{color:"black"}} value="admin">Admin</option>
                            <option style={{color:"black"}} value="writer">Writer</option>
                            <option style={{color:"black"}} value="product">Product Manegar</option>
                            <option style={{color:"black"}} value="user">User</option>
                        </select>

                    </div>
                </div>
                <button type='submit' className="btn btn-primary mt-4  px-3 col-1 " >Submit</button>
            </form>
        </div>
    )
}

export default AddUser

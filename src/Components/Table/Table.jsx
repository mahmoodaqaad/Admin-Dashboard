import { useState } from 'react'
import { Table } from 'react-bootstrap'

const TableShow = (props) => {

    const [check, setCheck] = useState(false)


    const headershow = props.Header.map((th, key) => (<td key={key} style={{ color: "white" }} className=''>

        {th.name}</td>

    ))

    function handleChecked() {

        document.querySelectorAll("input.ref").forEach(input => {
            input.checked = !check

        })
        setCheck(prev => !prev)
    }


    return (
        <Table className='table-show mt-4' striped hover >
            <thead>
                <tr style={{ background: "#888", color: "white" }} >

                    <td style={{ color: "white" }} scope="col" ><input type="checkbox" name="" id="" onClick={e => handleChecked()} checked={check} /></td>
                    <td style={{ color: "white" }} scope="col" className=''>ID</td>
                    {headershow}
                    <td style={{ color: "white" }} scope="col" className='text-center'>Action</td>
                </tr>
            </thead>
            <tbody>
                {props.usersShow}
            </tbody>
        </Table >
    )
}

export default TableShow

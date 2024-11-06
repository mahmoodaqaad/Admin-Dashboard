import React from 'react'
import { Table } from 'react-bootstrap'

const TopChannel = ({ mode }) => {
    const colorTR = { color: mode?"white":"#000" }
    return (
        <div className={` rounded px-4 overflow-auto ${!mode&&"shodow"}`} style={{ background: mode ?"rgb(38 48 68)":"white" }}>
            <h3 className='pt-3 '>Top Channel</h3>
            <Table className='table-show mt-4 rounded' striped hover >
                <thead style={{ background: "rgb(49 61 74) " }}>
                    <tr>
                        <td className='py-3 ' style={{ color: "white", width:"150px" }}>Source</td>
                        <td className='py-3' style={{ color: "white" }}>Visitors</td>
                        <td className='py-3' style={{ color: "white" }}>Revenues</td>
                        <td className='py-3' style={{ color: "white" }}>Sales</td>
                        <td className='py-3' style={{ color: "white" }}>Conversion</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='py-4'>
                        <td className='py-4' style={colorTR}><img src={require("../../IMG/google.png")} className='img-rounded me-3' alt="" />
                            Google
                        </td >
                        <td className='py-4' style={colorTR}> 3.5K</td>
                        <td className='py-4 text-success-alt' style={colorTR}>$5,768                        </td>
                        <td className='py-4 ' style={colorTR}>590                        </td>
                        <td className='py-4 text-filed-alt' style={colorTR}>4.8%                        </td>
                    </tr>






                    <tr >
                        <td className='py-4' style={colorTR}><img src={require("../../IMG/Facebook2.jpg")} className='img-rounded me-3' alt="" />
                            Google
                        </td >
                        <td className='' style={colorTR}>   3.5K</td>
                        <td className='py-4 text-success-alt' style={colorTR} >$6,768                    </td>
                        <td className='py-4 ' style={colorTR}>
                            390                       </td>
                        <td className='py-4 text-filed-alt' style={colorTR}>    4.2%                       </td>
                    </tr>










                    <tr >

                        <td className='py-4' style={colorTR}><img src={require("../../IMG/github.png")} className='img-rounded me-3' alt="" />
                            GitHub
                        </td >
                        <td className='' style={colorTR}> 2.2K</td>
                        <td className='py-4 text-success-alt' style={colorTR}>  $4,635                        </td>
                        <td className='py-4 ' style={colorTR}> 467                        </td>
                        <td className='py-4 text-filed-alt' style={colorTR}>4.3%                      </td>
                    </tr>

















                    <tr >
                        <td className='py-4' style={colorTR}><img src={require("../../IMG/Vimeo.png")} className='img-rounded me-3' alt="" />
                            Vimeo
                        </td >
                        <td className='' style={colorTR}>2.1K</td>
                        <td className='py-4 text-success-alt' style={colorTR}>$4,290                    </td>
                        <td className='py-4 ' style={colorTR}>420                        </td>
                        <td className='py-4 text-filed-alt' style={colorTR}>3.7%                        </td>
                    </tr>



                    <tr >
                        <td className='py-4' style={colorTR}><img src={require("../../IMG/twiter.png")} className='img-rounded me-3' alt="" />
                            Twiter
                        </td >
                        <td className='' style={colorTR}> 3.5K</td>
                        <td className='py-4 text-success-alt' style={colorTR}> $3,580                       </td>
                        <td className='py-4 ' style={colorTR}>389                   </td>
                        <td className='py-4 text-filed-alt' style={colorTR}>   2.5%


                        </td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )
}

export default TopChannel





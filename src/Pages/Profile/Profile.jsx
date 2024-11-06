import React, { useContext, useState } from 'react'
import { MyContext } from '../../context/Mystate'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const Profile = () => {
    const [bacProfile, setBacProfile] = useState()
    const { DarkMode, Profile, setProfile } = useContext(MyContext)
    console.log(bacProfile);

    return (
        <div  >
            <div className="title py-2">
                <h1 className='my-2'>Profile</h1>
            </div>

            <div className="row justify-content-center align-items-center">
                <div className="col-12 mt-1 overflow-hidden">
                    <div className={`cards pb-5  rounded-3 overflow-hidden ${!DarkMode && "shadow"}`} style={{ background: DarkMode ? 'rgb(32, 41, 61)' : "white" }}>

                        <div className='backgoround position-relative'>

                            <div className='Myphoto' style={{ backgroundImage: bacProfile && `url(${bacProfile && URL.createObjectURL(bacProfile)})` }}>
                                <label htmlFor="imgUrl" className='btn btn-primary position-absolute end-0 bottom-0 m-2 px-3 py-1'>

                                    <FontAwesomeIcon icon={faCamera} />    Edit

                                    <input type="file" hidden id='imgUrl' onChange={e => setBacProfile(e.target.files[0])} />
                                </label>
                            </div>
                            <div className='position-relative hight-8n  0'>
                                <img src={Profile ? Profile && URL.createObjectURL(Profile) : require("../../IMG/avatar-05.png")} className='profile-img position-relative' alt="" />
                                <label htmlFor='profile' className='icon-profile btn btn-primary  rounded-circle'>
                                    <FontAwesomeIcon icon={faCamera} />
                                    <input type="file" name="" hidden id="profile" onChange={e => setProfile(e.target.files[0])} />
                                </label>
                            </div>


                            <div className={`text-center ${!DarkMode && "text-black"}`}>
                                <h3 className='fs-4'>Mahmoodaqaad</h3>
                                <p className='text-gray'>Front End Devloper</p>
                                <div className='follow row'>
                                    <div className="col-12 col-sm-4  box border-end mb-1 mb-sm-0  "><span>200</span>Post</div>
                                    <div className="col-6 col-sm-4 box border-end"><span>30k</span>Followers</div>
                                    <div className="col-6 col-sm-4 box"><span>200</span>Following</div>
                                </div>
                                <div className='about px-5'>

                                    <p className='mt-3' >About Me</p>

                                    <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.

                                    </p>
                                </div>
                                <div className='mt-4'>
                                    <p>Follow Me</p>
                                </div>
                                <div className='socail'>

                                    <Link target='_blank' to={"https://www.facebook.com/profile.php?id=100022618519064"}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                    <Link target='_blank' to={"https://www.instagram.com/dev._mahmood/"}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                    <Link target='_blank' to={"https://wa.me/+970599923041"}>
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </Link>
                                    <Link target='_blank' to={"https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%AF-528463291/"}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </Link>
                                    <Link target='_blank' to={"https://github.com/mahmoodaqaad"}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </Link>

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

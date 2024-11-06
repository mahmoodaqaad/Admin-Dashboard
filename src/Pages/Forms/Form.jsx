import React, { useState, useContext } from 'react';
import { MyContext } from '../../context/Mystate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Form.css';

const UserForm = () => {
    const { DarkMode } = useContext(MyContext);
    const [image, setImage] = useState();

    const styleInput = { background: DarkMode ? "#20293d" : "white", color: DarkMode ? "white" : "#000" };

    return (
        <div>
            <div className="title py-2">
                <h1 className='my-2'>Forms</h1>
            </div>

            <div className="row">
                {/* نموذج الإدخال */}
                <div className="col-12 col-lg-6 mb-3">
                    <div className="formCard py-3 shadow rounded-1" style={styleInput}>
                        <h4 className='px-2 py-2'>Input Form</h4>
                        <div className="border-top px-3 py-3">
                            <div className='d-flex flex-column gap-3'>
                                <input type="text" className='input-group' placeholder='Name...' name='name' style={styleInput} />
                                <input type="email" className='input-group' placeholder='Email...' name='email' style={styleInput} />
                                <div className='btn btn-primary col-4 col-md-4 mt-3' >Submit</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* نموذج تسجيل الدخول */}
                <div className="col-12 col-lg-6 mb-3">
                    <div className="formCard py-3 shadow rounded-1" style={styleInput}>
                        <h4 className='px-2 py-2'>Login Form</h4>
                        <div className="border-top px-3 py-3">
                            <div className='d-flex flex-column gap-3'>
                                <div className="inputGroup">
                                    <div className={`icon ${DarkMode && "mode"}`}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <input type="email" className='border-0 outline-0' placeholder='Email...' name='email' style={styleInput} />
                                </div>
                                <div className="inputGroup">
                                    <div className={`icon ${DarkMode && "mode"}`}>
                                        <FontAwesomeIcon icon={faLock} />
                                    </div>
                                    <input type="password" className='border-0 outline-0' placeholder='Password...' name='password' style={styleInput} />
                                </div>
                                <div className='btn btn-success col-4 col-md-4 mt-3' >Login</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* نموذج تسجيل */}
                <div className="col-12 col-lg-6 mb-3">
                    <div className="formCard py-3 shadow rounded-1" style={styleInput}>
                        <h4 className='px-2 py-2'>Sign In Form</h4>
                        <div className="border-top px-3 py-3">
                            <div className='d-flex flex-column gap-3'>
                                <input type="text" className='input-group' placeholder='Name...' name='name' style={styleInput} />
                                <input type="email" className='input-group' placeholder='Email...' name='email' style={styleInput} />
                                <input type="password" className='input-group' placeholder='Password...' name='password' style={styleInput} />
                                <div className='btn btn-primary-alt col-4 col-md-4 mt-3' >Sign In</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* نموذج الاختيار باستخدام Checkboxes */}
                <div className="col-12 col-lg-6 mb-3">
                    <div className="formCard py-3 shadow rounded-1" style={styleInput}>
                        <h4 className='px-2 py-2'>Checkbox Form</h4>
                        <div className="border-top px-3 py-3">
                            <div className='d-flex flex-column gap-3'>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="option1" />
                                    <span className="checkmark"></span>
                                    الخيار الأول
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="option2" />
                                    <span className="checkmark"></span>
                                    الخيار الثاني
                                </label>
                                <label className="custom-checkbox">
                                    <input type="checkbox" name="option3" />
                                    <span className="checkmark"></span>
                                    الخيار الثالث
                                </label>
                                <div className='btn btn-warning col-4 col-md-4  mt-3' >Submit</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* نموذج رفع الصور */}
                <div className="col-12 col-lg-6 mb-3">
                    <div className="formCard py-3 shadow rounded-1" style={styleInput}>
                        <h4 className='px-2 py-2'>Upload Image Form</h4>
                        <div className="border-top px-3 py-3">
                            <div className='d-flex flex-column gap-3'>
                                <label className="custom-file-upload">
                                    <input type="file" name='image' accept="image/*" onChange={e => setImage(e.target.files[0])} />
                                    <span>Choose</span>
                                </label>

                                {image && (
                                    <div className="image-preview">
                                        <img src={URL.createObjectURL(image)} alt="Preview" className="img-preview" />
                                    </div>
                                )}

                                <button className='btn btn-outline-success col-4 col-md-3 mt-3' >Upload</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* نموذج الملاحظات */}
                <div className="col-12 col-lg-6 mb-3">
                    <div className="formCard py-3 shadow rounded-1" style={styleInput}>
                        <h4 className='px-2 py-2'>Feedback Form</h4>
                        <div className="border-top px-3 py-3">
                            <div className='d-flex flex-column gap-3'>
                                <textarea className='input-group' placeholder='Your feedback...' style={styleInput} name='feedback' ></textarea>
                                <div className='btn btn-info col-4 col-md-4 text-white mt-3' >Send Feedback</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserForm;

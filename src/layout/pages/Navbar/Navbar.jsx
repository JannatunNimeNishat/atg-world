
// import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from '../../../assets/desktop/navbar/logo.svg'
import search_icon from '../../../assets/desktop/navbar/search-icon.png'
import arrow from '../../../assets/desktop/navbar/arrow_back.png'
import { Link } from "react-router-dom";
import signUpLogo from "../../../assets/desktop/modal/signUp.svg"
import eye from '../../../assets/desktop/modal/eye.png'

import facebook from '../../../assets/desktop/modal/facebook.png'
import google from '../../../assets/desktop/modal/gmail.png'

const Navbar = () => {
    return (
        // <nav classNameName="  navbar navbar-expand-lg bg-transparent bg-md-white bg-body-tertiary ">
        // <nav classNameName="px-2  px-md-5  navbar  fixed-top navbar navbar-expand-lg  bg-md-white bg-sm-transparent  ">
        <>

            <div>
                {/* modal */}
                <div className="modal fade modal-lg rounded" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" >
                    <div className="modal-dialog modal-dialog-centered" >
                        <div className="modal-content">
                            {/*  <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Show a second modal and hide this one with the button below.
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                            </div> */}
                            <div>
                                <p className="py-1 px-3 " style={{ backgroundColor: '#EFFFF4' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                <div className="px-4 py-4">

                                    <div className="d-flex py-2 align-items-center justify-content-between">
                                        <h3 className="fw-bold">Create Account</h3>
                                        <p className='pe-3'>Already have an account? <span className="text-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign In</span></p>
                                    </div>

                                    {/* form */}

                                    <div className="d-flex gap-3">
                                        <div className="w-50" >
                                            <form className="" >
                                                <div style={{ backgroundColor: '#f7f8fa' }}>
                                                    {/* 1st */}
                                                    <div className="d-flex ">
                                                        <input className="border border-secondary bg-light py-2" type="text" name="" id="" placeholder=" First Name" />

                                                        <input className="border border-secondary bg-light  py-2" type="text" name="" id="" placeholder=" Last Name" />
                                                    </div>
                                                    {/* 2nd */}
                                                    <div className="w-100 ">
                                                        <input className="border border-secondary bg-light w-100 py-2" type="email" name="" id="" placeholder=" Email" />
                                                    </div>
                                                    {/* 3rd */}

                                                    <div className="input-group  d-flex align-items-center ">
                                                        
                                                        <input type="text" className="form-control border border-end-0 border-secondary bg-light py-2" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" />

                                                        <div className="border d-flex justify-content-center align-items-center border-secondary bg-light" style={{ height: '42px' }}>
                                                            <img className="pe-2" src={eye} alt="" style={{ height: '20px' }} />
                                                        </div>
                                                    </div>
                                                    {/* 4th */}
                                                    <div className="w-100 ">
                                                        <input className="border border-secondary bg-light w-100 py-2" type="password" name="" id="" placeholder=" Confirm Password" />
                                                    </div>
                                                </div>


                                                <input className=" mt-4 bg-primary rounded-pill text-white border-0 py-2 w-100 px-3" type="submit" value="Create Account" />

                                            </form>
                                         
                                                <p className='d-flex border py-2 mt-3 gap-3 align-items-center justify-content-center'>
                                                    <img src={facebook} alt="" />
                                                    Sign up with Facebook
                                                </p>
                                                <p className='d-flex border py-2 mt-3 gap-3 align-items-center justify-content-center'>
                                                    <img src={google} alt="" />
                                                    Sign up with Google
                                                </p>
                                          
                                        </div>
                                        <div className="w-50">
                                            <img src={signUpLogo} alt="" />
                                            <p className='ms-3'><small>By signing up, you agree to our Terms & conditions, Privacy policy</small></p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Hide this modal and show the first with the button below.
                                {/*  */}
                                
                                {/*  */}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="px-2  px-md-5  navbar  fixed-top navbar-expand-lg  bg-white  ">

                <div className="container-fluid">

                    <Link className="navbar-brand" href="#">

                        <img className='d-flex d-md-none bg-black ' src={arrow} alt="" />

                        <img className=' d-none d-md-block ' src={logo} alt="" />
                    </Link>


                    <button type="button" className="navbar-toggler bg-black text-white btn border" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >Join Group</button>



                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <form className="d-flex  flex-row-reverse align-items-center bg-secondary-subtle rounded-pill mx-auto border" role="search" style={{ width: '360px', height: '42px', backgroundColor: '#F2F2F2' }} >
                            <input className="bg-secondary-subtle border ps-3 border-0 rounded-pill w-100" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />

                            <img className="ms-3" src={search_icon} alt="" style={{ width: "16px", height: '16px' }} />

                        </form>


                        {/* <ul className="navbar-nav navbar-nav-scroll mb-2 mb-lg-0"> */}
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a data-bs-toggle="modal" href="#exampleModalToggle" className="nav-link d-flex">
                                    <span className="fw-semibold">Create account. <span className="text-primary fw-bold">It's free!</span></span>
                                    <select className="border-0" name="" id=""></select>
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
                </div>
            </nav>

        </>


    );
};

export default Navbar;
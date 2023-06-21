
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from '../../../assets/desktop/navbar/logo.svg'
import search_icon from '../../../assets/desktop/navbar/search-icon.png'
const Navbar = () => {
    return (
        // <nav className="  navbar navbar-expand-lg bg-transparent bg-md-white bg-body-tertiary ">
        <nav className="px-0  px-md-5  navbar navbar-expand-lg bg-transparent bg-dark-lg ">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">

                    <AiOutlineArrowLeft className='d-flex d-md-none text-dark' />

                    <img className=' d-none d-md-block ' src={logo} alt="" />
                </a>


                <button type="button" className="navbar-toggler btn btn-outline-dark" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >Join Group</button>



                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form className="d-flex  flex-row-reverse align-items-center bg-secondary-subtle rounded-pill mx-auto border"  role="search"style={{width:'360px', height:'42px', backgroundColor:'#F2F2F2'}} >
                        <input className="bg-secondary-subtle border ps-3 border-0 rounded-pill w-100" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
    
                        <img className="ms-3" src={search_icon} alt=""  style={{width:"16px", height:'16px'}} />
                         
                    </form>
                   

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link d-flex" href="">
                                <span className="fw-semibold">Create account. <span className="text-primary fw-bold">It's free!</span></span>
                                <select className="border-0" name="" id=""></select>
                            </a>
                        </li>

                    </ul>

                </div>


            </div>
        </nav>

       
    );
};

export default Navbar;
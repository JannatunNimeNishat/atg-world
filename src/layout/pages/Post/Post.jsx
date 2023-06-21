
import p1 from '../../../assets/desktop/post/p1.png'
import p1_1 from '../../../assets/desktop/post/p1.1.png'
import p2 from '../../../assets/desktop/post/p2.png'
import p2_1 from '../../../assets/desktop/post/p2.1.png'
import p3 from '../../../assets/desktop/post/p3.png'
import p3_1 from '../../../assets/desktop/post/p3.3.png'
import p3_2 from '../../../assets/desktop/post/p3_2.svg'
import p3_3 from '../../../assets/desktop/post/p3_3.png'

import { BsThreeDots, BsShareFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
const Post = () => {
    return (
        <>
            {/* 1st */}
            <div className="border" >
                <img className="img-fluid w-100" src={p1} alt="" />
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div>
                            <p className='fw-semibold'>✍️ Article</p>
                            <h4>What if famous brands had regular fonts? <br /> Meet RegulaBrands!</h4>
                            <h6 className='' style={{ color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h6>
                        </div>

                        <BsThreeDots className='fw-bold' />
                    </div>

                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p1_1} alt="" />
                            <h5 className='fw-semibold'>Sarthak Kamra</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye />
                            <p className='pt-2'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* 2nd */}
            <div className="border" >
                <img className="img-fluid w-100" src={p2} alt="" />
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div>
                            <p className='fw-semibold'>🔬️ Education</p>
                            <h4>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h4>
                            <h6 className='' style={{ color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h6>
                        </div>

                        <BsThreeDots className='fw-bold' />
                    </div>

                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p2_1} alt="" />
                            <h5 className='fw-semibold'>Sarah West</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye />
                            <p className='pt-2'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* 3rd */}
            <div className="border" >
                <img className="img-fluid w-100" src={p3} alt="" />
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div>
                            <p className='fw-semibold'>🗓️ Meetup</p>
                            <h4>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h4>

                            <div className='d-flex gap-5 pt-1'>
                                <p className='fw-bold d-flex align-items-center gap-2 '>
                                    <img src={p3_2} alt="" />
                                    Fri, 12 Oct, 2018
                                </p>
                                <p className='fw-bold d-flex align-items-center gap-2 '>
                                    <img src={p3_3} alt="" />
                                    Ahmedabad, India
                                </p>
                            </div>
                        </div>

                        <BsThreeDots className='fw-bold' />
                        
                    </div>
                            <button className='w-100  rounded bg-white text-danger fw-semibold  border border-dark-subtle py-1' >Visit Website</button>
                           

                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p3_1} alt="" />
                            <h5 className='fw-semibold'>Ronal Jones</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye />
                            <p className='pt-2'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Post;
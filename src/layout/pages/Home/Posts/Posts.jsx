
import people from '../../../../assets/desktop/posts/people.png'
import Post from '../../Post/Post';

const Posts = () => {
    return (
        <div className="container-md " style={{ marginTop: '40px' }}>
            <div className='d-md-flex align-items-center justify-content-between'>

                <div className="d-none d-md-flex gap-5 ">
                    <h5 className="">All Posts(32)</h5>
                    <h5 className="text-secondary">Article</h5>
                    <h5 className="text-secondary">Event</h5>
                    <h5 className="text-secondary">Education</h5>
                    <h5 className="text-secondary">Job</h5>
                </div>

                <div className=' d-none d-md-flex align-items-center gap-3'>
                    <button className="border border-0 px-4 py-2 rounded" style={{ backgroundColor: '#EDEEF0' }}>Write a Post <span><select className=" border-0" name="" id="" style={{ backgroundColor: '#EDEEF0' }}></select></span></button>
                    <button className="border border-0 px-4 py-2 rounded bg-primary text-white"><span><img src={people} alt="" /></span> Join Group</button>
                </div>


                <div className=' d-flex  d-md-none align-items-center justify-content-between'>
                    <h5 className="fw-semibold">All Posts</h5>
                    <button className="border border-0 px-4 py-2 rounded fw-semibold" style={{ backgroundColor: '#EDEEF0' }}>Filter: All <span><select className=" border-0" name="" id="" style={{ backgroundColor: '#EDEEF0' }}></select></span></button>
                </div>
            </div>
            <div className=" d-none d-md-flex align-items-center">
                <div className="" style={{ width: "130px", height: '1px', color: 'black', backgroundColor: 'black' }}></div>
                <hr className="w-100" />
            </div>


            {/* posts content */}

            <div className='container mt-3'>
                <div className='row'>
                    <div className="col-8">
                        <Post></Post>
                    </div>
                    <div className="col-4 ps-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam ipsam placeat quibusdam odit porro nulla non veritatis molestiae aut, voluptatum pariatur eos reprehenderit? Culpa reiciendis autem commodi itaque saepe neque iure ex doloribus vitae quaerat debitis, maiores sed error repellat iusto ipsum totam excepturi natus hic laboriosam fugiat numquam laudantium? Magnam magni voluptatum odio recusandae reiciendis mollitia corrupti consequatur, quas iste! Fugiat tempora consequuntur assumenda repudiandae beatae corporis accusantium voluptates, quas suscipit sit vero saepe deserunt laudantium eius quam officia possimus, mollitia necessitatibus officiis a corrupti? Reiciendis dolores accusantium placeat! Consequuntur sint dolores quis possimus? Magnam velit aliquid unde.
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Posts;
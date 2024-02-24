import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
        <img className="singlePostImg"
        src="https://images.pexels.com/photos/259881/pexels-photo-259881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        </img>

        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit 

            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>        
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Safak</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>

        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem explicabo nisi ut quam unde laboriosam in temporibus. Suscipit, vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem explicabo nisi ut quam unde laboriosam in temporibus. Suscipit, vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem explicabo nisi ut quam unde laboriosam in temporibus. Suscipit, vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem explicabo nisi ut quam unde laboriosam in temporibus. Suscipit, vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem explicabo nisi ut quam unde laboriosam in temporibus. Suscipit, vero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem explicabo nisi ut quam unde laboriosam in temporibus. Suscipit, vero!
        </p>
    </div>
    </div>
  )
}

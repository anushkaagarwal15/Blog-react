import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
      src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
      </img>

      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>

        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr/>

        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non rerum commodi maxime cupiditate hic assumenda veniam pariatur quisquam quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non rerum commodi maxime cupiditate hic assumenda veniam pariatur quisquam quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non rerum commodi maxime cupiditate hic assumenda veniam pariatur quisquam quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non rerum commodi maxime cupiditate hic assumenda veniam pariatur quisquam quaerat!</p>
    </div>
  )
}

import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://images.pexels.com/photos/4670306/pexels-photo-4670306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur vel ipsa mollitia ad illo iste officiis. Ipsa sit vitae eum.</p>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
             <li className="sidebarListItem">Life</li>
             <li className="sidebarListItem">Music</li>
             <li className="sidebarListItem">Style</li>
             <li className="sidebarListItem">Sport</li>
             <li className="sidebarListItem">Tech</li>
             <li className="sidebarListItem">Cinema</li>
            
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">

        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
       <i className= "sidebarIcon fa-brands fa-square-twitter"></i>
       <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
       <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>


      </div>

    </div>
  )
}

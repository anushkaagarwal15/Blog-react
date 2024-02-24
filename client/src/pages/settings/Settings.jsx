import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">

        <div className="settingsWrapper">

            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>

                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">

                    </img>

                    <label htmlFor="fileInput">
                    <i className="settingsProfilePictureIcon fa-solid fa-user"></i>

                    </label>

                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>

                <label>Username</label>
                <input type="text" placeholder="Safak" />
                <label>Email</label>
                <input type="email" placeholder="safak@gmail.com" />
                <label>Password</label>
                <input type="password" />

                <button className="settingsSubmit">Update</button>
            </form>
            
        </div>
        <Sidebar/>
      
    </div>
  )
}

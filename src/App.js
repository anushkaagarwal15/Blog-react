import { BrowserRouter, Routes,  Route, Link } from 'react-router-dom';
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";



function App() {
  const user = false; //ie there is no user logined yet 

  // if there is a user it doesnt make sense to go to the register page
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
        <Route path="/write" element={user ? <Write/> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;

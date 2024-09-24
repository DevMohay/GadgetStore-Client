import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./components/Home";
import OtherLayout from "./Layout/OtherLayout";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import Apple from "./components/Phones/Apple";
import Samsung from "./components/Phones/Samsung";
import Xiaome from "./components/Phones/Xiaome";
import Realme from "./components/Phones/Realme";
import Oppo from "./components/Phones/Oppo";
import Vivo from "./components/Phones/Vivo";
import Tecno from "./components/Phones/Tecno";
import Infinix from "./components/Phones/Infinix";
import Profile from "./components/pages/Profile/Profile";
import ProfileDashboard from "./components/pages/Profile/ProfileDashboard";
import FavouriteGadget from "./components/pages/Profile/FavouriteGadget";
import Admin from "./components/pages/AdminDashboard/Admin";
import LikedPosts from "./components/pages/Profile/LikedPosts";
import AllProducts from "./components/pages/AdminDashboard/AllProducts";
import AddProducts from "./components/pages/AdminDashboard/AddProducts";
import AllBlogs from "./components/pages/AdminDashboard/AllBlogs";
import AddBlogs from "./components/pages/AdminDashboard/AddBlogs";
import AddProductsCatagories from "./components/pages/AdminDashboard/AddProductsCatagories";
import AddPhones from "./components/pages/AdminDashboard/AddPhones";
import AddWatch from "./components/pages/AdminDashboard/AddWatch";
import AddHeadphone from "./components/pages/AdminDashboard/AddHeadphone";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="/samsung" element={<Samsung />} />
            <Route path="/xiaome" element={<Xiaome />} />
            <Route path="/realme" element={<Realme />} />
            <Route path="/oppo" element={<Oppo />} />
            <Route path="/vivo" element={<Vivo />} />
            <Route path="/tecno" element={<Tecno />} />
            <Route path="/infinix" element={<Infinix />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileDashboard />} />
              <Route
                path="/profile/favourite-gadgets"
                element={<FavouriteGadget />}
              />
              <Route path="/profile/liked-posts" element={<LikedPosts />} />
            </Route>
          </Route>
          <Route element={<OtherLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<AllProducts />} />
              <Route index element={<AllProducts />} />
              <Route path="/admin/add-products" element={<AddProducts />}>
                <Route index element={<AddPhones />} />

                <Route
                  path="/admin/add-products/watch"
                  element={<AddWatch />}
                />
                <Route
                  path="/admin/add-products/headphone"
                  element={<AddHeadphone />}
                />
              </Route>
              <Route path="/admin/all-blogs" element={<AllBlogs />} />
              <Route path="/admin/add-blogs" element={<AddBlogs />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

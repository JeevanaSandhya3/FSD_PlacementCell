import React, { useEffect, useState } from "react";
import Navbar from "/Users/gadejeevanasandhya/Desktop/fsd 2/client/src/components/Navbar.jsx";
import Profile from "./Profile";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState("My Profile");
  const router = useLocation();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (router.state === null) {
      navigate("/");
    }
    setLoad(true);
  }, [navigate, router.state]);
  return (
    <section className="container">
      {load && (
        <>
          <Navbar />
          <ul className="flex justify-evenly items-center gap-10 w-[85%] mx-auto my-8">
            <li
              className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                selectedMenu === "My Profile"
                  ? "border-b-2 pb-2 border-blue-500 bg-blue-100 rounded-sm"
                  : "bg-blue-500 text-white hover:bg-blue-600 border-b-2 border-blue-500"
              }`}
              onClick={() => setSelectedMenu("My Profile")}
            >
              My Profile
            </li>
          </ul>
          <>
            {selectedMenu === "My Profile" && <Profile />}
          </>
        </>
      )}
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Home;

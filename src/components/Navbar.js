import React from "react";
import { Link } from "react-router-dom";
import { profileLogo } from "../Images";
import { useDispatch } from "react-redux";
import { clearStore } from "../features/User/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearStore("Logout Successfull!"));
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
          <span className="text-xl font-bold">Rideally</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="mr-4 text-neutral-300 hover:bg-neutral-300 px-2 py-1 rounded-md hover:text-gray-800 border-neutral-300  font-semibold bg-gray-800 border ">
            Home
          </Link>
          <Link
            to="/booking"
            className="mr-4 text-neutral-300 hover:bg-neutral-300 px-2 py-1 rounded-md hover:text-gray-800 border-neutral-300  font-semibold bg-gray-800 border ">
            Bookings
          </Link>
          <button
            className="mr-4 hover:text-neutral-300 bg-neutral-300 px-2 py-1 rounded-md text-gray-800 hover:border-neutral-300  hover:bg-gray-800 border font-semibold"
            onClick={handleLogout}>
            Logout
          </button>

          <Link to={"/profile"}>
            <img
              src={profileLogo}
              className="h-10 w-10 bg-gray-300 p-1 rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

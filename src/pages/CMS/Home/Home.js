import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearStore } from "../../../features/User/UserSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const disptch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const handleLogout = () => {
    disptch(clearStore("Logout Successfull!"));
  };
  return (
    <div className="h-full w-full  flex items-center justify-center flex-col ">
      <h1 className="text-xl font-semibold mb-10 mt-5">
        Welcome{" "}
        <Link
          to={"/profile"}
          className="text-2xl text-blue-900 font-extrabold underline">
          {user?.firstName}
        </Link>
      </h1>
      <button
        className="p-4 bg-neutral-200 rounded-md m-auto font-semibold uppercase"
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;

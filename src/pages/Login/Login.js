import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { UserName, Password } from "../../utils/Constants/RideallyConstants";
import { loaderSpin } from "../../Images";
const InitialLoginCredential = {
  username: "",
  password: "",
};

const Login = () => {
  const [loginCredential, setLoginCredential] = useState(
    InitialLoginCredential
  );
  const { user, isLoadingUser } = useSelector((store) => store.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDataChange = (e) => {
    const { name, value } = e?.target;
    setLoginCredential({ ...loginCredential, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginCredential({ username: "kminchelle", password: "0lelplR" });
    const { username, password } = loginCredential;

    //Dummy API
    dispatch(
      loginUser({
        [UserName]: "kminchelle",
        [Password]: "0lelplR",
      })
    );
  };

  useEffect(() => {
    if (user?.id) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="w-full h-screen items-center justify-center flex  bg-neutral-200">
      {/* Laoder */}
      {isLoadingUser && (
        <div className="h-screen w-full fixed top-0 left-0 bg-[#00000015] flex items-center justify-center ">
          <img src={loaderSpin} className="animate-spin h-20 w-20 " />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-1/3 text-center py-10 shadow-lg bg-white rounded-xl h-[20rem] flex flex-col justify-between items-center min-h-max">
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleDataChange}
          className="p-4 w-11/12 border rounded-md"
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleDataChange}
          required
          className="py-4 px-4 w-11/12 border rounded-md"
        />
        <button type="submit" className="rounded p-4 bg-neutral-200 w-11/12">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

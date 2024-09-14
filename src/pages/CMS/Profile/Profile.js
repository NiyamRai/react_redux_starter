import React from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="flex min-h-full w-full items-center justify-center flex-col gap-4 bg-neutral-50">
      <h1 className="text-2xl font-semibold tracking-widest mt-8 uppercase">
        Profile
      </h1>
      <ProfileCard userData={user} />
    </div>
  );
};

export default Profile;

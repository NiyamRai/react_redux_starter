import React from "react";

const ProfileCard = ({ userData }) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg bg-white p-2 rounded-2xl ">
      <img className="w-full" src={userData?.image} alt="Profile" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">
          {userData?.firstName + " " + userData?.lastName}
        </div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize">
          {userData?.email}
        </span>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
          risus at nisi ultrices, vel convallis nulla vehicula.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 capitalize">
          {userData?.gender}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {"#" + userData?.username}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;

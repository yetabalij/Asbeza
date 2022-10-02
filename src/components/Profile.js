import React from "react";
import Navbar from "./Navbar";
import Background from "./../assets/background.jpg";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:w-[50%] w-[80%] mx-auto mt-5">
        <div>
          <h1 className="mb-4 text-3xl font-medium">My Account</h1>
          <div className="bg-gray-100 py-4 pl-4 flex items-center">
            <img
              src={Background}
              alt="background"
              className="h-[6rem] w-[6rem] rounded-full drop-shadow-md"
            />
            <p className="ml-5 text-xl font-medium">Ermias Tsegu</p>
          </div>
        </div>
        <div className="bg-gray-100 mt-3 p-4">
          <p className="mb-4 text-xl font-medium">Contact Details</p>
          <p>First Name: Ermias</p>
          <p>Last Name: Tsegu</p>
          <p>Email: yetabalij@gmail.com</p>
          <p>P.O.Box: 54146</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

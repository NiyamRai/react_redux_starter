import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center px-10">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="mb-2 font-semibold text-xl ">Contact Us</p>
          <p>#569/4, 2nd Floor, 24th Main, 7th Cross Rd, 1st Sector,</p>
          <p>HSR Layout, Bengaluru, Karnataka 560102</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="text-center w-f">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex justify-center md:justify-start mt-2">
            <Link to="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Rideally. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

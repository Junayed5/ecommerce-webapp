import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { Context } from "../App";

const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { cart } = useContext(Context);
  const useSignOut = () => {
    signOut(auth).then(() => navigate("/login"));
  };

  return (
    <nav className="bg-white shadow-md w-full py-4">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/home" className="text-2xl font-bold text-gray-800">
            <img src="Logo.png" alt="" />
          </Link>
        </div>

        {/* Menu Items (hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Products
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Categories
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Custom
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Blogs
          </a>
        </div>

        {/* Cart and User Profile */}
        <div className="flex items-center space-x-6 relative">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="text-[#323232] hover:text-gray-800 relative"
          >
            <FaShoppingCart size={24} />
            <p className="size-4 bg-[#323232] text-white text-xs flex justify-center rounded-full absolute top-3 -right-1">
              {cart?.length}
            </p>
          </Link>

          {/* User Profile Icon */}
          <button
            onClick={() => setClick(!click)}
            className="text-gray-600 hover:text-gray-800"
          >
            <MdAccountCircle size={28} />
          </button>
          {click && (
            <button
              onClick={useSignOut}
              className="absolute h-10 w-20 bg-gray-300 rounded-md top-10 right-1"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      <div className="md:hidden flex justify-center">
        <div className="flex space-x-6 py-2">
          <a
            href="#home"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Products
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Custom
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold"
          >
            Blogs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

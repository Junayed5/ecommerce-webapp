import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full py-4">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-gray-800">
           <img src="Logo.png" alt="" />
          </a>
        </div>

        {/* Menu Items (hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Products
          </a>
          <a href="#services" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Categories
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Custom
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Blogs
          </a>
        </div>

        {/* Cart and User Profile */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <a href="#cart" className="text-gray-600 hover:text-gray-800">
            <FaShoppingCart size={24} />
          </a>

          {/* User Profile Icon */}
          <a href="#profile" className="text-gray-600 hover:text-gray-800">
            <MdAccountCircle size={28} />
          </a>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      <div className="md:hidden flex justify-center">
        <div className="flex space-x-6 py-2">
          <a href="#home" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Products
          </a>
          <a href="#services" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Custom
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-md hover:bg-[#f8f8f8] font-semibold">
            Blogs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

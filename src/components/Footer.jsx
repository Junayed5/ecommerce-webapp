import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pt-20 pb-28">
        <img src="Logo (2).png" alt="" />
        <div className="flex-none md:flex gap-x-[120px]">
          <div>
            <h3 className="text-xl font-semibold text-white ">About Us</h3>
            <ul className="text-xl text-[#81859f] leading-loose mt-7">
              <li>Master Plan</li>
              <li>Jobs</li>
              <li>Invest</li>
              <li>Pressroom</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white ">Explore EEVE</h3>
            <ul className="text-xl text-[#81859f] leading-loose mt-7">
              <li>Unlock my Robot Power</li>
              <li>Starlight</li>
              <li>Robot Platform</li>
              <li>EEVE Roadmap</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Community & Support
            </h3>
            <ul className="text-xl text-[#81859f] leading-loose mt-7">
              <li>Willow X Community</li>
              <li>Developer & Maker Access</li>
              <li>Special Cases</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="max-w-7xl mx-auto border-gray-400"/>

      <div className="max-w-7xl mx-auto py-10 flex justify-between">
        <div className="flex gap-3">
          <LuFacebook className="text-white size-5" />
          <CiInstagram className="text-white size-5" />
          <BsTwitterX className="text-white size-5" />
          <SlSocialLinkedin className="text-white size-5" />
        </div>

        <div className="text-[#81859f] text-xl flex-none md:flex md:gap-6">
          <p>March22 Recap</p>
          <p>Privacy Policy</p>
          <p>General Terms</p>
          <p>Contact</p>
        </div>
        <div>
          <p className="text-[#81859f]">United States (English)</p>
        </div>
      </div>

      <div>
        <p className="text-xl text-[#323544] text-center">
          EEVE &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

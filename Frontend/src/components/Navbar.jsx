import React, { useState } from "react";
import { assets, logo } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between  font-medium relative">
      <Link to="/">
        <img src={assets.weblogo} alt="logo" className="w-36" />
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
        <NavLink to="/brands" className="flex flex-col items-center gap-1">
          <p>BRAND</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
      </ul>
      {/* Icons */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <Link to="/login">
            <img src={logo.profile} alt="" className="w-6 cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={logo.cart} className="w-6 min-w-6" alt="" />
          {/* <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]"></p> */}
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={logo.menu}
          className="w-6 cursor-pointer sm:hidden"
        />
      </div>
      {/* Mobile Menu */}
      {visible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div
            className={`fixed top-0 right-0 h-full w-4/5 bg-white transition-transform transform ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 border-b cursor-pointer"
            >
              <img src={logo.back} className="h-11 rotate-180" />
            </div>
            <div className="flex flex-col text-gray-600">
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/collection"
              >
                COLLECTION
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/brands"
              >
                Brand
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-4 pl-6 border-b"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

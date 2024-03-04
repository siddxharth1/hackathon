import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import img from '../assets/download.png'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="p-7 py-5 flex justify-between items-center shadow-lg ">
      <img className="h-16" src={img} alt="YumBites" />
      <ul className="flex gap-6  font-semibold text-base text-gray-500">
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
        <NavLink to="/notes" className=" hover:text-blue-600">
          Notes
        </NavLink>
        <NavLink to="/pyp" className=" hover:text-blue-600">
          Previous Year Paper
        </NavLink>
      </ul>

      <div>
        <NavLink to="/profile/account" className="text-sky-700 font-semibold mr-4">Hello, {'user'}</NavLink>
        {isLoggedIn ? (
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            // onClick={() => logoutBtnHandler()}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
          >
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default Header

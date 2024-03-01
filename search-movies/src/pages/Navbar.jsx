import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='bg-black text-white w-full h-11 flex items-center shadow-xl'>
            <ul className='w-full text-lg font-serif flex items-center justify-center gap-10'>
                <li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/admin"}>
                        Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
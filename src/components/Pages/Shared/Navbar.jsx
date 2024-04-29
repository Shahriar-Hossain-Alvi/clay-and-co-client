import { Link, NavLink } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut();
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArtsCrafts">All Art & Craft</NavLink></li>
        <li><NavLink to="/addCraft">Add Craft item</NavLink></li>
        <li><NavLink to="/myArtsCrafts"> My Art & Craft</NavLink></li>

    </>

    return (
        <div>
            <div id="menuBar" className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 bg-secondaryColor text-white">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Clay & Co.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div >
                                <a id="clickable">
                                    <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                                </a>
                                <Tooltip className="space-y-2" anchorSelect="#clickable" clickable>
                                    <h4 className="text-center text-lg font-medium">Name: <span className="font-bold text-primaryColor">
                                        {user.displayName}
                                    </span></h4>
                                    <button onClick={handleLogOut} className="btn btn-block btn-error text-white font-semibold font-rubic">Log Out</button>
                                </Tooltip>
                            </div>
                            :
                            <div className="flex gap-2">
                                <Link to="/login">
                                    <button className="btn bg-primaryColor text-white font-semibold font-rubic hover:bg-white hover:text-secondaryColor hover:border-primaryColor">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn bg-primaryColor text-white font-semibold font-rubic hover:bg-white hover:text-secondaryColor hover:border-primaryColor">
                                        Register
                                    </button>
                                </Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
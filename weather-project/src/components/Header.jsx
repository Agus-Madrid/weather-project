import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    return (
        <header className="absolute header w-full top-0 z-40 flex justify-center">
            <div className="bg-[#13161bec] p-6 w-3/4">
                <div className="flex justify-start">
                    <h1 className="text-white text-2xl ml-10">Weather</h1>
                </div>
                <div>
                    <nav>
                        <ul className="flex justify-center gap-4 ">
                            <li>
                                <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" className="text-white hover:text-gray-400">About</Link>
                            </li>
                            <li>
                                <Link to="/Contact" className="text-white hover:text-gray-400">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
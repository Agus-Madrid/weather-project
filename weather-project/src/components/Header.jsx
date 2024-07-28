import React from "react";

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
                                <a href="/" className="text-white hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-white hover:text-gray-400">Info</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
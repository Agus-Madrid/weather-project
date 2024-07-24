import React from "react";

export const Header = () => {

    return (
        <header className="header w-full bg-slate-400">
            <div className="flex justify-center">
                <h1 className="text-white text-2xl font-bold">Weather App</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex justify-center">
                        <li className="mr-4">
                            <a href="/" className="text-white hover:text-gray-400">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-white hover:text-gray-400">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
import React from "react";

export const Button = ({ text, onClick, typeOfButton }) => {

    const renderButton = () => {
        switch(typeOfButton) {
            case 'info':
                return (
                    <button onClick={onClick} className="bt-info w-1/4 bg-[#2561bd] text-white border-4 border-[#2561bd] border-opacity-100 rounded p-2 hover:bg-[transparent]transition-all">
                        {text}
                    </button>
                );
                break;
            case 'secondary':
                return (
                    <button onClick={onClick} className="btn bg-[#31363F] text-white rounded-lg p-2 hover:bg-[#222831]">
                        {text}
                    </button>
                );
                break;
            case 'us':
                return (
                    <button onClick={onClick} className="bt-us w-1/4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        {text}
                    </button>
                );
                break;
            default:
                return (
                    <button onClick={onClick} className="btn bg-[#222831] text-white rounded-lg p-2 hover:bg-[#31363F]">
                        {text}
                    </button>
                );
        }
    
    }

    return (
        renderButton()
    );
}
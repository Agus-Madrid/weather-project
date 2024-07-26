import React from "react";

export const Button = ({ text, onClick, typeOfButton }) => {

    const renderButton = () => {
        switch(typeOfButton) {
            case 'info':
                return (
                    <button onClick={onClick} className="w-1/4 bg-[#2561bd] text-white border-4 border-[#2561bd] border-opacity-100 rounded-xl p-2 hover:bg-[transparent] font-bold transition-all">
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
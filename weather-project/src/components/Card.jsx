import React from 'react';

export const Card = ({ title, description }) => {
    return (
        <div className="card card-actual-temp w-5/6 bg-white rounded-lg">
            <div className="flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg text-xl">
                {title}
            </div>
            <div className="card-content flex flex-col justify-center pl-4 rounded-b-lg">
                <h2>{description}</h2>
            </div>
        </div>
    );
    }
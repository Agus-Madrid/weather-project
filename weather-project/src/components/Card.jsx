import React from 'react';

export const Card = ({ title, description, temperature, typeOfCard }) => {
    return (
        <>
            {typeOfCard === 'main_card' ?
                <div className="card card-actual-temp w-full bg-[#222831] rounded-lg h-[16rem] text-white">
                    <div className="flex justify-center bg-black bg-opacity-20 rounded-t-lg text-xl py-2 text-white font-bold">
                        {title}
                    </div>
                    <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                        <h2>{description}</h2>
                        <p>{temperature} </p>
                    </div>
                </div>
                :
                <div className="card card-actual-temp w-full bg-[#31363F] rounded-lg h-[20rem] text-white">
                    <div className="flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg text-xl py-2">
                        {title}
                    </div>
                    <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                        <h2>{description}</h2>
                        <p>{temperature} </p>
                    </div>
                </div>  
            }
        </>
    );
}

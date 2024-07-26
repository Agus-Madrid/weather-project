import React from 'react';

export const Card = ({ title, description, temperature, typeOfClassname,  }) => {
    return (
        <div className={typeOfClassname}>
            <div className="flex justify-center bg-opacity-45 bg-slate-800 rounded-t-lg text-xl">
                {title}
            </div>
           <div className='card-content flex flex-col justify-center pl-4 rounded-b-lg'>  
                <h2>{description}</h2>
                <p>{temperature} </p>
            </div>
        </div>   
    );
    } 
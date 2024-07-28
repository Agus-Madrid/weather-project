import React from 'react';
import { Button } from './Button';

export const Banner = () => {
    const background = 'https://wallpaperbat.com/img/8617980-cloudy-photo-download-the-best-free.jpg';
    return (
        <div className='relative flex justify-center'>
            <div className="banner w-3/4 bg-[#222831] p-16 h-[60vh] flex gap-20 flex-col justify-end items-center bg-center rounded-b-xl" 
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: '100%',
                }}>

                <div className="flex justify-center flex-col gap-0 text-center relative p-4">
                    <h1 className="text-white text-6xl z-10 p-0 font-bold">Weather - Web</h1>
                    <h1 className="text-white text-6xl z-10 opacity-20 p-0 font-bold" style={{
                            rotate:'180deg' ,
                            transform: 'scale(-1, 1)'}}>Weather - Web</h1>
                    <p className='text-white z-10 italic pt-4'>We are your trustable and favourite weather web.</p>
                    <div className='inside-card absolute top-[77%] left-0 w-full h-2 bg-black opacity-45 rounded-xl p-4'/>
                </div>

                <div className='w-2/3 flex justify-center gap-4 z-10 pt-4 text-white'>
                        <p className='text-center'>Made by</p>
                        <Button text={'Rodrigo'} typeOfButton={'us'}/>
                        <p>&</p>
                        <Button text={'Agustin'} typeOfButton={'us'}/>

                    </div>
                <div className='inside-card absolute top-0 w-3/4 h-full bg-black opacity-45 rounded-b-xl'/>
            </div>
        </div>
    );
}

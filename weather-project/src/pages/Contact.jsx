// src/pages/Contact.jsx
import React from 'react';
import { Banner } from '../components/Banner';

export const Contact = () => {
  return (
    <>
      <Banner title={"Contact"} />
      <main className='w-3/4 flex flex-col items-center mt-4 h-auto m-auto text-center'>
        <h1 className='text-4xl font-bold mb-6'>Contact Page</h1>
        <p className='text-lg mb-4'>Feel free to reach out to us on GitHub or LinkedIn!</p>
        
        <div className='flex flex-col items-center space-y-8'>
          <div className='flex flex-col items-center space-y-4'>
            <h2 className='text-2xl font-semibold'>Rodrigo Aguillon</h2>
            <a href="https://github.com/rodriaguillon" className='flex items-center space-x-2 text-blue-500 hover:text-blue-700'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.334-1.756-1.334-1.756-1.091-.745.084-.729.084-.729 1.205.084 1.838 1.238 1.838 1.238 1.071 1.834 2.809 1.304 3.494.996.107-.775.419-1.304.761-1.604-2.665-.303-5.466-1.333-5.466-5.932 0-1.311.469-2.383 1.235-3.223-.124-.303-.536-1.526.117-3.176 0 0 1.007-.322 3.3 1.23a11.486 11.486 0 013.003-.404 11.43 11.43 0 013.003.404c2.292-1.552 3.3-1.23 3.3-1.23.654 1.65.242 2.873.118 3.176.768.84 1.235 1.912 1.235 3.223 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.102.814 2.222v3.293c0 .32.192.694.799.575C20.565 21.798 24 17.302 24 12 24 5.373 18.627 0 12 0z'/></svg>
              <span className='text-xl'>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-aguillon-245798200/" className='flex items-center space-x-2 text-blue-500 hover:text-blue-700'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452H16.89v-5.569c0-1.327-.024-3.037-1.853-3.037-1.854 0-2.137 1.445-2.137 2.942v5.664h-3.554V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.369 4.266 5.455v6.286h-.001zM5.337 7.433c-1.144 0-2.069-.928-2.069-2.073 0-1.144.924-2.069 2.069-2.069 1.144 0 2.073.924 2.073 2.069 0 1.144-.928 2.073-2.073 2.073zm1.77 13.02H3.565V9h3.541v11.453zm14.005-20.452H2.657C1.19 0 0 1.19 0 2.657v18.687C0 22.81 1.19 24 2.657 24h18.687C22.81 24 24 22.81 24 21.343V2.657C24 1.19 22.81 0 21.343 0z'/></svg>
              <span className='text-xl'>LinkedIn</span>
            </a>
          </div>
          
          <div className='flex flex-col items-center space-y-4'>
            <h2 className='text-2xl font-semibold'>Agustin Madrid</h2>
            <a href="https://github.com/Agus-Madrid" className='flex items-center space-x-2 text-blue-500 hover:text-blue-700'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.334-1.756-1.334-1.756-1.091-.745.084-.729.084-.729 1.205.084 1.838 1.238 1.838 1.238 1.071 1.834 2.809 1.304 3.494.996.107-.775.419-1.304.761-1.604-2.665-.303-5.466-1.333-5.466-5.932 0-1.311.469-2.383 1.235-3.223-.124-.303-.536-1.526.117-3.176 0 0 1.007-.322 3.3 1.23a11.486 11.486 0 013.003-.404 11.43 11.43 0 013.003.404c2.292-1.552 3.3-1.23 3.3-1.23.654 1.65.242 2.873.118 3.176.768.84 1.235 1.912 1.235 3.223 0 4.61-2.804 5.624-5.475 5.92.43.372.814 1.102.814 2.222v3.293c0 .32.192.694.799.575C20.565 21.798 24 17.302 24 12 24 5.373 18.627 0 12 0z'/></svg>
              <span className='text-xl'>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/veremo" className='flex items-center space-x-2 text-blue-500 hover:text-blue-700'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452H16.89v-5.569c0-1.327-.024-3.037-1.853-3.037-1.854 0-2.137 1.445-2.137 2.942v5.664h-3.554V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.369 4.266 5.455v6.286h-.001zM5.337 7.433c-1.144 0-2.069-.928-2.069-2.073 0-1.144.924-2.069 2.069-2.069 1.144 0 2.073.924 2.073 2.069 0 1.144-.928 2.073-2.073 2.073zm1.77 13.02H3.565V9h3.541v11.453zm14.005-20.452H2.657C1.19 0 0 1.19 0 2.657v18.687C0 22.81 1.19 24 2.657 24h18.687C22.81 24 24 22.81 24 21.343V2.657C24 1.19 22.81 0 21.343 0z'/></svg>
              <span className='text-xl'>LinkedIn</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

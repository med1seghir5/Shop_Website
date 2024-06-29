import React from 'react';

function First() {
  return (
    <div>
      
      <div className='flex flex-row justify-center space-x-32 pt-32'>
        <div className='flex flex-col space-y-6'>
          <div className='font-sans font-bold text-7xl text-[#898989]'>
            Best Place to Buy
          </div>
          <div className='font-sans font-bold text-7xl text-[#1677FF]'>
            Everything
          </div>
          <div className='font-sans font-semibold text-[#3f3f3f]'>
            At MsShop, you can shop for all your favorite brands.<br/>Laptops, Phones, Accessories.
          </div>
          <button className='bg-[#1677FF] rounded-lg w-32 h-9 text-[#ffff]'>
            Shopping Now
          </button>
        </div>
        <div>
          <img src='./Picture/Vector.svg' alt='Logo'/>
        </div>
      </div>
    </div>
  );
}

export default First;


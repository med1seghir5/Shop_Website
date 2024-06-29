import React from 'react'

function FirstPage() {
  return (
    <div>
      <div className='flex flex-col font-sans font-semibold p-3 sm:p-4 sm:flex-row sm:items-center sm:justify-between sm:ml-16'>
        <img src='./Picture/MsShop.svg' alt='MsShop logo' className='w-40 sm:w-36' />
            <div className='flex-col space-y-2 hidden sm:flex-row sm:block sm:justify-center sm:items-center sm:space-y-0 sm:space-x-10 sm:font-manrope'>
                 <button>Products</button>
                 <button>Sold</button>
                <button>Home</button>
                <button>Categories</button>
                <button>About</button>
            </div>
            <div className='flex flex-row space-x-10 justify-center items-center sm:flex-row sm:block sm:space-x-5'>
                <button>Login</button>
                <button className='bg-[#1677FF] rounded-lg w-32 sm:w-20 h-7 text-[#ffff] hover:shadow-gray-600 shadow-md'>
                    Register
                </button>
            </div>     
      </div>

      <div className='flex flex-row justify-center space-x-32 pt-32'>
        <div className='flex flex-col space-y-6'>
            <div className='font-sans font-bold text-7xl text-[#898989]'>
                Best Place to Buy
            </div>
            <div className='font-sans font-bold text-7xl text-[#1677FF]'>
                Everything
            </div>
            <div className='font-sans font-semibold text-[#3f3f3f]'>At MsShop, you can shop for all your favorite brands.<br/>Laptops, Phones, Accessories.</div>
            <button className='bg-[#1677FF] rounded-lg w-32 h-9 text-[#ffff]'>Shopping Now</button>
        </div>
        <div>
            <img src='./Picture/Vector.svg' alt='Logo'/>
        </div>
      </div>
    </div>
  )
}

export default FirstPage

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  const [Promo, setPromo] = useState([]);
  useEffect(()=>{
    axios.get('./PromotionApi.json')
    .then((res) => {
      setPromo(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.scrollIntoView({
      behavior:'smooth',
    })
  };
  const inputRef1 = useRef();
  const focusInpu1 = () => {
    inputRef1.current.scrollIntoView({
      behavior:'smooth',
    })
  };
  const inputRef2 = useRef();
  const focusInput2 = () => {
    inputRef2.current.scrollIntoView({
      behavior:'smooth',
    })
  };
  const inputRef3 = useRef();
  const focusInput3 = () => {
    inputRef3.current.scrollIntoView({
      behavior:'smooth',
    })
  };
  return (
    <div ref={inputRef3}>
      <div className='flex flex-col items-center font-sans font-semibold p-3 sm:p-4 sm:flex-row sm:items-center sm:justify-between sm:ml-16'>
        <img src='./Picture/MsShop.svg' alt='MsShop logo' className='w-40 pb-5 sm:w-36' />
            <div className='flex-col space-y-2 hidden sm:flex-row sm:block sm:justify-around sm:items-center sm:space-y-0 sm:space-x-10 sm:font-manrope'>
                <button>Products</button>
                <button onClick={focusInput2}>Sold</button>
                <button onClick={focusInput3}>Home</button>
                <button onClick={focusInpu1}>Categories</button>
                <button onClick={focusInput}>About</button>
            </div>
            <div className='flex flex-row space-x-10 justify-center items-center sm:flex-row sm:block sm:space-x-5'>
                <button>Login</button>
                <button className='bg-[#1677FF] rounded-lg w-32 sm:w-20 h-7 text-[#ffff] hover:shadow-gray-600 shadow-md'>
                    Register
                </button>
            </div>     
      </div>

      <div className='flex flex-col items-center space-y-5 pt-20 md:flex md:flex-row md:space-x-32 md:pt-32 '>
        <div className='flex flex-col items-center space-y-6 text-center md:flex md:flex-col md:items-start md:pl-8 md:text-left '>
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
            <img src='./Picture/Vector.svg' className='h-56 md:h-80' alt='Logo'/>
        </div>
      </div>

        <div className='flex flex-col items-center text-center font-sans font-bold text-2xl text-[#898989] pb-24 pt-36' ref={inputRef}>
          <img src='./Picture/MsShop.svg' className='h-16 md:h-24' alt='Logo' />
          <div>
            MsShop is an online store dealing with all product<br/>
            MsShop provide cheap, high quality, products to<br/>
            customers.
          </div>
        </div>

        <div className='flex flex-col space-y-10 p-10' ref={inputRef1}>
          <div className='font-sans font-bold text-2xl'>- Browse Categories of The Store :</div>
          <div className='flex flex-col items-center space-y-5 md:flex md:flex-row md:justify-around md:space-x-5'>
            <div>
            <div className='text-white font-bold text-5xl absolute ml-14 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-20 md:mt-26'>Laptops</div>
            <Link to="/Product1.jsx"><button><img src='./Picture/Laptops.jpg' className='shadow-drop-1-center h-56 rounded-xl shadow-lg shadow-slate-500' alt='logo' /></button></Link>
            </div>
            <div>
              <div className='text-white font-bold text-5xl absolute ml-14 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-20 md:mt-20'>Phones</div>
              <Link to="/Product2.jsx"><button><img src='./Picture/Phones.jpg' className='shadow-drop-1-center h-60 rounded-xl shadow-lg shadow-slate-500' alt='logo' /></button></Link>
            </div>
            <div>
              <div className='text-white font-bold text-5xl absolute ml-7 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-20 md:mt-20'>Consoles</div>
              <Link to="/Product5.jsx"><button><img src='./Picture/Consoles.jpg' className='shadow-drop-1-center h-56 rounded-xl shadow-lg shadow-slate-500' alt='logo' /></button></Link>
            </div>
          </div>
          <div className='flex flex-col items-center space-y-5 md:flex md:flex-row md:justify-center md:items-center md:space-x-24'>
            <div>
              <div className='text-white font-bold text-5xl absolute ml-8 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-16 md:mt-24'>Softwares</div>
              <Link to="/Product4.jsx"><button><img src='./Picture/Softwar.jpg' className='shadow-drop-1-center h-56 rounded-xl shadow-lg shadow-slate-500' alt='logo'/></button></Link>
            </div>
            <div>
            <div className='text-white font-bold text-5xl absolute ml-12 mt-20 md:text-white md:font-bold md:text-5xl md:absolute md:ml-20 md:mt-24'>Monitors</div>
            <Link to="/Producr3.jsx"><button><img src='./Picture/Monitors.jpg' className='shadow-drop-1-center h-56 rounded-xl shadow-lg shadow-slate-500' alt='logo' /></button></Link>
            </div>
          </div>
        </div>

        <div>
            <div className='font-sans font-bold text-2xl p-10'>
            - Our promotions this
              Month :
            </div>
            <div className='flex flex-col items-center font-bold pb-28 md:flex md:flex-row md:justify-around md:items-center md:font-bold md:pb-28' ref={inputRef2}>
              {
                Promo.map((item) => (
                  <div key={item.id} className='flex flex-col items-center'>
                    <img src={item.image} className='h-52 rounded-lg' alt='Promotions' />
                    <p>{item.name}</p>
                    <s className='text-[#E03E3E]'>{item.OldPrice} DA</s>
                    <p className='text-[#61f55c]'>{item.NewPrice} DA</p>
                  </div>
                ))
              }
            </div>
        </div>
        
      <div className='flex flex-col justify-center items-center pt-5 space-y-12 border-t-4 md:flex md:flex-row md:justify-around md:items-center md:pb-3 text-[#898989] md:border-t-4 md:border-[#898989]'>
        <div className='flex flex-col'>
          <div className='flex flex-col space-x-5 text-center text-xl'>
            Why choose 
            <img src='./Picture/MsShop.svg' className='h-12' alt='MsShop' />
          </div>
          <div className='flex flex-row space-x-3'>
          <div className='flex flex-col items-center '>
            <img src='./Picture/Icon (1).svg' alt='icon'/>
            <div>Trasted platforme</div>
          </div>
          <div className='flex flex-col items-center '>
            <img src='./Picture/Icon (2).svg' alt='icon'/>
            <div>Free Delivery</div>
          </div>
          <div className='flex flex-col items-center '>
            <img src='./Picture/Icon.svg' alt='icon'/>
            <div>Here For You</div>
          </div>
          </div>
        </div>


          <div className='flex flex-col items-center justify-center pb-6 text-[#898989]'>
            <div className='font-sans font-bold text-center text-2xl'>Contact Us :</div>
            <div className='text-center'>
                <div>- Algeria</div>
                <div>- Batna,Batna</div>
                <div>- Support@MsShop.com</div>
                <div>- +213654389244</div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default LandingPage
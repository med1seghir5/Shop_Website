import React, { useEffect, useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import axios from 'axios';


function Product2() {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productCounts, setProductCounts] = useState({});
    const [Cancel, setCancel] = useState({})
  
    useEffect(() => {
      axios.get('./Product3Api.json')
        .then((res) => {
          setProducts(res.data);
          setFilteredProducts(res.data);
          const counts = {};
          res.data.forEach(product => {
            counts[product.id] = 0;
          });
          setProductCounts(counts);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const handleChange = (value) => {
      setInput(value);
      const filtered = products.filter((product) => 
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
  
    const handleClick = (id) => {
      setProductCounts(prevCounts => ({
        ...prevCounts,
        [id]: prevCounts[id] + 1
      }));
    }
  
    return (
      <div>
        <div className='flex flex-col items-center font-sans font-semibold p-10 sm:p-4 sm:flex-row sm:items-center sm:justify-between sm:ml-16'>
          <img src='./Picture/MsShop.svg' alt='MsShop logo' className='w-40 pb-5 sm:w-36' />
          <div className='flex flex-col space-y-2 sm:flex-row justify-center items-center sm:space-y-0 sm:space-x-10 font-sans font-semibold'>
            <label className='flex flex-nowrap space-x-1'>
              <input
                placeholder='Search for a product'
                id='text'
                type='text'
                className='text-center bg-slate-100 rounded-lg shadow-xl w-72 md:w-96'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <button><img src='./Picture/Union.svg' alt='logo' /></button>
            </label>
          </div>
          <div className='flex flex-row space-x-10 hidden justify-center items-center sm:flex-row sm:block sm:space-x-5'>
            <button>Login</button>
            <button className='bg-[#1677FF] rounded-lg w-32 sm:w-20 h-7 text-[#ffff] hover:shadow-gray-600 shadow-md'>
              Register
            </button>
          </div>     
        </div>
        <div className='flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:space-x-12 md:items-center'>
          {
            filteredProducts.map((item) => (
              <div key={item.id} className='flex flex-col items-center justify-center font-bold text-center space-y-2 pt-36'>
                <img src={item.image} className='h-72 shadow-lg shadow-slate-500 rounded-lg md:h-96 md:shadow-lg md:shadow-slate-500 md:rounded-lg' alt={item.name} />
                <div>{item.name}</div>
                <div className='text-gray-500 font-bold text-center'>{item.details}</div>
                <div>{item.price} DA</div>
                <div>
                  <button onClick={() => handleClick(item.id)}>
                    <img src='./Picture/Button.svg' alt='Button'/>
                  </button>
                </div>
                <FaShoppingBasket/>
                {productCounts[item.id]}
              </div>
            ))
          }
        </div>
  
        <div className='flex flex-row justify-center space-x-5 font-semibold pt-14 pb-20'>
          <button className='bg-green-500 w-28 rounded-lg'>Confirm</button>
          <button className='bg-red-500 w-28 rounded-lg'>Cancel</button>
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
    );
  }

export default Product2
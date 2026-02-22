import React, { useEffect, useState } from 'react'

const ProductCard = ({ProductPic ,brandname ,productName ,price}) => {
const [isAdded, setIsAdded] = useState(false)

 useEffect(()=>{
  console.log("i dont even know what im doing ://")
},[])

 return (
    <div className='relative bg-white rounded-3xl shadow-lg '>
        <img className="w-100 h-100 rounded-3xl" src={ProductPic} alt="picture" />
        <div className='p-4 h-50'>
            <span className='bg-blue-200 border-2 border-white p-1 text-blue-500 rounded-lg '>{brandname}</span>    
            <img className='absolute top-103 right-5 h-10 w-10' src="../public/heart-svgrepo-com.svg" alt="like" />
            <h2 className='text-3xl font-bold text-gray-600 mt-3'>{productName}</h2>
            <h3 className='text-2xl font-bold text-gray-900 mt-1'>${price}</h3>
            
            {!isAdded ? (
            <button onClick={() => { setIsAdded(true);setbuycount(basketcount + 1)}} className='w-full h-11 mt-3 rounded-3xl bg-blue-700 text-white'>Add to basket</button>
             ) : (
             <button onClick={() => setIsAdded(false)} className='w-full h-11 mt-3 rounded-3xl bg-green-700 text-white'>Added</button>
              )}
            </div>
    </div>
  )
}
export default ProductCard

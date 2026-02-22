import React from 'react'

const ProductCard = (product) => {
  const ProductCard = [id ,ProductPic ,brandname ,productName ,price ] = product;
  return (
    <div className='relative bg-white rounded-3xl shadow-lg '>
        <img className="w-100 h-100 rounded-3xl" src={ProductPic} alt="picture" />
        {/* ../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg */}
        <div className='p-4 h-50'>
            <span className='bg-blue-200 border-2 border-white p-1 text-blue-500 rounded-lg '>{brandname}</span>    
            <img className='absolute top-103 right-5 h-10 w-10' src="../public/heart-svgrepo-com.svg" alt="like" />
            <h2 className='text-3xl font-bold text-gray-600 mt-3'>{productName}</h2>
            <h3 className='text-2xl font-bold text-gray-900 mt-1'>${price}</h3>
            <button className='w-full h-11 mt-3 rounded-3xl bg-blue-700 text-white'>Buy now</button>
        </div>
    </div>
  )
}
export default ProductCard

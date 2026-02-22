import React from 'react'

const BuyBasket = ({items}) => {
  return (
  <>
  <div className="relative bg-blue-500 rounded-2xl p-3 border-2 ">
    <img className=" w-13 " src="../public/basket-svgrepo-com.svg" alt="" />
    <span className='absolute border w-fit h-fit bg-red-400 pl-1 pr-1 rounded-full right-0 -bottom-1 '>
        {items}
    </span>
  </div>
  </>
  )
}

export default BuyBasket

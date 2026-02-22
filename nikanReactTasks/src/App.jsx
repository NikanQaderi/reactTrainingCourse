import React, { useState } from 'react'
import ProductCard from './myComponents/ProductCard'
import BuyBasket from './myComponents/BuyBasket'
const App = () => {
  const Cards = [
    {id:1,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nikan",productName:"catt",price:100},
    {id:2,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nik",productName:"dogg",price:10},
    {id:3,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nikn",productName:"mouse",price:1},
    {id:4,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nikaa",productName:"parrot",price:40}    
  ]
  const [basketcount ,setbuycount] = useState(0)
  return (
  <>
  <div className="flex items-center justify-center h-screen gap-6">
    <div className='w-fit h-fit absolute top-10 left-10'>
    <BuyBasket count={basketcount}/>
    </div>
    
    {Cards.map(product => (
      <ProductCard key={product.id}
      ProductPic={product.productPic}
      brandname={product.brandname}
      productName={product.productName}
      price={product.price} 
      setbuycount={setbuycount} 
      />
    ))}

  </div>
  </>
  )
}

export default App

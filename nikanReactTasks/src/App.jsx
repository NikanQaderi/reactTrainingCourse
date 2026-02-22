import React from 'react'
import ProductCard from './myComponents/ProductCard'
const App = () => {
  const Cards = [
    {id:1,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nikan",productName:"catt",price:100},
    {id:2,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nik",productName:"dogg",price:10},
    {id:3,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nikn",productName:"mouse",price:1},
    {id:4,productPic:"../src/assets/projectIMG/28865312d7a8125ac0f1111986a90aa5.jpg",brandname:"nikaa",productName:"parrot",price:40}    
  ]
  return (
  <>
  <div className="flex items-center justify-center h-screen">
<ProductCard/>
  </div>
  </>
  )
}

export default App

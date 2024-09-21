import React, { useEffect } from 'react'
import MySlider from './MySlider'
import ProductSection from './ProductSection'

const Home = () => {
    useEffect(()=>{
       window.scrollTo({top:0})
    },[])
  return (
    <div>
    <MySlider/>
    <ProductSection/>
    </div>
  )
}

export default Home

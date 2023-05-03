import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'

export default function Products() {
  const [products, setProducts] = useState([])
  
  async function getAllProducts()
  {
      let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/products`)
      setProducts(data.data)
  }
  useEffect(() => {
    getAllProducts() 
  }, [])
  return (
    <>
    <div className="container my-3">
      {products.length>0?<div className="row">
        <Product products={products}/>
      </div>:<div class="text-center mt-5 text-success">
  <div class="spinner-grow" style={{height: '3rem',width: '3rem'}} role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>}
    </div>
    </>
  )
}

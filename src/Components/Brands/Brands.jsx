import axios from 'axios'
import React, { useEffect,useState } from 'react'

export default function Brands() {

  const [brands,setBrands]=useState([])

  async function getAllBrands()
  {
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    console.log(data.data);
    setBrands(data.data)
  }

  useEffect(() => {
    
  getAllBrands()
   
  }, [])
  
  return (
    <>
    {brands.length<=0?<div class="text-center mt-5 text-success">
  <div class="spinner-grow" style={{height: '3rem',width: '3rem'}} role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>: <div className="container">
      <div className="row align-items-center text-center">
<div className="col-md-3">
  <div className="brand mt-3">
    <h3>Our Brands</h3>
    <p className='text-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, unde.</p>
  </div>
</div>
{brands.map((brand)=>{
  return <div key={brand._id} className="col-md-3">
  <div className="brand text-center">
    <img src={brand.image} alt="" className='w-100' />
    <h6>{brand.name}</h6>
  </div>
</div>
})}


      </div>
    </div>}
   
    </>
  )
}

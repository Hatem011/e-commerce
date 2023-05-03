import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

export default function Categories() {
  let {categoryList}=useContext(StoreContext)
  return (
   <div className="container mt-4">
    <div className="row">
    {categoryList.map((item)=>{
        return <div className='col-md-3' key={item._id}>
        <img src={item.image} className='w-100 img-categorySlider mb-3' height={250} alt="" />
        <h6>{item.name}</h6>
        </div>
    })}
      </div>
   </div>
   
   
  )
}

import React, { useContext } from 'react'
import Slider from 'react-slick';
import "./CategorySlider.css"
import { StoreContext } from '../../Context/StoreContext';
export default function CategorySlider() {
  let {categoryList}=useContext(StoreContext)
    // const [categories, setCategories] = useState([])
    // async function getAllCategories()
    // {
    //     let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
    //     setCategories(data.data)
    // }
    // useEffect(() => {
    //   getAllCategories() 
    // }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:false
      };
  return (
    <div className='mt-5 container'>
        <h3>Shop popular category</h3>
      <Slider {...settings} >
    {categoryList.map((item)=>{
        return <div key={item._id}>
        <img src={item.image} className='w-100 img-categorySlider' height={250} alt="" />
        <h6>{item.name}</h6>
        </div>
    })}
    </Slider>
        
    </div>
  )
}

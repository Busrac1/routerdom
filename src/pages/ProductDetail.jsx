import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"

const ProductDetail = () => {
    const [detail,setDetail]=useState(null);
    // useparamss url den parametleri almka için kullanırıl
    const  {productId}= useParams();

    // yöndeririken erişmek için
    const location= useLocation;
    console.log(location)
    useEffect(()=>{
        axios.get(`http://localhost:3060/books/${productId}`)
        .then((res)=>setDetail(res.data))
        .catch((err)=> {}) ;
    }, [])
    if(!detail){
        return 'Yükleniyor'
    }
  return (
    <div
    className="row justify-content--center align-items-center"
     style={{heiight:'85vh'}} >
   <div className="col-md-6 d-flex  justify-content--center align-items-center ">
    <img 
    className="img-fluid roundede shadow"
    src={detail.img} alt="" />
   </div>
   <div className="col-md-6">
    <h1>{detail.title}</h1>
    <p>
      <span className="badge bg-danger me-3">Yazar:</span> {detail.autor}
      </p>
      <p>
      <span className="badge bg-danger me-2">Açıklama:</span> {detail.description}
      </p>
      <p>
      <span className="badge bg-danger me-2">Yıl:</span> {detail.year}
      </p>
      <p>
      <span className="badge bg-danger me-2">page:</span> {detail.page}
      </p>
      <p>
        {location.state.total} kitap arasından {detail.id} sırasındaki ürün
      </p>
   </div>
    </div>
  )
}

export default ProductDetail;
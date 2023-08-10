import axios from "axios"
import { useState } from "react";
import { useEffect } from "react"
import Card from "../companents/Card";

const Products = () => {
  const[books,setBooks]= useState(null);
  // ekrana basılma olayını
  useEffect(()=> {
    axios
    .get("http://localhost:3060/books")
    .then((res)=> setBooks(res.data))
    // consolo.log kitapların olduğu yere data o yüzdeno
    .catch((err)=> {});
    // hata sayfasına yönledirir
  }, []);
if(books===null) return 'Yükleniyor..'
  return (
    <div>
      <h3 className="mx-5 mt-3">{books.length} kitap bulundu</h3>

      <div id="card-container">
        {books.map((book)=> (
        <Card book={book} total={books.length} />       
        ))}
      </div>
    </div>
  )
}

export default Products;


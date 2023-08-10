import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./companents/Header";
import Products from "./pages/Products";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/productDetail";
import UndefinedPage from "./pages/UndefinedPage";


function App() {

  return(
    // yönlendirme,sayfadan sayfaya geçiş
   <BrowserRouter>
   {/* bütün sayfalarda ortak kullanılır. */}
       <Header/>
       {/* hangi sayfanın ne zamna ne zamna ekrana basacağını */}
      <Routes>
        <Route path= '/' element={<MainPage/>} />
        <Route path= '/ürünler' element={<Products/>} />
        {/* dinamik root tanımlama- yani değişken 
        isteidğinbir ismi ver :İSİM*/}
        <Route path= '/ürün/:productId' element={<ProductDetail/>} />
       

       {/* tanımsız fayda yönlernirse */}
       {/* * anlamı bütün yanim bütün hepsi dışında bunu bas */}
       <Route path ="*"  element={<UndefinedPage/>}/>
       </Routes>
   </BrowserRouter>
  )
}

export default App

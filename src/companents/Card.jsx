import { Link } from "react-router-dom"

const Card = ({book, total}) => {
  
  return (
    <div className="card shadow rounded p-1">
      <img className="rounded" src={book.image} alt="" />
      <div className="card-body">
        <h4>{book.title}</h4>
        <p>Yazar:{book.autor}</p>
      </div>
      <Link 
      className="btn btn-primary"
       to={`/ürün/${book.id}`} 
       state={{total}}
       >
        Detay gör</Link>
    </div>
  )
}

export default Card

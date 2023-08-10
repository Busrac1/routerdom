import { Link } from "react-router-dom"

const Header = () => {
  return (
    // seç ctrl+shift+l yaz hepsini seçer
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Kitap kurdu</Link>

      <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>
      </button>
      <div 
      className="collapse navbar-collapse" 
      id="navbarNav">
        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
            Anasayfa
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ürünler">
              Ürünler
              </Link>
          </li>
        
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Header


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AddMovie from './components/addmovie';
import Bookings from './components/bookings copy';
import Contact from './components/contact';
import User from './components/user';
function Menubar(){
    return(
      <BrowserRouter>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"} >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/movies"}>Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/bookings"}>Bookings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/user"}>User</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/contact"}>Contact</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
            </nav>
            <Routes>
              <Route path="/" element={<AddMovie></AddMovie>}></Route>
              <Route path="/bookings" element={<Bookings></Bookings>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
    );
}
export default Menubar;
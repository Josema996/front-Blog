import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import ViewBlog from './blog/ViewBlog'; // Asegúrate de importar ViewBlog
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <h1 className='navbar-title'>Bienvenida a tu Blog <i class="fa-regular fa-clipboard"></i></h1>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/showblogs' element={<CompShowBlogs />} />
          <Route path='/create' element={<CompCreateBlog />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
          <Route path='/view/:id' element={<ViewBlog />} /> {/* Agrega la ruta para ViewBlog */}
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
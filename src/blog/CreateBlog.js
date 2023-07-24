import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../blogcss/CreateBlog.css'; 


const URI = 'http://localhost:8000/blogs/';

const CompCreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dni, setDni] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [examenFisico, setExamenFisico] = useState('');
  const [pedidos, setPedidos] = useState('');
  const [obraSocial, setObraSocial] = useState('');
  const [numeroObra, setNumeroObra] = useState('');

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      dni,
      edad,
      telefono,
      direccion,
      examenFisico,
      pedidos,
      obraSocial,
      numeroObra,
    };

    try {
      await axios.post(URI, blogData);
      navigate('/showblogs');
    } catch (error) {
      console.error('Error al guardar la nota:', error);
    }
  };

  const handleVolverClick = () => {
    navigate('/showblogs');
    window.scrollTo(0, 0); // Posicionar la ventana en la parte superior de la página
  };

  return (
  <div className="page-container">
    <div className="container">
      <div className="form-container">
        <h3>Crear Nota</h3>
        <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Nombre y Apellido</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Evaluacion Clinica</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">DNI</label>
            <input
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Examen Físico</label>
            <input
              value={examenFisico}
              onChange={(e) => setExamenFisico(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pedidos</label>
            <input
              value={pedidos}
              onChange={(e) => setPedidos(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Obra Social</label>
            <input
              value={obraSocial}
              onChange={(e) => setObraSocial(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Número de Obra</label>
            <input
              value={numeroObra}
              onChange={(e) => setNumeroObra(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
            <button className="btn btn-secondary" onClick={handleVolverClick}>
          Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default CompCreateBlog;
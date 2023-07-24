import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../blogcss/EditBlog.css'; // Importa el nuevo archivo CSS

const URI = 'http://localhost:8000/blogs';

const CompEditBlog = () => {
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
  const { id } = useParams();

  // Procedimiento para actualizar el blog
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, {
      title: title,
      content: content,
      dni: dni,
      edad: edad,
      telefono: telefono,
      direccion: direccion,
      examenFisico: examenFisico,
      pedidos: pedidos,
      obraSocial: obraSocial,
      numeroObra: numeroObra,
    });
    navigate('/showblogs');
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
      setDni(res.data.dni);
      setEdad(res.data.edad);
      setTelefono(res.data.telefono);
      setDireccion(res.data.direccion);
      setExamenFisico(res.data.examenFisico);
      setPedidos(res.data.pedidos);
      setObraSocial(res.data.obraSocial);
      setNumeroObra(res.data.numeroObra);
    } catch (error) {
      console.error('Error al obtener el blog:', error);
    }
  };

  const handleVolverClick = () => {
    navigate('/showblogs');
    window.scrollTo(0, 0); // Posicionar la ventana en la parte superior de la página
  };

  return (
    <div className="page-container">
      <div className="form-container2">
        <h3>Editar Nota</h3>
        <form onSubmit={update}>
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
  );
};

export default CompEditBlog;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../blogcss/ShowBlogs.css'

const URI = 'http://localhost:8000/blogs';

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  // Procedimiento para mostrar los blogs
  const getBlogs = async () => {
    try {
      const res = await axios.get(URI);
      setBlogs(res.data);
    } catch (error) {
      console.error('Error al obtener los blogs:', error);
    }
  };

  // Procedimiento para eliminar un blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${URI}/${id}`);
      getBlogs();
    } catch (error) {
      console.error('Error al eliminar el blog:', error);
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to='/create' className='btn btn-primary mt-2 mb-2'>
            <i className='fa-regular fa-note-sticky'></i> Crear Nota
          </Link>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>Nombre y Apellido</th>
                <th>Evaluacion Clinica</th>
                <th>DNI</th>
                <th>Teléfono</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>{blog.dni}</td>
                  <td>{blog.telefono}</td>
                  <td>
                    <Link to={`/view/${blog.id}`} className='btn btn-info'>
                      <FontAwesomeIcon icon={faEye} /> Ver Detalles
                    </Link>
                    <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>
                      <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEdit } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import '../blogcss/ViewBlog.css';
import '../blogcss/ViewPdf.css'; // Importa el nuevo archivo CSS para el PDF

const URI = 'http://localhost:8000/blogs';

const ViewBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getBlog();
  }, []);

  // Procedimiento para obtener el blog por ID
  const getBlog = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setBlog(res.data);
    } catch (error) {
      console.error('Error al obtener el blog:', error);
      setBlog(null); // Establecer blog a null si no se encuentra
    }
  };

  // Componente para el contenido del PDF
  const MyDocument = ({ blog }) => (
    <Document>
      <Page>
        <View style={styles.container}>
          <Text style={styles.title}>Paciente: {blog.title}</Text>
          <Text style={styles.content}>{blog.content}</Text>
          <Text style={styles.info}>DNI: {blog.dni}</Text>
          <Text style={styles.info}>Teléfono: {blog.telefono}</Text>
          <Text style={styles.info}>Obra Social: {blog.obraSocial}</Text>
          <Text style={styles.info}>Número de Obra Social: {blog.numeroObraSocial}</Text>
          <Text style={styles.info}>Pedidos: {blog.pedidos}</Text>
          <Text style={styles.info}>Examen Físico: {blog.examenFisico}</Text>
          <View style={styles.signatureContainer}>
          <Text>Firma de la doctora______________</Text>
        </View>
        </View>
      </Page>
    </Document>
  );

  // Estilos para el PDF
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      textAlign: 'center', // Centra el contenido en el PDF
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#009688', // Cambia el color del título a verde
    },
    content: {
      fontSize: 14,
      marginBottom: 5,
      color: '#333', // Cambia el color del texto a negro
    },
    info: {
      fontSize: 12,
      marginBottom: 3,
      color: '#555', // Cambia el color de la información a gris oscuro
    },
    signatureContainer: {
      marginTop: 20,
      borderTop: '2px dotted #555',
      paddingTop: 10,
      textAlign: 'center',
      fontStyle: 'italic',
      fontSize: 14,
      color: '#555',
    },
  });

  // Función para manejar la edición del blog
  const handleEdit = () => {
    // Aquí puedes implementar la lógica para editar el blog
    console.log('Editar blog:', blog);
  };

  // Verificar si el blog no se encuentra
  if (!blog) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container'>
      <div className='content-container'>
        {/* Contenido del blog */}
        <h2>{blog.title}</h2>
        <p>Evaluacion Clinica:  {blog.content}</p>
        <p>DNI: {blog.dni}</p>
        <p>Teléfono: {blog.telefono}</p>
        <p>Obra Social: {blog.obraSocial}</p>
        <p>Número de Obra Social: {blog.numeroObraSocial}</p>
        <p>Pedidos: {blog.pedidos}</p>
        <p>Examen Físico: {blog.examenFisico}</p>

        <div className='button-container'>
          {/* Botón para editar el blog */}
          <Link to={`/edit/${blog.id}`} className='btn btn-info'>
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Link>
          {/* Botón para descargar el PDF */}
          <PDFDownloadLink document={<MyDocument blog={blog} />} fileName={`${blog.title}.pdf`} className='btn btn-primary'>
            {({ blob, url, loading, error }) => (
              <>
                <FontAwesomeIcon icon={faFilePdf} /> {loading ? 'Generando PDF...' : 'Descargar PDF'}
              </>
            )}
          </PDFDownloadLink>
          {/* Botón para volver a la pantalla de ShowBlogs */}
          <Link to='/showblogs' className='btn btn-secondary'>
            Volver a la lista
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
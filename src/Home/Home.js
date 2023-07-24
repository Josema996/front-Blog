import React from 'react';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales
    if (username === '12345' && password === '54321') {
      // Redirigir al usuario a /showblogs
      navigate('/showblogs');
    } else {
      // Mostrar mensaje de error o realizar otras acciones si las credenciales son incorrectas
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="home-container">
      <h2><i class="fa-solid fa-house"></i> Iniciar Sesión</h2>
      <div className="form-group">
        <label htmlFor="username"><i class="fa-solid fa-user"></i> Usuario:</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password"><i class="fa-solid fa-lock"></i> Contraseña:</label>
        <input type="password" id="password" />
      </div>
      <button className="btn-login" onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Home;

import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


// 👉 Constante con la contraseña correcta
const PASSWORD_CORRECTA = 'shadow';

function VerificarPassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const verificarPassword = (e) => {
    e.preventDefault();
    if (password.trim() === PASSWORD_CORRECTA) {
      setError('');
      navigate('/Administrador'); // 👉 redirección
    } else {
      setError('Contraseña incorrecta');
    }
  };


  return (
    <form onSubmit={verificarPassword}>
      <div style={styles.container}>
        <h2>Ingresar contraseña:</h2>


        <input
          type="text"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />


        {error && <p style={styles.error}>{error}</p>}


        <button type="submit" style={styles.button}>
          Verificar
        </button>
      </div>
    </form>
  );
}

export default VerificarPassword

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    color: '#fff'
  },
  input: {
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '8px',
    border: 'none',
    width: '220px'
  },
  button: {
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#22c55e',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  error: {
    color: '#ef4444',
    marginBottom: '12px'
  }
};
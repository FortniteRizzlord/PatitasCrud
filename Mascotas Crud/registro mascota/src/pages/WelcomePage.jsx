import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      <h1>Bienvenido a Amigos Peludos 🐾</h1>
      <p>Redirigiendo al panel de mascotas...</p>
      <button onClick={() => navigate('/home')}>Ir ahora</button>
    </div>
  );
}

export default WelcomePage;

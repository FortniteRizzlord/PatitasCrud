function Card({ mascota, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{mascota.mascota}</h3>
      <p>Especie: {mascota.especie}</p>
      <p>Raza: {mascota.raza}</p>
      <p>Edad: {mascota.edad}</p>
      <p>Propietario: {mascota.propietario}</p>
      <button onClick={() => onEdit(mascota)}>Editar</button>
      <button onClick={() => onDelete(mascota.id)}>Eliminar</button>
    </div>
  );
}

export default Card;

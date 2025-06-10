import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useFetchData } from '../hooks/useFetchData';
import { useSaveData } from '../hooks/useSaveData';
import { useDeleteData } from '../hooks/useDeleteData';

function HomePage() {
  const { data: mascotas, fetchData } = useFetchData();
  const { saveData } = useSaveData(fetchData);
  const { deleteData } = useDeleteData(fetchData);

  const [editingId, setEditingId] = useState(null);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (formData) => {
    await saveData(formData, editingId);
    reset();
    setEditingId(null);
  };

  const handleEdit = (mascota) => {
    setEditingId(mascota.id);
    setValue('mascota', mascota.mascota);
    setValue('especie', mascota.especie);
    setValue('raza', mascota.raza);
    setValue('edad', mascota.edad);
    setValue('propietario', mascota.propietario);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción no se puede deshacer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      await deleteData(id);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registro de Mascotas 🐾</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-xl">
        <input placeholder="Nombre de la mascota" {...register('mascota', { required: true })} />
        <input placeholder="Especie" {...register('especie', { required: true })} />
        <input placeholder="Raza" {...register('raza', { required: true })} />
        <input type="number" placeholder="Edad" {...register('edad', { required: true, min: 0 })} />
        <input placeholder="Nombre del dueño" {...register('propietario', { required: true })} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? 'Actualizar' : 'Registrar'}
        </button>
      </form>

      {Object.keys(errors).length > 0 && (
        <p className="text-red-500 mt-2">Todos los campos son obligatorios</p>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Mascotas Registradas</h2>
        <ul className="space-y-2">
          {mascotas.map((m) => (
            <li key={m.id} className="border p-4 flex justify-between items-center">
              <div>
                <strong>{m.mascota}</strong> - {m.especie}, {m.raza}, {m.edad} años<br />
                Dueño: {m.propietario}
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(m)} className="bg-yellow-400 px-3 py-1 rounded">Editar</button>
                <button onClick={() => handleDelete(m.id)} className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;

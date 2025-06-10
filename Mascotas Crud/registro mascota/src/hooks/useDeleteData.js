import Swal from 'sweetalert2';

export function useDeleteData(fetchData) {
  const deleteData = async (id) => {
    try {
      await fetch(`https://retoolapi.dev/IO7y9L/mascotas/${id}`, {
        method: 'DELETE',
      });
      Swal.fire('Eliminado', 'La mascota fue eliminada correctamente', 'success');
      fetchData();
    } catch (error) {
      Swal.fire('Error', 'No se pudo eliminar la mascota', 'error');
    }
  };

  return { deleteData };
}

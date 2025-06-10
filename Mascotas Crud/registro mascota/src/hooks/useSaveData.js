import Swal from 'sweetalert2';

export function useSaveData(fetchData) {
  const saveData = async (formData, editingId = null) => {
    const url = editingId
      ? `https://retoolapi.dev/IO7y9L/mascotas/${editingId}`
      : 'https://retoolapi.dev/IO7y9L/mascotas';

    const method = editingId ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      Swal.fire('Éxito', `Mascota ${editingId ? 'actualizada' : 'registrada'} correctamente`, 'success');
      fetchData();
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar la información', 'error');
    }
  };

  return { saveData };
}

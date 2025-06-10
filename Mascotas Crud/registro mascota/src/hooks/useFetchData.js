import { useState } from 'react';

export function useFetchData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://retoolapi.dev/IO7y9L/mascotas');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  };

  return { data, fetchData };
}

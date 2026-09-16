const API_KEY = 'c63624f425cf9849325c58b58cf6f4b4'; // Reemplaza con tu API Key de OpenWeatherMap

// Coordenadas copiadas de Google Maps (Ejemplo: Santa Cruz de la Sierra)
const LATITUD = -17.6766510;
const LONGITUD = -63.1922302;

// Consulta por coordenadas
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUD}&lon=${LONGITUD}&units=metric&lang=es&appid=${API_KEY}`;

async function obtenerClima() {
  const contenedor = document.getElementById('clima');

  try {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
      throw new Error('No se pudo obtener la información del clima');
    }

    const datos = await respuesta.json();

    // Inserción de los datos en el div
    contenedor.innerHTML = `
      <h2>${datos.name}, ${datos.sys.country}</h2>
      <div class="temperatura">${Math.round(datos.main.temp)}°C</div>
      <div class="descripcion">${datos.weather[0].description}</div>
      <div class="detalles">Humedad: ${datos.main.humidity}%</div>
    `;
  } catch (error) {
    contenedor.innerHTML = `<p style="color: red;">Error al cargar el clima.</p>`;
    console.error('Error:', error);
  }
}

obtenerClima();

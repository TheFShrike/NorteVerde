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
      <div class="temperatura">Temperatura: ${Math.round(datos.main.temp)}°C; Humedad: ${datos.main.humidity}%</div>
    `;
  } catch (error) {
    contenedor.innerHTML = `<p style="color: red;">Error al cargar el clima.</p>`;
    console.error('Error:', error);
  }
}

obtenerClima();


//Botón Inicio
// 1. Obtener las referencias a los elementos del DOM
  const botonInicio = document.getElementById('inicio');
  const divContenido = document.getElementById('contenido');

  // 2. Agregar el evento click al botón
  botonInicio.addEventListener('click', () => {
    // Primero: Borramos el contenido anterior y escribimos "Hola Mundo"
    divContenido.textContent = 'Hola Mundo';
    
    // Segundo: Cambiamos el display para hacerlo visible
    divContenido.style.display = 'block';
});

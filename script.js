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


// --- SECCIÓN DEL FONDO DINÁMICO ---

// 1. Configuración de la ruta y las imágenes
const rutaCarpeta = './Portada/'; 
const imagenes = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];

let indiceActual = 0;
const contenedorFondo = document.getElementById('fondoimg');

// 2. Función que cambia la imagen de fondo
function cambiarFondo() {
    if (!contenedorFondo || imagenes.length === 0) return;

    // CORREGIDO: Se cambió 'Portada' por 'rutaCarpeta'
    const urlImagen = `url('${rutaCarpeta}${imagenes[indiceActual]}')`;
    contenedorFondo.style.backgroundImage = urlImagen;

    // Avanza al siguiente índice (y vuelve a cero al llegar al final)
    indiceActual = (indiceActual + 1) % imagenes.length;
}

// 3. Iniciar el ciclo del fondo
cambiarFondo(); // Muestra la primera foto de inmediato
setInterval(cambiarFondo, 5000); // Cambia cada 5 segundos

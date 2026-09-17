// 1. Configuración de la ruta y las imágenes
const rutaCarpeta = './Portada/'; 
const imagenes = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];

let indiceActual = 0;
const contenedorFondo = document.getElementById('fondoimg');

// 2. Función que cambia la imagen de fondo
function cambiarFondo() {
    if (imagenes.length === 0) return;

    // Construye la ruta completa
    const urlImagen = `url('${Portada}${imagenes[indiceActual]}')`;
    contenedorFondo.style.backgroundImage = urlImagen;

    // Avanza al siguiente índice (y vuelve a cero al llegar al final)
    indiceActual = (indiceActual + 1) % imagenes.length;
}

// 3. Iniciar el ciclo
cambiarFondo(); // Muestra la primera foto de inmediato
setInterval(cambiarFondo, 5000); // Cambia cada 5 segundos

// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================
let seguidores = 305; // Cambia este valor por tu número actual de seguidores
const meta = 1000;     // Número de seguidores para llenar completamente la barra
let animacionActiva = true; // Cambia a false si quieres desactivar las animaciones

// ==========================================
// FUNCIONES PRINCIPALES
// ==========================================

// Actualiza todos los elementos visuales
function actualizarProyecto() {
  actualizarContador();
  actualizarBarra();
  actualizarGranos();
}

// Animación del contador numérico
function actualizarContador() {
  // Granos de arroz
  document.getElementById('riceGrainCounter').textContent = seguidores.toLocaleString();

  // Paquetes de arroz (entero, sin decimales)
  const paquetes = Math.floor(seguidores / 1000);
  document.getElementById('ricePacketCounter').textContent = paquetes;

  // Objetivo siguiente
  document.getElementById('nextGoal').textContent = `and counting! Next goal: ${seguidores + 1} grains`;
  
  if (animacionActiva) {
    counter.classList.add('counter-update');
    setTimeout(() => counter.classList.remove('counter-update'), 500);
  }
}

// Animación de la barra de progreso
function actualizarBarra() {
  const fill = document.getElementById('riceFill');
  const left = Math.floor(seguidores / 1000) * 1000;
  const right = left + 1000;

  document.getElementById('leftLabel').textContent = left.toLocaleString();
  document.getElementById('rightLabel').textContent = right.toLocaleString();

  const porcentaje = ((seguidores - left) / 1000) * 100;
  fill.style.width = `${Math.min(Math.max(porcentaje, 0), 100)}%`;
}

// Efecto visual de granos de arroz (opcional)
function actualizarGranos() {
  const grains = document.getElementById('riceGrains');
  const left = Math.floor(seguidores / 1000) * 1000;
  const porcentaje = Math.min(Math.max((seguidores - left) / 1000, 0), 1);
  grains.style.opacity = `${0.3 + (porcentaje * 0.7)}`;
}

// ==========================================
// INICIALIZACIÓN Y EJEMPLO
// ==========================================

// Ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  actualizarProyecto();
  
  // SIMULACIÓN (borrar en producción)
  setInterval(() => {
    if (seguidores < 1500) { // Límite para la demo
      seguidores += 1;
      actualizarProyecto();
    }
  }, 2000);
});



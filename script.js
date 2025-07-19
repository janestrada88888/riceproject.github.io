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
  const counter = document.getElementById('riceGrainCounter');
  // Granos de arroz
  counter.textContent = seguidores.toLocaleString();

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
  // Calcula el rango dinámico
  const left = Math.floor(seguidores / meta) * meta;
  const right = left + meta;

  // Actualiza los labels de los extremos
  document.getElementById('leftLabel').textContent = left.toLocaleString();
  document.getElementById('rightLabel').textContent = right.toLocaleString();

  // Porcentaje de relleno respecto al rango actual
  const porcentaje = ((seguidores - left) / meta) * 100;
  fill.style.width = `${Math.min(Math.max(porcentaje, 0), 100)}%`;
}

// Efecto visual de granos de arroz (opcional)
function actualizarGranos() {
  const grains = document.getElementById('riceGrains');
  const porcentaje = seguidores / meta;
  grains.style.opacity = `${0.3 + (porcentaje * 0.7)}`;
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

// Ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  actualizarProyecto();
  
  // Para pruebas puedes descomentar esto:
  /*
  setInterval(() => {
    if (seguidores < 1500) {
      seguidores += 1;
      actualizarProyecto();
    }
  }, 2000);
  */
});
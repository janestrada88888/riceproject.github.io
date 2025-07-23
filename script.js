// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================
let seguidores = 2500; // ← SOLO cambia este número cuando actualices
const meta = 1000;     // Número de seguidores para llenar completamente la barra
let animacionActiva = true; // Cambia a false si quieres desactivar las animaciones

// ==========================================
// SISTEMA AUTOMÁTICO DE MEMORIA Y CONTADOR
// ==========================================

// Función para obtener datos guardados (seguidores + número de cargas)
function obtenerDatosGuardados() {
  const urlHash = window.location.hash;
  if (urlHash && urlHash.startsWith('#data=')) {
    try {
      const dataString = urlHash.replace('#data=', '');
      const data = JSON.parse(decodeURIComponent(dataString));
      console.log('📁 Datos encontrados:', data);
      return data;
    } catch (e) {
      console.log('❌ Error leyendo datos guardados');
    }
  }
  console.log('📁 No hay datos guardados (primera vez)');
  return null; // null = primera vez
}

// Función para guardar datos (seguidores + contador de cargas)
function guardarDatos(numeroCargas) {
  const data = {
    seguidores: seguidores,
    cargas: numeroCargas,
    fecha: new Date().toISOString()
  };
  window.location.hash = `data=${encodeURIComponent(JSON.stringify(data))}`;
  console.log('💾 Datos guardados:', data);
}

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
  
  // Obtiene los datos guardados
  const datosGuardados = obtenerDatosGuardados();
  
  // Calcula el número de cargas
  let numeroCargas;
  let seguidoresAnteriores = null;
  
  if (datosGuardados === null) {
    // Primera vez
    numeroCargas = 1;
    console.log('🆕 Carga #1 (primera vez)');
  } else {
    // No es primera vez
    numeroCargas = datosGuardados.cargas + 1;
    seguidoresAnteriores = datosGuardados.seguidores;
    console.log(`🔄 Carga #${numeroCargas}`);
    console.log(`📊 Seguidores anteriores: ${seguidoresAnteriores}`);
  }
  
  // Actualiza contenido
  counter.textContent = seguidores.toLocaleString();

  // Paquetes de arroz (entero, sin decimales)
  const paquetes = Math.floor(seguidores / 1000);
  document.getElementById('ricePacketCounter').textContent = paquetes;

  // Objetivo siguiente (incluye número de carga)
  document.getElementById('nextGoal').textContent = `and counting! Next goal: ${seguidores + 1} grains`;
  
  // LÓGICA DEL CONFETI
  if (datosGuardados === null) {
    // PRIMERA VEZ: siempre tira confeti
    console.log('🎉 Carga #1: ¡CONFETI de bienvenida!');
    lanzarConfeti();
  } else if (seguidores > seguidoresAnteriores) {
    // SIGUIENTES VECES: solo si aumentó
    console.log(`🎉 Carga #${numeroCargas}: ¡Aumentó de ${seguidoresAnteriores} a ${seguidores}! ¡CONFETI!`);
    lanzarConfeti();
  } else if (seguidores === seguidoresAnteriores) {
    console.log(`😐 Carga #${numeroCargas}: Mismo número (${seguidores}), sin confeti`);
  } else {
    console.log(`😞 Carga #${numeroCargas}: Bajó de ${seguidoresAnteriores} a ${seguidores}, sin confeti`);
  }
  
  // Guarda los datos actualizados
  guardarDatos(numeroCargas);

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

// Función para lanzar confeti
function lanzarConfeti() {
  const confetti = document.getElementById('confetti');
  confetti.innerHTML = '';
  confetti.style.display = 'block';

  // Crea 80 piezas de confeti
  for (let i = 0; i < 500; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-10px'; // Empieza arriba de la pantalla
    piece.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    piece.style.animationDuration = (2 + Math.random() * 1.5) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    piece.style.width = (8 + Math.random() * 8) + 'px';
    piece.style.height = piece.style.width;
    piece.style.borderRadius = '50%';
    confetti.appendChild(piece);
  }

  // Oculta el contenedor después de la animación
  setTimeout(() => {
    confetti.style.display = 'none';
  }, 2500);
}

// ==========================================
// FUNCIONES DE UTILIDAD
// ==========================================

// Función para resetear todo (volver a "primera vez")
function empezarDeNuevo() {
  window.location.hash = '';
  console.log('🔄 Reseteado: próxima carga será #1');
  location.reload();
}

// Función para ver estadísticas completas
function verEstadisticas() {
  const datos = obtenerDatosGuardados();
  console.log('=== 📊 ESTADÍSTICAS ===');
  
  if (datos === null) {
    console.log('Cargas realizadas: 0 (será la primera)');
    console.log('Seguidores actuales:', seguidores);
    console.log('Estado: 🆕 PRIMERA VEZ (habrá confeti)');
  } else {
    console.log(`Cargas realizadas: ${datos.cargas}`);
    console.log(`Próxima carga será: #${datos.cargas + 1}`);
    console.log('Seguidores actuales:', seguidores);
    console.log('Seguidores anteriores:', datos.seguidores);
    console.log('Última actualización:', new Date(datos.fecha).toLocaleString());
    
    if (seguidores > datos.seguidores) {
      console.log('Estado: ⬆️ SUBIDA (habrá confeti)');
    } else if (seguidores === datos.seguidores) {
      console.log('Estado: ➡️ IGUAL (sin confeti)');
    } else {
      console.log('Estado: ⬇️ BAJADA (sin confeti)');
    }
  }
  
  return datos;
}

// Función para obtener solo el número de cargas
function obtenerNumeroCargas() {
  const datos = obtenerDatosGuardados();
  const cargas = datos ? datos.cargas : 0;
  console.log(`Total de cargas: ${cargas}`);
  return cargas;
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

// Ejecuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  console.log('=== 🚀 INICIO DE CARGA ===');
  console.log('Seguidores configurados:', seguidores);
  
  // Muestra estadísticas antes de actualizar
  verEstadisticas();
  
  // Actualiza todo (incluyendo confeti si corresponde)
  actualizarProyecto();
  
  console.log('=== ✅ CARGA COMPLETADA ===');
  
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

// Funciones disponibles en consola
window.empezarDeNuevo = empezarDeNuevo;
window.verEstadisticas = verEstadisticas;
window.obtenerNumeroCargas = obtenerNumeroCargas;

// Efecto: resalta el paso al pasar el ratón
document.querySelectorAll('.step').forEach(step => {
  step.addEventListener('mouseenter', () => {
    step.style.transform = 'scale(1.05)';
    step.querySelector('.step-icon').style.backgroundColor = '#F4E285';
  });
  step.addEventListener('mouseleave', () => {
    step.style.transform = 'scale(1)';
    step.querySelector('.step-icon').style.backgroundColor = 'white';
  });
});

document.getElementById('shareProjectBtn').addEventListener('click', function() {
    const shareText = "Join The Rice Grain Project! Each follower = 1 grain of rice. When we reach 1000 grains, we donate a bag of rice to food banks. Small actions create big changes.";
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Rice Grain Project',
            text: shareText,
            url: shareUrl,
        }).catch(err => console.log('Error sharing:', err));
    } else {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank');
    }
});
// Control del menú lateral
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('shifted');
});

// Cierra el menú lateral al hacer clic en cualquier enlace del menú
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.main-content').classList.remove('shifted');
    });
});

document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main-content').classList.toggle('shifted');
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    
    // Abre el sidebar si está cerrado
    if (!sidebar.classList.contains('active')) {
        sidebar.classList.add('active');
        document.querySelector('.main-content').classList.add('shifted');
    }
    
    // Cierra el sidebar al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
            sidebar.classList.remove('active');
            document.querySelector('.main-content').classList.remove('shifted');
        }
    });
});
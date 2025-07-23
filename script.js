// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================
let seguidores = 2500; // ← SOLO cambia este número cuando actualizas
const meta = 1000;     // Número de seguidores para llenar completamente la barra
let animacionActiva = true; // Cambia a false si quieres desactivar las animaciones

// ==========================================
// SISTEMA DE IDIOMAS COMPLETO
// ==========================================

const translations = {
    en: {
        // Header
        welcomeTitle: "Welcome to THE RICE GRAIN PROJECT!",
        welcomeSubtitle: "where every grain matters",
        
        // Counter
        counterTitle: "TOTAL RICE GRAINS COUNT",
        nextGoal: "and counting! Next goal: ${next} grains",
        packetsTitle: "Total rice packets count",
        
        // Sections
        aboutTitle: "1. The Essence of the Project",
        aboutText: "A single grain of rice doesn't feed anyone, but thousands together can fill a plate. This project turns every follower into a grain of rice—when we reach 1,000 grains (followers), we'll donate a bag of rice to food banks. Your individual action may seem small, but it's essential. Without each grain, this project wouldn't exist. We created this initiative to show how solidarity is built through small, seemingly insignificant actions that—when combined—create real, meaningful impact.",
        missionTitle: "2. What drives us",
        missionText: "This project exists to prove two powerful truths: First, that collective action transforms the world - your single click joins thousands to create real change. Second, that helping is shockingly simple - if people won't even follow an account to fight hunger, what will they do? We're testing social responsibility through the easiest possible act: one follow = one grain toward feeding families.",
        joinTitle: "3. How to contribute",
        joinText: "Collaborating is as simple as following our account - a gesture that costs you nothing but makes all the difference. With just one click, you've activated your grain of rice. Now imagine the ripple effect when thousands join in: real rice packages delivered to families in need. This isn't charity; it's community-powered change. Will you let this opportunity pass you by, when all it takes is a simple click to participate? Your grain is ready to join the movement.",
        collabTitle: "4. Collaborations",
        collabText: "Absolutely thrilled to hear your questions, ideas or suggestions for improvement! Let's make this project even better together. Drop us a message on WhatsApp or email, and we'll reply as quickly as possible. Thanks so much!",
        
        // Timeline
        timelineTitle: "How 1 Grain Becomes Real Food",
        step1: "You Follow",
        step1Text: "1 grain added to the counter",
        step2: "Community",
        step2Text: "Every 1,000 grains = 1 rice bag donated",
        step3: "Purchase",
        step3Text: "Rice bought transparently",
        step4: "Delivery",
        step4Text: "To local food banks",
        step5: "Impact",
        step5Text: "Families fed thanks to you",
        
        // Buttons
        joinBtn: "Join as a rice grain",
        shareBtn: "Share the project",
        whatsappBtn: "Contact us via WhatsApp",
        gmailBtn: "Contact us via Gmail",
        helpText: "Help us grow",
        
        // Menu
        menuTitle: "Contents",
        menu1: "1. The Essence",
        menu2: "2. What drives us",
        menu3: "3. How to contribute",
        menu4: "4. Collaborations",
        
        // Share text
        shareText: "Join The Rice Grain Project! Each follower = 1 grain of rice. When we reach 1000 grains, we donate a bag of rice to food banks. Small actions create big changes."
    },
    es: {
        // Header
        welcomeTitle: "¡Bienvenido a THE RICE GRAIN PROJECT!",
        welcomeSubtitle: "donde cada grano cuenta",
        
        // Counter
        counterTitle: "CONTADOR TOTAL DE GRANOS DE ARROZ",
        nextGoal: "¡y contando! Próximo objetivo: ${next} granos",
        packetsTitle: "Contador total de paquetes de arroz",
        
        // Sections
        aboutTitle: "1. La Esencia del Proyecto",
        aboutText: "Un solo grano de arroz no alimenta a nadie, pero miles juntos pueden llenar un plato. Este proyecto convierte cada seguidor en un grano de arroz: cuando alcancemos 1,000 granos (seguidores), donaremos un paquete de arroz a bancos de alimentos. Tu acción individual puede parecer pequeña, pero es esencial. Sin cada grano, este proyecto no existiría. Creamos esta iniciativa para mostrar cómo la solidaridad se construye a través de pequeñas acciones, aparentemente insignificantes, que, al combinarse, crean un impacto real y significativo.",
        missionTitle: "2. Lo que nos impulsa",
        missionText: "Este proyecto existe para demostrar dos verdades poderosas: Primero, que la acción colectiva transforma el mundo: tu simple clic se une a miles para crear un cambio real. Segundo, que ayudar es sorprendentemente simple: si las personas no siguen ni siquiera una cuenta para combatir el hambre, ¿qué estarán dispuestas a hacer? Estamos probando la responsabilidad social a través del acto más simple posible: un seguimiento = un grano para alimentar familias.",
        joinTitle: "3. Cómo contribuir",
        joinText: "Colaborar es tan simple como seguir nuestra cuenta, un gesto que no te cuesta nada pero que marca toda la diferencia. Con un solo clic, has activado tu grano de arroz. Ahora imagina el efecto dominó cuando miles se unan: paquetes reales de arroz entregados a familias necesitadas. Esto no es caridad; es cambio impulsado por la comunidad. ¿Dejarás pasar esta oportunidad, cuando todo lo que se necesita es un simple clic para participar? Tu grano está listo para unirse al movimiento.",
        collabTitle: "4. Colaboraciones",
        collabText: "¡Estamos encantados de escuchar tus preguntas, ideas o sugerencias para mejorar! Hagamos este proyecto aún mejor juntos. Envíanos un mensaje por WhatsApp o correo electrónico, y te responderemos lo antes posible. ¡Muchas gracias!",
        
        // Timeline
        timelineTitle: "Cómo 1 grano se convierte en comida real",
        step1: "Tú sigues",
        step1Text: "1 grano añadido al contador",
        step2: "Comunidad",
        step2Text: "Cada 1,000 granos = 1 paquete de arroz donado",
        step3: "Compra",
        step3Text: "Arroz comprado transparentemente",
        step4: "Entrega",
        step4Text: "A bancos de alimentos locales",
        step5: "Impacto",
        step5Text: "Familias alimentadas gracias a ti",
        
        // Buttons
        joinBtn: "Únete como grano de arroz",
        shareBtn: "Comparte el proyecto",
        whatsappBtn: "Contáctanos por WhatsApp",
        gmailBtn: "Contáctanos por Gmail",
        helpText: "Ayúdanos a crecer",
        
        // Menu
        menuTitle: "Contenidos",
        menu1: "1. La Esencia",
        menu2: "2. Lo que nos impulsa",
        menu3: "3. Cómo contribuir",
        menu4: "4. Colaboraciones",
        
        // Share text
        shareText: "¡Únete al Proyecto Grano de Arroz! Cada seguidor = 1 grano de arroz. Cuando lleguemos a 1000 granos, donamos un paquete de arroz a bancos de alimentos. Pequeñas acciones crean grandes cambios."
    },
    ca: {
        // Header
        welcomeTitle: "Benvingut a THE RICE GRAIN PROJECT!",
        welcomeSubtitle: "on cada gra compta",
        
        // Counter
        counterTitle: "COMPTADOR TOTAL DE GRANS D'ARROS",
        nextGoal: "i comptant! Proper objectiu: ${next} grans",
        packetsTitle: "Comptador total de paquets d'arròs",
        
        // Sections
        aboutTitle: "1. L'Essència del Projecte",
        aboutText: "Un sol gra d'arròs no alimenta ningú, però milers junts poden omplir un plat. Aquest projecte converteix cada seguidor en un gra d'arròs: quan arribem a 1.000 grans (seguidors), donarem un paquet d'arròs a bancs d'aliments. La teva acció individual pot semblar petita, però és essencial. Sense cada gra, aquest projecte no existiria. Vam crear aquesta iniciativa per mostrar com la solidaritat es construeix a través d'accions petites, aparentment insignificants, que, en combinar-se, creen un impacte real i significatiu.",
        missionTitle: "2. El que ens impulsa",
        missionText: "Aquest projecte existeix per demostrar dues veritats poderoses: Primer, que l'acció col·lectiva transforma el món: el teu simple clic s'uneix a milers per crear un canvi real. Segon, que ajudar és sorprenentment simple: si les persones no segueixen ni tan sols un compte per combatre la fam, què estaran disposades a fer? Estem provant la responsabilitat social a través de l'acte més simple possible: un seguiment = un gra per alimentar famílies.",
        joinTitle: "3. Com contribuir",
        joinText: "Col·laborar és tan simple com seguir el nostre compte, un gest que no et costa res però que marca tota la diferència. Amb un sol clic, has activat el teu gra d'arròs. Ara imagina't l'efecte dòmino quan milers s'uneixin: paquets reals d'arròs lliurats a famílies necessitades. Això no és caritat; és canvi impulsat per la comunitat. Deixaràs passar aquesta oportunitat, quan tot el que es necessita és un simple clic per participar? El teu gra està llest per unir-se al moviment.",
        collabTitle: "4. Col·laboracions",
        collabText: "Estem encantats d'escoltar les teves preguntes, idees o suggeriments per millorar! Fem aquest projecte encara millor junts. Envia'ns un missatge per WhatsApp o correu electrònic, i et respondrem el més aviat possible. Moltes gràcies!",
        
        // Timeline
        timelineTitle: "Com 1 gra es converteix en menjar real",
        step1: "Tu segueixes",
        step1Text: "1 gra afegit al comptador",
        step2: "Comunitat",
        step2Text: "Cada 1.000 grans = 1 paquet d'arròs donat",
        step3: "Compra",
        step3Text: "Arròs comprat transparentment",
        step4: "Lliurament",
        step4Text: "A bancs d'aliments locals",
        step5: "Impacte",
        step5Text: "Famílies alimentades gràcies a tu",
        
        // Buttons
        joinBtn: "Uneix-te com a gra d'arròs",
        shareBtn: "Comparteix el projecte",
        whatsappBtn: "Contacta'ns per WhatsApp",
        gmailBtn: "Contacta'ns per Gmail",
        helpText: "Ajuda'ns a créixer",
        
        // Menu
        menuTitle: "Continguts",
        menu1: "1. L'Essència",
        menu2: "2. El que ens impulsa",
        menu3: "3. Com contribuir",
        menu4: "4. Col·laboracions",
        
        // Share text
        shareText: "Uneix-te al Projecte Gra d'Arròs! Cada seguidor = 1 gra d'arròs. Quan arribem a 1000 grans, donem un paquet d'arròs a bancs d'aliments. Petites accions creen grans canvis."
    }
};

// Función para aplicar traducciones
function applyLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;
    
    // Función segura para actualizar elementos
    function safeUpdate(selector, property, value) {
        const element = document.querySelector(selector);
        if (element) {
            if (property === 'innerHTML') {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    }

    // Header
    safeUpdate('h1', 'textContent', langData.welcomeTitle);
    safeUpdate('h2', 'textContent', langData.welcomeSubtitle);
    
    // Counter
    safeUpdate('.main-title', 'textContent', langData.counterTitle);
    safeUpdate('.packets-section h2', 'textContent', langData.packetsTitle);
    safeUpdate('#nextGoal', 'textContent', langData.nextGoal.replace('${next}', seguidores + 1));
    
    // Sections
    safeUpdate('#about h3', 'textContent', langData.aboutTitle);
    safeUpdate('#about p', 'textContent', langData.aboutText);
    safeUpdate('#mission h3', 'textContent', langData.missionTitle);
    safeUpdate('#mission p', 'textContent', langData.missionText);
    safeUpdate('#join h3', 'textContent', langData.joinTitle);
    safeUpdate('#join p', 'textContent', langData.joinText);
    safeUpdate('#ei h3', 'textContent', langData.collabTitle);
    safeUpdate('#ei p', 'textContent', langData.collabText);
    
    // Timeline
    safeUpdate('.rice-journey h2', 'textContent', langData.timelineTitle);
    safeUpdate('[data-step="1"] h3', 'textContent', langData.step1);
    safeUpdate('[data-step="1"] p', 'textContent', langData.step1Text);
    safeUpdate('[data-step="2"] h3', 'textContent', langData.step2);
    safeUpdate('[data-step="2"] p', 'textContent', langData.step2Text);
    safeUpdate('[data-step="3"] h3', 'textContent', langData.step3);
    safeUpdate('[data-step="3"] p', 'textContent', langData.step3Text);
    safeUpdate('[data-step="4"] h3', 'textContent', langData.step4);
    safeUpdate('[data-step="4"] p', 'textContent', langData.step4Text);
    safeUpdate('[data-step="5"] h3', 'textContent', langData.step5);
    safeUpdate('[data-step="5"] p', 'textContent', langData.step5Text);
    
    // Buttons (con comprobación de existencia)
    const instagramBtn = document.querySelector('.instagram-btn .btn-text');
    if (instagramBtn) {
        instagramBtn.innerHTML = `${langData.joinBtn}<br><small>@ricegrain_project</small>`;
    }
    
    const shareBtn = document.querySelector('.share-btn .btn-text');
    if (shareBtn) {
        shareBtn.innerHTML = `${langData.shareBtn}<br><small>${langData.helpText}</small>`;
    }
    
    safeUpdate('.whatsapp-btn .btn-text', 'textContent', langData.whatsappBtn);
    safeUpdate('.gmail-btn .btn-text', 'textContent', langData.gmailBtn);
    
    // Menu
    safeUpdate('.sidebar-content h3', 'textContent', langData.menuTitle);
    const menuItems = document.querySelectorAll('.sidebar-content li a');
    if (menuItems.length >= 4) {
        menuItems[0].textContent = langData.menu1;
        menuItems[1].textContent = langData.menu2;
        menuItems[2].textContent = langData.menu3;
        menuItems[3].textContent = langData.menu4;
    }
    
    // Actualizar el texto para compartir
    window.shareText = langData.shareText;
    
    // Guardar idioma y lanzar confeti
    localStorage.setItem('selectedLanguage', lang);
    lanzarConfeti();
}

// Selector de idioma en el menú lateral
function addLanguageSelectorToMenu() {
    const sidebarContent = document.querySelector('.sidebar-content');
    if (!sidebarContent) return;
    
    // Comprobar si ya existe el selector para no duplicarlo
    if (document.querySelector('.language-selector-menu')) return;
    
    const languageSelector = document.createElement('div');
    languageSelector.className = 'language-selector-menu';
    languageSelector.innerHTML = `
        <h4>Idioma /Language</h4>
        <div class="language-options-menu">
            <button data-lang="ca"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/320px-Flag_of_Catalonia.svg.png" alt="Català"></button>
            <button data-lang="en"><img src="https://flagcdn.com/w20/gb.png" alt="English"></button>
            <button data-lang="es"><img src="https://flagcdn.com/w20/es.png" alt="Español"></button>
        </div>
    `;
    sidebarContent.appendChild(languageSelector);
    
    // Eventos para los botones del menú
    document.querySelectorAll('.language-options-menu button').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            applyLanguage(lang);
            // Cierra el menú lateral si está abierto
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) sidebar.classList.remove('active');
        });
    });
}

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
    if (!counter) return;
    
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
    const packetCounter = document.getElementById('ricePacketCounter');
    if (packetCounter) {
        packetCounter.textContent = paquetes;
    }

    // Objetivo siguiente (incluye número de carga)
    const nextGoalElement = document.getElementById('nextGoal');
    if (nextGoalElement) {
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        const langData = translations[savedLang];
        nextGoalElement.textContent = langData.nextGoal.replace('${next}', seguidores + 1);
    }
    
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
    if (!fill) return;
    
    // Calcula el rango dinámico
    const left = Math.floor(seguidores / meta) * meta;
    const right = left + meta;

    // Actualiza los labels de los extremos
    const leftLabel = document.getElementById('leftLabel');
    const rightLabel = document.getElementById('rightLabel');
    if (leftLabel) leftLabel.textContent = left.toLocaleString();
    if (rightLabel) rightLabel.textContent = right.toLocaleString();

    // Porcentaje de relleno respecto al rango actual
    const porcentaje = ((seguidores - left) / meta) * 100;
    fill.style.width = `${Math.min(Math.max(porcentaje, 0), 100)}%`;
}

// Efecto visual de granos de arroz (opcional)
function actualizarGranos() {
    const grains = document.getElementById('riceGrains');
    if (grains) {
        const porcentaje = seguidores / meta;
        grains.style.opacity = `${0.3 + (porcentaje * 0.7)}`;
    }
}

// Función para lanzar confeti
function lanzarConfeti() {
    const confetti = document.getElementById('confetti');
    if (!confetti) return;
    
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
    
    // Mostrar modal sempre que s'entri
    const languageModal = document.getElementById('language-modal');
    if (languageModal) {
        languageModal.style.display = 'flex';
    }
    
    // Configurar botones de idioma del modal
    if (languageModal) {
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                applyLanguage(lang);
                languageModal.style.display = 'none';
            });
        });
    }
    
    // Añadir selector al menú lateral
    addLanguageSelectorToMenu();
    
    // Actualiza todo (incluyendo confeti si corresponde)
    actualizarProyecto();
    
    console.log('=== ✅ CARGA COMPLETADA ===');
});

// Funciones disponibles en consola
window.empezarDeNuevo = empezarDeNuevo;
window.verEstadisticas = verEstadisticas;
window.obtenerNumeroCargas = obtenerNumeroCargas;

// Efecto: resalta el paso al pasar el ratón
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('mouseenter', () => {
        step.style.transform = 'scale(1.05)';
        const icon = step.querySelector('.step-icon');
        if (icon) icon.style.backgroundColor = '#F4E285';
    });
    step.addEventListener('mouseleave', () => {
        step.style.transform = 'scale(1)';
        const icon = step.querySelector('.step-icon');
        if (icon) icon.style.backgroundColor = 'white';
    });
});

// Control del menú lateral
const sidebar = document.querySelector('.sidebar');
if (sidebar) {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('.main-content');
    
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Abrir/cerrar menú lateral
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace del menú
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic en el overlay o en el contenido principal
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
            sidebar.classList.remove('active');
        }
    });
}

// Compartir proyecto
const shareBtn = document.getElementById('shareProjectBtn');
if (shareBtn) {
    shareBtn.addEventListener('click', function() {
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        const langData = translations[savedLang];
        const shareText = langData.shareText;
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
}
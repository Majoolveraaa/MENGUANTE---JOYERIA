/* ==========================================
   VARIABLES DE IDENTIDAD VISUAL (MENGUANTE)
   ========================================== */
:root {
    --bg-luz-de-luna: #F8F5F0;    /* Fondo Principal Claro[cite: 34] */
    --eclipse-oscuro: #090A0C;    /* Color Principal Oscuro[cite: 34] */
    --orbita-botones: #34353A;    /* Acentuación / Botones[cite: 34] */
    --sombra-astral:  #8B858D;    /* Texto Secundario[cite: 34] */
    --niebla-celeste: #D8CEC3;    /* Bordes y Líneas[cite: 34] */
    --polvo-lunar:    #C4C5CA;    /* Neutro / Superficie[cite: 34] */
}

/* ==========================================
   ESTILOS GENERALES Y TIPOGRAFÍAS
   ========================================== */
body {
    background-color: var(--bg-luz-de-luna);
    color: var(--eclipse-oscuro);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, .logo-text {
    font-family: 'Cormorant Garamond', serif; /* Títulos editoriales[cite: 34] */
    letter-spacing: 0.05em;
}

/* ==========================================
   NAVEGACIÓN (HEADER)
   ========================================== */
.navbar {
    background-color: var(--bg-luz-de-luna);
    border-bottom: 1px solid var(--niebla-celeste);
}

.logo-symbol {
    font-size: 1.5rem;
    color: var(--eclipse-oscuro);
}

.logo-text {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--eclipse-oscuro);
    text-decoration: none;
}

.navbar-nav .nav-link {
    color: var(--eclipse-oscuro) !important;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
    color: var(--sombra-astral) !important;
}

.nav-icon {
    color: var(--eclipse-oscuro);
    font-size: 1.1rem;
    transition: opacity 0.3s ease;
}

.nav-icon:hover {
    opacity: 0.7;
}

/* ==========================================
   BOTONES Y COMPONENTES
   ========================================== */
.btn-primary-custom {
    background-color: var(--orbita-botones);
    color: #FFFFFF;
    border: none;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    border-radius: 0;
    transition: background-color 0.3s ease;
}

.btn-primary-custom:hover {
    background-color: var(--eclipse-oscuro);
    color: #FFFFFF;
}

.badge-collection {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--sombra-astral);
    text-transform: uppercase;
}

/* ==========================================
   SECCIÓN DE CATEGORÍAS
   ========================================== */
.category-card {
    background-color: #FFFFFF;
    border: 1px solid var(--niebla-celeste);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(9, 10, 12, 0.05) !important;
}

/* ==========================================
   FOOTER
   ========================================== */
.footer-custom {
    background-color: var(--eclipse-oscuro);
    color: #FFFFFF;
}

.footer-link {
    color: var(--polvo-lunar);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: #FFFFFF;
}

.btn-whatsapp {
    background-color: #25D366;
    color: #FFFFFF;
    border: none;
    font-weight: 600;
}

.btn-whatsapp:hover {
    background-color: #1EBE5D;
    color: #FFFFFF;
}
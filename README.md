# CV Web Interactivo — Carmen Vargas
> **IT Support / Application Support Analyst | Corporate Systems | Operations & User Support**

Este proyecto es una aplicación web interactiva moderna, diseñada como Curriculum Vitae digital y portafolio profesional para **Carmen Vargas**. Cuenta con soporte bilingüe instantáneo (Español / Inglés), alternancia de tema Claro / Oscuro (Bright & Dark Mode), diseño responsive optimizado para reclutadores y estilos de impresión directa a PDF.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Descripción y Propósito |
| :--- | :--- | :--- |
| **React** | `^19.2.0` | Biblioteca principal para la interfaz de usuario, basada en componentes funcionales y Hooks (`useState`, `useEffect`). |
| **Vite** | `^7.2.4` | Entorno de desarrollo y empaquetador ultrarrápido con Hot Module Replacement (HMR) y compilación optimizada en producción. |
| **Tailwind CSS** | `^4.1.17` | Framework de utilidades CSS de última generación (v4) integrado mediante `@tailwindcss/vite`, permitiendo diseño responsivo fluido y estilos modernos sin sobrecarga. |
| **Vercel Analytics** | `^1.6.1` | Telemetría y análisis de tráfico y rendimiento web en producción. |
| **Google Fonts** | — | Tipografías modernas **Plus Jakarta Sans** e **Inter** para máxima legibilidad, contraste y jerarquía visual ejecutiva. |
| **Iconografía SVG Nativa** | — | Iconos vectoriales y banderas personalizadas embebidas en componentes React ligeros (sin dependencias externas pesadas). |

---

## ✨ Características Principales

1. **Selector Bilingüe en 1 Clic (ES / EN):**
   - Selector segmentado elegante con banderas vectoriales nítidas.
   - Permite alternar de inmediato entre las versiones en **Español** e **Inglés**.
   - Guarda automáticamente la preferencia en `localStorage` y actualiza las etiquetas meta y el atributo `lang` del documento HTML.

2. **Modo Oscuro & Modo Claro (Bright Mode):**
   - Interruptor con iconos animados de Sol y Luna.
   - Implementado en **Tailwind CSS v4** mediante la directiva `@custom-variant dark (&:where(.dark, .dark *));`.
   - Paleta cromática calibrada: Slate oscuro profundo con acentos Cyan/Sky en modo oscuro, y fondos limpios y luminosos con bordes sutiles en modo claro.
   - Persistencia de estado en `localStorage`.

3. **Foto de Perfil Profesional:**
   - Incorporación de `Carmen Linkedin perfil.png` con encuadre circular optimizado (`object-[center_20%]`), anillo decorativo y badge pulsante de *"Disponible para nuevas oportunidades"*.

4. **Botón de Imprimir / Guardar en PDF:**
   - Botón directo para reclutadores que dispara `window.print()`.
   - Hoja de estilos `@media print` que oculta controles de navegación y adapta el documento a formato A4 con contraste nítido y fondo blanco limpio para ahorrar tinta.

5. **Experiencia de Usuario Interactiva:**
   - Copiado rápido de correo electrónico al portapapeles con confirmación visual (*"¡Email copiado!"*).
   - Enlaces directos a perfiles profesionales de **LinkedIn** y **GitHub**.
   - Secciones con diseño de línea de tiempo (*timeline*) para la experiencia laboral, badges temáticos y visualización en dos columnas para habilidades técnicas y clave.

---

## 📁 Estructura del Proyecto

```text
cv-carmen/
├── public/
│   ├── Carmen Linkedin perfil.png   # Foto de perfil profesional de LinkedIn
│   ├── carmen-linkedin.png          # Alias URL-safe de la foto de perfil
│   └── carmen-vargas.jpg            # Foto de respaldo / Favicon
├── src/
│   ├── assets/                      # Recursos visuales estáticos
│   ├── components/
│   │   ├── AdditionalInfoSection.jsx # Sección de Idiomas, Cursos (UTN) y Premios
│   │   ├── Controls.jsx             # Barra flotante: selector de idioma, tema y botón PDF
│   │   ├── EducationSection.jsx     # Formación académica (Digital House, USIL)
│   │   ├── ExperienceItem.jsx       # Tarjeta individual con formato de línea de tiempo
│   │   ├── ExperienceSection.jsx    # Sección completa de experiencia laboral
│   │   ├── Footer.jsx               # Pie de página y botón de retorno al inicio
│   │   ├── Header.jsx               # Foto, título profesional, estado y datos de contacto
│   │   ├── Icons.jsx                # Colección de iconos y banderas vectoriales SVG
│   │   ├── SkillsSection.jsx        # Grid de Habilidades Técnicas y Clave
│   │   └── Summary.jsx              # Resumen profesional destacado
│   ├── data/
│   │   └── cvData.js                # Base de datos bilingüe completa (ES / EN)
│   ├── App.jsx                      # Componente raíz con estado global de idioma y tema
│   ├── index.css                    # Estilos globales, directivas Tailwind v4 y print styles
│   └── main.jsx                     # Punto de entrada de React 19 y Vercel Analytics
├── index.html                       # HTML principal con preconnect a Google Fonts y SEO
├── package.json                     # Dependencias y scripts de construcción
└── vite.config.js                   # Configuración de Vite con plugins de React y Tailwind v4
```

---

## 🛠️ Instalación y Uso Local

### 1. Clonar el repositorio o abrir la carpeta:
```bash
cd "d:/Curriculums/CV Web/cv-carmen"
```

### 2. Instalar dependencias:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

### 4. Generar la versión de producción:
```bash
npm run build
```
Esto creará la carpeta optimizada `dist/` lista para ser desplegada en Vercel, Netlify o GitHub Pages.

---

## 🌐 Despliegue

El proyecto está configurado para despliegue continuo en **Vercel** (`@vercel/analytics`). Cada `git push` a la rama `main` compilará y actualizará automáticamente la versión web pública.

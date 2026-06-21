# Personal Portfolio — Baruc Alejandria (devLire)

Bienvenido al repositorio de mi portafolio personal. Este proyecto fue diseñado y desarrollado desde cero para consolidar mi marca personal, mi trayectoria académica y exhibir mis proyectos de ingeniería de software.

La aplicación es una Single Page Application (SPA) construida con prácticas modernas de maquetación, arquitectura modular y tipado estricto.

## 🛠️ Stack Tecnológico

- **Core:** React 19 + TypeScript
- **Empaquetador:** Vite 8
- **Enrutamiento:** React Router (Data Router)
- **Estilos & UI:** Tailwind CSS v4 + shadcn/ui
- **Iconografía:** Lucide React + Simple Icons (Máscaras CSS estables)

---

## 🔒 Aviso de Licencia y Propiedad Intelectual (Copyright)

⚠️ **POR FAVOR, LEA ESTO ANTES DE CLONAR O DE RENOVAR SU PORTAFOLIO:**

© 2026 Baruc Alejandria. Todos los derechos reservados.

Este repositorio contiene mi portafolio personal y único. El código fuente se publica **únicamente con fines demostrativos, de auditoría técnica y revisión de portafolio por parte de reclutadores o empresas**.

- **No está permitido** copiar, duplicar ni distribuir el diseño visual, la disposición de los componentes ni la estructura identitaria de este sitio.
- **No está permitido** utilizar este código totalmente, para crear portafolios derivados, sitios comerciales o plantillas públicas sin mi autorización expresa por escrito.
- **No está permitido** el uso de mi marca personal (`devLire`), textos descriptivos, imágenes personales, o contenido de proyectos para fines ajenos a la evaluación de mi perfil profesional.

Agradezco profundamente tu respeto por el trabajo, las horas de diseño y el esfuerzo invertido en este desarrollo. Si buscas inspiración, te invito a estudiar la arquitectura de componentes.

---

## 🏗️ Estructura del Proyecto

El proyecto sigue una arquitectura de componentes limpia y totalmente atomizada:

- `/src/components`: Componentes UI globales y reutilizables (`CustomCard`, `CustomBadge`, etc.).
- `/src/constants`: Abstracción de datos planos (`skills.ts`, `projects.ts`, `education.ts`) para un escalado ágil.
- `/src/pages`: Secciones modulares del Home Page (`Hero`, `Skills`, `Projects`, `AboutMe`, `EducationAndCertifications`).

---

## ⚡ Desarrollo Local

Si eres un reclutador y deseas auditar el rendimiento o la compilación del sitio en tu entorno local:

1. Clonar el repositorio.
2. Instalar las dependencias estrictamente con `pnpm`:

```bash
pnpm install
```

3. Levantar el servidor de desarrollo local:

```bash
pnpm dev
```

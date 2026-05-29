# Requerimientos de Refactorización - Proyecto CV

## 1. Objetivo General
Limpiar, modernizar y optimizar la estructura del proyecto CV para que sea un ejemplo de código limpio (Clean Code) y alto profesionalismo técnico, siguiendo los estándares de Next.js y Tailwind CSS.

## 2. Definición de Necesidades

### 2.1. Limpieza de Infraestructura
- **Resolución de Conflictos:** Eliminar los marcadores de conflicto de merge en `README.md`.
- **Eliminación de Código Legado:** Eliminar o mover archivos HTML estáticos (`index.html`, `Contacto.html`, `Pasatiempos.html`) que no forman parte de la arquitectura de Next.js.
- **Limpieza de Directorios:** Evaluar y eliminar la carpeta `backup/` y archivos redundantes en la raíz.
- **Normalización de Versiones:** Verificar la versión de Next.js (actualmente 16 en `package.json`) y ajustar a la versión estable recomendada (15 o 14) si es necesario por estabilidad, o mantener 16 si es la decisión del usuario.

### 2.2. Arquitectura y Estándares
- **Aplicación de SOLID:** Asegurar que los componentes en `src/features` y `src/components` tengan una única responsabilidad (SRP).
- **Consistencia en Naming:** Unificar criterios de nombres para componentes y utilidades.
- **Optimización de Assets:** Corregir rutas de imágenes inexistentes (ej. `project-placeholder.jpg`) y optimizar las existentes para web (formato webp).

### 2.3. UX/UI y Estética (Rich Design)
- **Diseño Premium:** Refinar el sistema de diseño en `globals.css` (colores, tipografía, espaciado).
- **Animaciones:** Mejorar las micro-animaciones con `framer-motion` para que el sitio se sienta "vivo".
- **Responsive Design:** Asegurar una experiencia impecable en todos los dispositivos.

### 2.4. Calidad y Mantenibilidad
- **Documentación:** Generar archivos de especificación en `.specs/`.
- **Validación del Build:** Asegurar que `npm run build` y `npm run lint` pasen sin errores.
- **SEO:** Mejorar la implementación de metadatos dinámicos.

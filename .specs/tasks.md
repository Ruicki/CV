# Lista de Tareas - Refactorización CV

## Fase 1: Limpieza e Infraestructura
- [x] Resolver conflictos de merge en `README.md`. [ID: T01]
- [x] Eliminar archivos HTML legados (`index.html`, `Contacto.html`, `Pasatiempos.html`). [ID: T02]
- [x] Eliminar carpeta `backup/` y archivos redundantes. [ID: T03]
- [ ] Verificar y actualizar `package.json` (Versiones y Scripts). [ID: T04]

## Fase 2: Arquitectura y Datos
- [x] Revisar y completar tipos en `src/types/index.ts`. [ID: T05]
- [x] Validar `src/data/cv-data.ts` y corregir referencias a imágenes. [ID: T06]
- [x] Implementar `next/image` en componentes que faltan. [ID: T07]

## Fase 3: UX/UI (Rich Design)
- [x] Refactorizar `globals.css` con sistema de colores armonioso. [ID: T08]
- [x] Añadir efectos de Glassmorphism y gradientes dinámicos. [ID: T09]
- [x] Mejorar transiciones de Framer Motion en todas las secciones. [ID: T10]
- [x] Revisar mobile responsiveness de la sección "Projects" y "Experience". [ID: T11]

## Fase 4: Validación y Cierre
- [ ] Ejecutar `npm run build` y corregir errores de tipado o lint. [ID: T12]
- [ ] Actualizar documentación final en `.specs/`. [ID: T13]

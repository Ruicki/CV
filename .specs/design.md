# Diseño de Arquitectura - Refactorización CV

## 1. Estructura de Directorios
Se mantendrá la estructura actual pero con mayor rigor en la separación de responsabilidades:
- `src/app/`: Rutas, layouts y páginas principales.
- `src/features/`: Módulos autónomos (Hero, About, Projects, etc.).
- `src/components/ui/`: Componentes base (Botones, Inputs, Motion-wrappers).
- `src/lib/`: Utilidades agnósticas y lógica de terceros.
- `src/data/`: Fuente de verdad para el contenido del CV.

## 2. Decisiones Técnicas

### 2.1. UI System
- **Tailwind CSS v4:** Aprovechar las nuevas capacidades de la v4 para variables CSS y hooks de diseño.
- **Framer Motion:** Uso de componentes `AnimatePresence` y variantes reutilizables para animaciones consistentes.
- **Lucide React:** Uso dinámico de iconos mapeados desde los datos.

### 2.2. Manejo de Datos
- Las imágenes deben servirse desde `public/`. Se recomienda convertir imágenes pesadas a `.webp` o `.avif`.
- El archivo `cv-data.ts` debe estar debidamente tipado en `src/types/index.ts`.

### 2.3. SEO y Performance
- Configuración de `Metadata` dinámico por página (aunque sea un SPA de una página, preparar para expansión).
- Implementación de `next/image` para todas las imágenes del portafolio.

## 3. Flujo de Refactorización
1. **Fase 1 (Limpieza):** Resolver README y eliminar legacy HTML.
2. **Fase 2 (Core):** Tipado estricto y centralización de utilidades.
3. **Fase 3 (UI):** Mejora visual de secciones y micro-interacciones.
4. **Fase 4 (Specs):** Finalización de documentación técnica.

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export const ScrollToHash = () => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    // 1. Si no hay hash, subimos al top inmediatamente (navegación normal)
    if (!location.hash) {
      // Esperamos que el Sheet libere el body
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 350);

      return () => clearTimeout(timeoutId);
    }

    // 2. Si hay hash, esperamos a que el UI se estabilice (menú cerrado)
    if (lastHash.current) {
      const elementId = lastHash.current;

      const timeoutId = setTimeout(() => {
        const element = document.getElementById(elementId);

        if (element) {
          // requestAnimationFrame sincroniza el scroll con el refresco de pantalla
          // para eliminar el "jank" o tartamudeo visual
          requestAnimationFrame(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          });
        }

        // Limpiamos la ref para evitar re-scrolleos fantasmas
        lastHash.current = '';
      }, 450); // 450ms da tiempo a que el Sheet restaure el scroll del body

      // Limpiamos el timeout si el usuario cambia de ruta rápidamente
      return () => clearTimeout(timeoutId);
    }
  }, [location]);

  return null;
};

export default ScrollToHash;

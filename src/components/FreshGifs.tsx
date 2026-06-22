import { useEffect, useState } from 'react';

// Almacena los bytes originales de los GIFs para evitar peticiones de red repetidas
const gifBufferCache: Record<string, ArrayBuffer> = {};

interface FreshGifProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  tick?: number;
}

export const FreshGif = ({ src, tick = 0, ...props }: FreshGifProps) => {
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    let activeObjectUrl = '';
    let isMounted = true; // Controla fugas de memoria y condiciones de carrera si el componente se desmonta

    const loadSaltedGif = async () => {
      try {
        // Descarga y almacena en caché el buffer original si no existe
        if (!gifBufferCache[src]) {
          const response = await fetch(src);
          gifBufferCache[src] = await response.arrayBuffer();
        }
        if (!isMounted) return;

        // Copia el buffer original y añade un byte extra al final para romper la caché del navegador
        const originalBuffer = gifBufferCache[src];
        const saltedBytes = new Uint8Array(originalBuffer.byteLength + 1);
        saltedBytes.set(new Uint8Array(originalBuffer), 0);
        saltedBytes[originalBuffer.byteLength] =
          Math.floor(Math.random() * 256) + tick;

        // Crea una URL de objeto local a partir del nuevo binario modificado
        const saltedBlob = new Blob([saltedBytes], { type: 'image/gif' });
        activeObjectUrl = URL.createObjectURL(saltedBlob);

        if (isMounted) {
          setCurrentSrc(activeObjectUrl);
        } else {
          URL.revokeObjectURL(activeObjectUrl);
        }
      } catch (error) {
        console.error('Error cargando el GIF ultra-fresco:', error);
      }
    };

    loadSaltedGif();

    // Limpieza: desmonta el componente y libera la URL de objeto para evitar consumo de memoria
    return () => {
      isMounted = false;
      if (activeObjectUrl) {
        URL.revokeObjectURL(activeObjectUrl);
      }
    };
  }, [src, tick]); // Se vuelve a ejecutar si cambia la imagen o se fuerza un reinicio mediante 'tick'

  // Muestra un placeholder oscuro con los estilos heredados mientras el GIF se procesa
  if (!currentSrc) {
    return (
      <div className={props.className} style={{ backgroundColor: '#18181b' }} />
    );
  }
  return <img src={currentSrc} {...props} />;
};

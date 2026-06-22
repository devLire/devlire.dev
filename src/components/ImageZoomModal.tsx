import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';

interface ImageZoomModalProps {
  src: string;
  alt: string;
  isMobileView?: boolean;
}

export const ImageZoomModal = ({
  src,
  alt,
  isMobileView = false,
}: ImageZoomModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative flex h-full w-full cursor-zoom-in items-center justify-center outline-none">
          {isMobileView ? (
            <div className="relative aspect-[9/16] h-full max-h-[340px] shrink-0 overflow-hidden rounded-[20px] border-[4px] border-zinc-800 bg-black shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
              <img alt={alt} className="h-full w-full object-cover" src={src} />
            </div>
          ) : (
            <img
              alt={alt}
              className="max-h-full max-w-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
              src={src}
            />
          )}
          <div className="absolute inset-0 rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </button>
      </DialogTrigger>

      <DialogContent
        className={`flex h-auto items-center justify-center overflow-y-auto border-zinc-900 bg-zinc-950/98 p-2 backdrop-blur-2xl transition-all duration-200 md:p-4 ${isMobileView ? 'max-h-[85vh] max-w-[380px]' : 'max-h-[90vh] max-w-[95vw] xl:max-w-[1200px]'}`}
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>

        <div
          className={`relative h-full w-full ${isMobileView ? 'flex items-center justify-center' : 'block'}`}
        >
          <img
            alt={alt}
            className={`pointer-events-none rounded-md shadow-2xl select-none ${
              isMobileView
                ? 'h-auto max-h-[75vh] w-auto object-contain'
                : 'h-auto w-full object-cover'
            }`}
            src={src}
            style={{
              imageRendering: 'auto',
              transform: 'translate3d(0px, 0px, 0px)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: { src: string; alt: string; id: number }[];
}

export function ImageLightbox({ images }: ImageLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentImage = selectedImage !== null ? images.find(img => img.id === selectedImage) : null;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image.id)}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            data-testid={`gallery-item-${image.id}`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-6 text-lg font-medium">
                {image.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 border-0 bg-black/95">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
            {currentImage && (
              <div className="flex flex-col items-center justify-center p-8">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-[85vh] w-auto object-contain rounded-lg"
                  data-testid="img-lightbox"
                />
                <p className="text-white text-center mt-6 text-lg">
                  {currentImage.alt}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

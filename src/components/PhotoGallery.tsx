import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const photos = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    filename: `photo${i + 1}.jpg`,
    title: `Photo ${i + 1}`,
    description: `Professional photo ${i + 1} from Sebastian's career`
  }));

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group cursor-pointer bg-gray-900/40 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center group-hover:from-gray-600 group-hover:via-gray-700 group-hover:to-gray-800 transition-all duration-300">
                <div className="text-center p-4">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-orange-500 text-xs font-bold">{photo.id}</span>
                  </div>
                  <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                    {photo.filename}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                <div className="w-full h-96 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-orange-500 text-2xl font-bold">{photos[selectedImage].id}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{photos[selectedImage].title}</h3>
                    <p className="text-gray-400">{photos[selectedImage].filename}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-center">{photos[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;


import SectionHeading from "@/components/SectionHeading";
import { Image, ImagePlus } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://picsum.photos/seed/aruna30/600/400",
      alt: "Women doing yoga in a studio",
      category: "Yoga"
    },
    {
      id: 2,
      src: "https://picsum.photos/seed/aruna31/600/400",
      alt: "Group fitness class",
      category: "Group Classes"
    },
    {
      id: 3,
      src: "https://picsum.photos/seed/aruna32/600/400",
      alt: "Personal training session",
      category: "Personal Training"
    },
    {
      id: 4,
      src: "https://picsum.photos/seed/aruna33/600/400",
      alt: "Weight training area",
      category: "Strength"
    },
    {
      id: 5,
      src: "https://picsum.photos/seed/aruna34/600/400",
      alt: "Studio interior",
      category: "Our Studio"
    },
    {
      id: 6,
      src: "https://picsum.photos/seed/aruna35/600/400",
      alt: "Pilates class",
      category: "Pilates"
    },
    {
      id: 7,
      src: "https://picsum.photos/seed/aruna36/600/400",
      alt: "Relaxation area",
      category: "Facilities"
    },
    {
      id: 8,
      src: "https://picsum.photos/seed/aruna37/600/400",
      alt: "Special event at the studio",
      category: "Events"
    }
  ];

  const categories = [...new Set(galleryImages.map(img => img.category))];

  return (
    <div className="py-12">
      <div className="container-custom">
        <SectionHeading 
          title="Our Gallery" 
          subtitle="Take a peek inside Aruna Fitness Studio and see what makes our space special."
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-aruna-purple text-white px-4 py-2 rounded-full text-sm">
            All
          </button>
          {categories.map((category) => (
            <button 
              key={category} 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="rounded-xl overflow-hidden shadow-custom hover-scale group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white font-medium">{image.category}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

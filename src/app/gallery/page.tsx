
import Image from "next/image";

const galleryImages = [
    {
      id: "gallery-1",
      description: "Devotees participating in a festival.",
      imageUrl: "/images/temple-3d-model.jpeg",
      imageHint: "hindu festival"
    },
    {
      id: "gallery-2",
      description: "Close-up of the temple architecture.",
      imageUrl: "/images/plan.png",
      imageHint: "temple architecture"
    },
    {
      id: "gallery-3",
      description: "Evening aarti at the temple.",
      imageUrl: "/images/temple-3d-model.jpeg",
      imageHint: "evening prayer"
    },
    {
      id: "gallery-4",
      description: "A vibrant celebration at the temple.",
      imageUrl: "/images/plan.png",
      imageHint: "indian celebration"
    },
    {
      id: "gallery-5",
      description: "Children playing in the temple courtyard.",
      imageUrl: "/images/temple-3d-model.jpeg",
      imageHint: "children playing"
    },
    {
      id: "gallery-6",
      description: "Intricate carvings on the temple walls.",
      imageUrl: "/images/plan.png",
      imageHint: "stone carving"
    },
    {
      id: "gallery-7",
      description: "The temple idol decorated with flowers.",
      imageUrl: "/images/temple-3d-model.jpeg",
      imageHint: "hindu deity"
    },
    {
      id: "gallery-8",
      description: "A panoramic view of the temple complex.",
      imageUrl: "/images/plan.png",
      imageHint: "temple view"
    }
];

export default function GalleryPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          गॅलरी
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          मंदिरातील काही अविस्मरणीय क्षणांची छायाचित्रे.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

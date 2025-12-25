
import Image from "next/image";

const galleryImages = [
    {
      id: "gallery-1",
      description: "Devotees participating in a festival.",
      imageUrl: "https://images.unsplash.com/photo-1604107176347-97563698a408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoaW5kdSUyMGZlc3RpdmFsfGVufDB8fHx8MTc2MjMyMjg1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "hindu festival"
    },
    {
      id: "gallery-2",
      description: "Close-up of the temple architecture.",
      imageUrl: "https://images.unsplash.com/photo-1677182821331-4e2441421066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYyMzUyMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "temple architecture"
    },
    {
      id: "gallery-3",
      description: "Evening aarti at the temple.",
      imageUrl: "https://images.unsplash.com/photo-1542669367-c5d56c4a97f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxldmVuaW5nJTIwcHJheWVyfGVufDB8fHx8MTc2MjM1MjMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "evening prayer"
    },
    {
      id: "gallery-4",
      description: "A vibrant celebration at the temple.",
      imageUrl: "https://images.unsplash.com/photo-1600495495739-8e2a8f4ada40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aW5kaWFuJTIwY2VsZWJyYXRpb258ZW58MHx8fHwxNzYyMzUyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "indian celebration"
    },
    {
      id: "gallery-5",
      description: "Children playing in the temple courtyard.",
      imageUrl: "https://images.unsplash.com/photo-1613794713137-a78aba4be84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjaGlsZHJlbiUyMHBsYXlpbmd8ZW58MHx8fHwxNzYyMjY3ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "children playing"
    },
    {
      id: "gallery-6",
      description: "Intricate carvings on the temple walls.",
      imageUrl: "https://images.unsplash.com/photo-1636532809535-30698b6ee291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzdG9uZSUyMGNhcnZpbmd8ZW58MHx8fHwxNzYyMzUyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "stone carving"
    },
    {
      id: "gallery-7",
      description: "The temple idol decorated with flowers.",
      imageUrl: "https://images.unsplash.com/photo-1518332096935-7fdc42511685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxoaW5kdSUyMGRlaXR5fGVufDB8fHx8MTc2MjM1MjMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      imageHint: "hindu deity"
    },
    {
      id: "gallery-8",
      description: "A panoramic view of the temple complex.",
      imageUrl: "https://images.unsplash.com/photo-1713861618330-b3abca972e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8dGVtcGxlJTIwdmlld3xlbnwwfHx8fDE3NjIzNTIzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
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

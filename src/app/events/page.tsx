
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { events } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          आगामी कार्यक्रम
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          मंदिरात आयोजित होणाऱ्या विविध धार्मिक आणि सामाजिक कार्यक्रमांची माहिती.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                data-ai-hint={event.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{event.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 pt-1 text-sm text-primary font-semibold">
                <Calendar className="h-4 w-4" />
                {event.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

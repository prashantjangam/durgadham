
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Gift, Building2, Wrench, Users, Calendar } from 'lucide-react';
import { events } from '@/lib/data';

const heroImage = {
  imageUrl: "/images/new-temple-design.jpeg",
  description: "A beautiful temple at sunrise, representing the Durgadham project.",
  imageHint: "indian temple",
};

const galleryImages = [
    {
      id: "gallery-1",
      description: "Devotees participating in a festival.",
      imageUrl: "/images/new-temple-design.jpeg",
      imageHint: "hindu festival"
    },
    {
      id: "gallery-2",
      description: "Close-up of the temple architecture.",
      imageUrl: "/images/architectural-design.jpeg",
      imageHint: "temple architecture"
    },
    {
      id: "gallery-3",
      description: "Evening aarti at the temple.",
      imageUrl: "/images/new-temple-design.jpeg",
      imageHint: "evening prayer"
    },
    {
      id: "gallery-4",
      description: "A vibrant celebration at the temple.",
      imageUrl: "/images/architectural-design.jpeg",
      imageHint: "indian celebration"
    }
];
const upcomingEvents = events.slice(0, 3);

export default function Home() {
  const donationGoal = 5000000;
  const currentDonation = 1250000;
  const progress = (currentDonation / donationGoal) * 100;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center text-center bg-secondary/20">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
        <div className="container px-4 md:px-6 z-20 relative">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
            डायमंड स्पोर्ट्स क्लब ( संचालित ) दुर्गामाता मंदिर आणि मित्र मंडळ
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              डायमंड स्पोर्ट्स क्लब ( संचालित ) दुर्गामाता मंदिर आणि मित्र मंडळ आयोजित दुर्गा माता मंदिराच्या जिर्णोद्धार कार्यात सामील व्हा. आपले योगदान अमूल्य आहे.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/donate">
                  <Gift className="mr-2 h-5 w-5" /> देणगी द्या
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/renovation">
                  अधिक जाणून घ्या <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Building2 className="text-primary" /> दुर्गामाता मंदिर
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  मंदिराचा गौरवशाली इतिहास, त्याची स्थापना आणि महत्त्व जाणून घ्या.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/temple">
                    सविस्तर वाचा <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Wrench className="text-primary" /> जिर्णोद्धार मोहीम
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  मंदिराच्या नूतनीकरण आणि विस्तार योजनेबद्दल अधिक जाणून घ्या.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/renovation">
                    सविस्तर वाचा <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Users className="text-primary" /> सदस्य व्हा
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  या पवित्र कार्यात सामील व्हा आणि मंडळाचे सदस्य बना.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/members">
                    नोंदणी करा <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">देणगीचा तपशील</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                आपल्या सहकार्याने आपण आपले ध्येय नक्कीच गाठू.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>
                      एकत्रित रक्कम: ₹{new Intl.NumberFormat('en-IN').format(currentDonation)}
                    </span>
                    <span>
                      ध्येय: ₹{new Intl.NumberFormat('en-IN').format(donationGoal)}
                    </span>
                  </div>
                  <Progress value={progress} className="h-4" />
                  <p className="text-center text-muted-foreground">
                    आपण {progress.toFixed(2)}% ध्येय पूर्ण केले आहे.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">आगामी कार्यक्रम</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    मंदिरात आयोजित होणाऱ्या विविध धार्मिक आणि सामाजिक कार्यक्रमांची माहिती.
                    </p>
                </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
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
            <div className="text-center mt-8">
                <Button asChild variant="outline">
                    <Link href="/events">
                    सर्व कार्यक्रम पहा <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/10">
        <div className="container px-4 md-px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">गॅलरी</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        मंदिरातील काही अविस्मरणीय क्षणांची छायाचित्रे.
                    </p>
                </div>
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
                </div>
                ))}
            </div>
            <div className="text-center mt-8">
                 <Button asChild variant="outline">
                    <Link href="/gallery">
                        संपूर्ण गॅलरी पहा <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift } from 'lucide-react';

const historyImage2 = {
  imageUrl: "/images/plan.png",
  description: "Architectural design for the temple renovation.",
  imageHint: "architectural design",
};

const historyImage1 = {
  imageUrl: "/images/temple.png",
  description: "An old picture of the temple.",
  imageHint: "temple design",
} 

export default function RenovationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            मंदिर जिर्णोद्धार मोहीम
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            आपल्या श्रद्धेच्या केंद्राच्या उज्ज्वल भविष्यासाठीची योजना.
          </p>
        </div>

        <div className="space-y-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">सद्यस्थिती आणि गरज</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  काळानुसार, मंदिराची रचना आता जुनी झाली असून काही ठिकाणी तिची दुरुस्ती करणे अत्यंत आवश्यक झाले आहे. वाढत्या लोकसंख्येमुळे आणि भक्तांच्या सोयीसाठी मंदिराचा विस्तार करणे ही काळाची गरज आहे.
                </p>
                <p>
                  छताची दुरुस्ती, भिंतींना मजबुती देणे, आणि भक्तांसाठी अधिक सोयीसुविधा, जसे की पिण्याच्या पाण्याची व्यवस्था व बसण्याची जागा, उपलब्ध करून देणे आवश्यक आहे.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/20 border-secondary">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">जिर्णोद्धार योजना</CardTitle>
            </CardHeader>
            <CardContent>
               {historyImage1 && (
                <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-8">
                  <Image id="temple-history"
                    src={historyImage1.imageUrl}
                    alt={historyImage1.description}
                    fill
                    className="object-contain"
                    data-ai-hint={historyImage1.imageHint}
                  />
                </div> )}
                 {historyImage2  && (
                <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-8">
                
                  <Image id="renovation-architecture"
                    src={historyImage2.imageUrl}
                    alt={historyImage2.description}
                    fill
                    className="object-contain"
                    data-ai-hint={historyImage2.imageHint}
                  />
                </div>
              )}
              <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li>
                  <strong>मंदिर बांधकाम:</strong> मंदिराच्या मुख्य गाभाऱ्याचे नूतनीकरण आणि मजबुतीकरण करणे.
                </li>
                <li>
                  <strong>सभामंडप:</strong> भक्तांसाठी एक मोठा आणि प्रशस्त सभामंडप उभारणे, जिथे धार्मिक कार्यक्रम आयोजित करता येतील.
                </li>
                <li>
                  <strong>सौंदर्यीकरण:</strong> मंदिराच्या परिसरात वृक्षारोपण आणि सुशोभीकरण करणे.
                </li>
                <li>
                  <strong>आधुनिक सुविधा:</strong> स्वच्छ पिण्याचे पाणी, स्वच्छतागृहे आणि दिव्यांगांसाठी विशेष सुविधा उपलब्ध करणे.
                </li>
              </ul>
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-foreground">
                  या पवित्र कार्यात आपले योगदान मोलाचे ठरेल.
                </p>
                <Button asChild size="lg" className="mt-4">
                  <Link href="/donate">
                    <Gift className="mr-2 h-5 w-5" /> आताच देणगी द्या
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

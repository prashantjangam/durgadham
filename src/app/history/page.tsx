import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift } from 'lucide-react';

const historyImage1 = PlaceHolderImages.find(p => p.id === 'history-1');
const historyImage2 = PlaceHolderImages.find(p => p.id === 'history-2');

export default function HistoryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            मंदिराचा इतिहास आणि जिर्णोद्धार योजना
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            आपल्या श्रद्धेच्या केंद्राचा गौरवशाली प्रवास आणि उज्ज्वल भविष्यासाठीची योजना.
          </p>
        </div>

        <div className="space-y-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">गौरवशाली इतिहास</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  श्री दुर्गा माता मंदिराची स्थापना अनेक दशकांपूर्वी झाली. तेव्हापासून हे मंदिर परिसरातील भक्तांसाठी एक महत्त्वाचे श्रद्धास्थान बनले आहे. या मंदिराने अनेक पिढ्यांचे आध्यात्मिक संगोपन केले आहे आणि सामाजिक एकोप्याचे केंद्र म्हणून काम केले आहे.
                </p>
                <p>
                  येथे वर्षानुवर्षे अनेक धार्मिक उत्सव, जसे की नवरात्र, दिवाळी, आणि विविध जयंत्या मोठ्या उत्साहात साजऱ्या केल्या जातात, ज्यामुळे समाजातील सर्व स्तरांतील लोक एकत्र येतात.
                </p>
              </div>
              {historyImage1 && (
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={historyImage1.imageUrl}
                    alt={historyImage1.description}
                    fill
                    className="object-cover"
                    data-ai-hint={historyImage1.imageHint}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">सद्यस्थिती आणि गरज</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8 items-center">
              {historyImage2 && (
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden md:order-last">
                  <Image
                    src={historyImage2.imageUrl}
                    alt={historyImage2.description}
                    fill
                    className="object-cover"
                    data-ai-hint={historyImage2.imageHint}
                  />
                </div>
              )}
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

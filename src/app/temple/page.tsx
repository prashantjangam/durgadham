import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const historyImage1 = PlaceHolderImages.find(p => p.id === 'history-1');

export default function TemplePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            श्री दुर्गामाता मंदिर
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            आपल्या श्रद्धेच्या केंद्राचा गौरवशाली प्रवास.
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
        </div>
      </div>
    </div>
  );
}

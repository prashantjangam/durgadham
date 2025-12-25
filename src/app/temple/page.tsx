import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const historyImage1 = {
  imageUrl: "/new-temple-design.jpeg",
  description: "An old picture of the temple.",
  imageHint: "temple design",
};

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
              <div className="space-y-4 text-muted-foreground text-justify">
                <p>
                  १९७५ साली, परिसरातील तरुणांनी एकत्र येऊन 'डायमंड स्पोर्ट्स क्लब' ची स्थापना केली. मंडळाने सामाजिक आणि क्रीडा क्षेत्रात, विशेषतः कबड्डीमध्ये, महत्त्वपूर्ण कार्य केले.
                </p>
                <p>
                  १९७६ मध्ये, मंडळाने परिसरात धार्मिक भावना एकत्र आणण्यासाठी दुर्गामातेचा फोटो लावून नवरात्रोत्सव सुरू केला. ही परंपरा अनेक वर्षे चालू राहिली.
                </p>
                <p>
                  १९९२ साली, स्वतंत्र मंदिर असावे या संकल्पनेतून 'डायमंड स्पोर्ट्स क्लब (संचालित) दुर्गामाता सेवा मंडळ (रजि.)' या संस्थेची स्थापना झाली. अनेक नागरिक, सामाजिक कार्यकर्ते आणि नेत्यांच्या सहकार्याने आणि श्रमदानाने, १९९७ साली श्री दुर्गामाता मंदिराची उभारणी झाली. तेव्हापासून हे मंदिर परिसरातील भक्तांसाठी एक महत्त्वाचे श्रद्धास्थान बनले आहे.
                </p>
              </div>
              {historyImage1 && (
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
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

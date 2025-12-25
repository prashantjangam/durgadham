
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Banknote, QrCode, Gift, Receipt } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="container py-12 md:py-20">
      <Card className="max-w-5xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Gift className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">देणगी द्या</CardTitle>
          <CardDescription>
            तुमचे छोटेसे योगदान मंदिराच्या जिर्णोद्धारासाठी मोठे कार्य करेल.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="border-dashed h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                        <Banknote /> बँक खात्याचा तपशील
                    </CardTitle>
                    <CardDescription>
                        खालील बँक खात्यावर तुम्ही थेट देणगी जमा करू शकता.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                        <span className="font-medium text-muted-foreground">बँकेचे नाव:</span>
                        <span className="font-mono text-foreground text-right">स्टेट बँक ऑफ इंडिया</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                        <span className="font-medium text-muted-foreground">खातेधारकाचे नाव:</span>
                        <span className="font-mono text-foreground text-right">डायमंड स्पोर्ट्स क्लब...</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                        <span className="font-medium text-muted-foreground">खाते क्रमांक:</span>
                        <span className="font-mono text-foreground text-right">12345678901</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                        <span className="font-medium text-muted-foreground">IFSC कोड:</span>
                        <span className="font-mono text-foreground text-right">SBIN0001234</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">
                       कृपया देणगी जमा केल्यानंतर, तुमची पावती मिळवण्यासाठी आम्हाला <a href="mailto:example@email.com" className="text-primary underline">example@email.com</a> वर कळवा.
                    </p>
                </CardContent>
            </Card>

            <Card className="border-dashed h-full">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                       <Receipt /> देणगी पावती
                    </CardTitle>
                     <CardDescription>
                        तुम्ही दिलेल्या देणगीची पावती येथे पहा.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center space-y-4">
                   <div className="relative w-full overflow-hidden rounded-lg">
                     <Image 
                        src="/donation-receipt.jpeg" 
                        alt="Donation Receipt"
                        width={400}
                        height={550}
                        className="object-contain"
                        data-ai-hint="donation receipt"
                     />
                   </div>
                </CardContent>
            </Card>
        </CardContent>
      </Card>
    </div>
  );
}

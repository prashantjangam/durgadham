
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { donationSchema, type DonationFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import { Gift, Banknote, QrCode } from "lucide-react";

export default function DonatePage() {
  const { toast } = useToast();

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
  });

  function onSubmit(data: DonationFormValues) {
    console.log(data);
    toast({
      title: "देणगी स्वीकारली!",
      description: `धन्यवाद ${data.name}, तुमची ₹${data.amount} ची देणगी स्वीकारण्यात आली आहे.`,
    });
    form.reset({name: '', contact: '', amount: undefined, paymentMethod: undefined});
  }

  return (
    <div className="container py-12 md:py-20">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Gift className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">देणगी द्या</CardTitle>
          <CardDescription>
            तुमचे छोटेसे योगदान मंदिराच्या जिर्णोद्धारासाठी मोठे कार्य करेल.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="form">फॉर्म भरा</TabsTrigger>
              <TabsTrigger value="bank">बँक ट्रान्सफर</TabsTrigger>
              <TabsTrigger value="qr">QR कोड</TabsTrigger>
            </TabsList>
            <TabsContent value="form">
                <p className="text-sm text-muted-foreground text-center my-4">
                    ऑनलाइन, रोख किंवा चेकद्वारे देणगी देण्यासाठी खालील फॉर्म भरा.
                </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>पूर्ण नाव</FormLabel>
                        <FormControl>
                          <Input placeholder="तुमचे नाव" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>संपर्क क्रमांक</FormLabel>
                        <FormControl>
                          <Input placeholder="उदा. ९८७६५४३२१०" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>देणगीची रक्कम (₹)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="उदा. १०१" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>देयकाची पद्धत</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="एक पद्धत निवडा" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="online">ऑनलाइन</SelectItem>
                            <SelectItem value="cash">रोख</SelectItem>
                            <SelectItem value="cheque">चेक</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    देणगी जमा करा
                  </Button>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="bank">
                 <Card className="mt-4 border-dashed">
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
                            <span className="font-mono text-foreground">स्टेट बँक ऑफ इंडिया</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                            <span className="font-medium text-muted-foreground">खातेधारकाचे नाव:</span>
                            <span className="font-mono text-foreground">डायमंड स्पोर्ट्स क्लब...</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                            <span className="font-medium text-muted-foreground">खाते क्रमांक:</span>
                            <span className="font-mono text-foreground">12345678901</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                            <span className="font-medium text-muted-foreground">IFSC कोड:</span>
                            <span className="font-mono text-foreground">SBIN0001234</span>
                        </div>
                        <p className="text-xs text-muted-foreground pt-2">
                           कृपया देणगी जमा केल्यानंतर, तुमची पावती मिळवण्यासाठी आम्हाला <a href="mailto:example@email.com" className="text-primary underline">example@email.com</a> वर कळवा.
                        </p>
                    </CardContent>
                 </Card>
            </TabsContent>
            <TabsContent value="qr">
                <Card className="mt-4 border-dashed">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline">
                           <QrCode /> QR कोडने पेमेंट करा
                        </CardTitle>
                         <CardDescription>
                            खालील QR कोड स्कॅन करून UPI द्वारे देणगी द्या.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center space-y-4">
                       <div className="relative w-64 h-64 border-4 border-primary rounded-lg p-2">
                         <Image 
                            src="https://picsum.photos/seed/qrcode/256/256" 
                            alt="QR Code for UPI Payment"
                            width={256}
                            height={256}
                            className="object-contain"
                            data-ai-hint="qr code"
                         />
                       </div>
                       <p className="font-bold text-lg text-primary">डायमंड स्पोर्ट्स क्लब</p>
                       <p className="text-muted-foreground text-center text-sm">
                            कोणतेही UPI ॲप वापरून स्कॅन करा (Google Pay, PhonePe, Paytm, इ.).
                       </p>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

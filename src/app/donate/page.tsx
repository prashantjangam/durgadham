"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { donationSchema, type DonationFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import { Gift } from "lucide-react";

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
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Gift className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">देणगी अर्ज</CardTitle>
          <CardDescription>
            तुमचे छोटेसे योगदान मंदिराच्या जिर्णोद्धारासाठी मोठे कार्य करेल.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
}

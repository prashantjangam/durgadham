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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { memberSchema, type MemberFormValues } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import { members } from "@/lib/data";
import { UserPlus, Users } from "lucide-react";

export default function MembersPage() {
  const { toast } = useToast();

  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
        name: "",
        email: "",
        phone: "",
        address: ""
    }
  });

  function onSubmit(data: MemberFormValues) {
    console.log(data);
    toast({
      title: "नोंदणी यशस्वी!",
      description: `धन्यवाद ${data.name}, तुमची सदस्य नोंदणी यशस्वीरित्या पूर्ण झाली आहे.`,
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
            <Card>
            <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <UserPlus className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">सदस्य नोंदणी</CardTitle>
                <CardDescription>
                डायमंड स्पोर्ट्स क्लबचे सदस्य होऊन या कार्यात सामील व्हा.
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>ईमेल</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="तुमचा ईमेल" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
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
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>पत्ता</FormLabel>
                        <FormControl>
                            <Textarea placeholder="तुमचा संपूर्ण पत्ता" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full" size="lg">
                    नोंदणी करा
                    </Button>
                </form>
                </Form>
            </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-3">
            <div className="text-center mb-8 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                समिती सदस्य
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                आमचे मार्गदर्शक आणि या मोहिमेचे आधारस्तंभ.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
                {members.map((member) => (
                <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                    <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-4 border-4 border-secondary"
                        data-ai-hint={member.imageHint}
                    />
                    <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

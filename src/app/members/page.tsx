"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { members } from "@/lib/data";

export default function MembersPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          समिती सदस्य
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          आमचे मार्गदर्शक आणि या मोहिमेचे आधारस्तंभ.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {members.map((member) => (
          <Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={120}
                height={120}
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
  );
}

"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { members, boardMembers } from "@/lib/data";
import { Users, UserSquare } from "lucide-react";

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
          <Card key={member.id} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 group">
             <div className="relative h-24 bg-secondary/20"></div>
             <CardContent className="pt-6 relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                 <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto border-4 border-background bg-background group-hover:scale-105 group-hover:shadow-md transition-transform duration-300"
                    data-ai-hint={member.imageHint}
                  />
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-bold font-headline mt-2">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-20">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
              <Users />
              कार्यकारिणी सदस्य
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
              {boardMembers.map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <UserSquare className="h-4 w-4 text-muted-foreground" />
                  <p className="text-muted-foreground font-medium">{name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}

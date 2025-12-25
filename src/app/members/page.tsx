"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { executiveCommittee, members, advisors, generalMembers } from "@/lib/data";
import { Users, UserSquare, Shield, Star, Crown } from "lucide-react";

const roleIcons: { [key: string]: React.ReactNode } = {
  "संचालक": <Crown className="h-4 w-4 text-secondary" />,
  "अध्यक्ष": <Star className="h-4 w-4 text-secondary" />,
  "उपाध्यक्ष": <Star className="h-4 w-4 text-secondary/80" />,
  "सेक्रेटरी": <Users className="h-4 w-4 text-secondary/80" />,
  "उपसेक्रेटरी": <Users className="h-4 w-4 text-secondary/70" />,
  "खजिनदार": <Users className="h-4 w-4 text-secondary/80" />,
  "उपखजिनदार": <Users className="h-4 w-4 text-secondary/70" />,
};


export default function MembersPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          समिती सदस्य
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          आमचे मार्गदर्शक आणि या मोहिमेचे आधारस्तंभ.
        </p>
      </div>

      {/* Executive Committee */}
      <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-8 flex items-center justify-center gap-3">
             <Shield className="h-8 w-8 text-primary" /> कार्यकारी मंडळ
          </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {executiveCommittee.map((member) => (
            <Card key={member.name} className="text-center border-0 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader className="p-4 bg-primary/10 rounded-t-lg">
                    <div className="flex items-center justify-center gap-2 text-primary font-bold">
                        {roleIcons[member.role] || <UserSquare className="h-4 w-4" />}
                        <h3 className="text-base font-headline">{member.role}</h3>
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <p className="text-lg font-semibold text-foreground">{member.name}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Members & Advisors */}
        <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                    <Users />
                    सदस्य
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {members.map((name) => (
                        <div key={name} className="flex items-center gap-3">
                        <UserSquare className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-muted-foreground font-medium">{name}</p>
                        </div>
                    ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                    <Shield />
                    सल्लागार
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                    {advisors.map((name) => (
                        <div key={name} className="flex items-center gap-3">
                        <UserSquare className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <p className="text-muted-foreground font-medium">{name}</p>
                        </div>
                    ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        
        {/* General Members */}
        <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
                <Users />
                सभासद
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 pt-4">
                {generalMembers.map((name) => (
                    <div key={name} className="flex items-center gap-3">
                    <UserSquare className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-muted-foreground font-medium text-sm">{name}</p>
                    </div>
                ))}
                </div>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}

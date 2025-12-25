
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Landmark, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "मुख्य पान" },
  { href: "/prasthavana", label: "प्रस्तावना" },
  { href: "/temple", label: "दुर्गामाता मंदिर" },
  { href: "/renovation", label: "जिर्णोद्धार मोहीम" },
  { href: "/donate", label: "देणगी" },
  { href: "/members", label: "सदस्य" },
  { href: "/events", label: "कार्यक्रम" },
  { href: "/gallery", label: "गॅलरी" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.om className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="hidden font-bold sm:inline-block font-headline">
              डायमंड स्पोर्ट्स क्लब ( संचालित )
            </span>
            <span className="hidden sm:inline-block text-xs text-muted-foreground">
              स्थापना १९७५
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/donate">देणगी द्या</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Icons.om className="h-8 w-8 text-primary" />
                <div>
                  <span className="font-bold font-headline">डायमंड स्पोर्ट्स क्लब ( संचालित )</span>
                  <p className="text-sm text-muted-foreground">स्थापना १९७५</p>
                </div>
              </Link>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
               <Button asChild className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/donate">देणगी द्या</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

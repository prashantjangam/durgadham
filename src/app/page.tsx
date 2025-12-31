"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  Gift,
  Building2,
  Wrench,
  Users,
  Calendar,
} from "lucide-react";
import { events } from "@/lib/data";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useEffect, useState } from "react";

/* ------------------ DATA ------------------ */

const heroImage = "/images/durgabannermain.png";
const hero2Image = "/images/mahishasurkilling.png";
const hero3Image = "/images/navdurga.png";

const galleryImages = [
  { id: "1", imageUrl: "/images/aai.png", description: "Festival" },
  { id: "2", imageUrl: "/images/four.jpeg", description: "Architecture" },
  { id: "3", imageUrl: "/images/six.jpeg", description: "Aarti" },
  { id: "4", imageUrl: "/images/devi.jpeg", description: "Celebration" },
];

const upcomingEvents = events.slice(0, 3);

/* ------------------ PAGE ------------------ */

export default function Home() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);

  const donationGoal = 5_000_000;
  const currentDonation = 1_250_000;
  const progress = (currentDonation / donationGoal) * 100;

  /* -------- reCAPTCHA -------- */
  useEffect(() => {
    if (!executeRecaptcha) return;

    (async () => {
      setLoading(true);
      try {
        const token = await executeRecaptcha("homepage_load");
        await fetch(`${process.env.VITE_API_BASE_URL}/verify-captcha`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [executeRecaptcha]);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="flex flex-col items-center text-white">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
            <p className="mt-4">Verifying reCAPTCHA…</p>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <Image src={heroImage} alt="Durga Mata" fill layout="fill"
  objectFit="fill" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </section>

      {/* ================= TITLE ================= */}
      <section className="w-full bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            डायमंड स्पोर्ट्स क्लब <br />
            ( संचालित ) <br />
            दुर्गामाता मंदिर आणि मित्र मंडळ
          </h1>

          <p className="text-lg text-foreground/80">
            दुर्गा माता मंदिराच्या जिर्णोद्धार कार्यात सामील व्हा.
            आपले योगदान अमूल्य आहे.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <Button asChild size="lg">
              <Link href="/donate">
                <Gift className="mr-2 h-5 w-5" /> देणगी द्या
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/renovation">
                अधिक जाणून घ्या <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= HERO 2 ================= */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image src={hero2Image} 
        layout="fill"
  objectFit="fill" alt="Mahishasur" fill className="object-cover" />
      </section>

      {/* ================= CARDS ================= */}
      <section className="w-full bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-3">
          <InfoCard
            icon={<Building2 />}
            title="दुर्गामाता मंदिर"
            link="/temple"
            text="मंदिराचा इतिहास व महत्त्व."
          />
          <InfoCard
            icon={<Wrench />}
            title="जिर्णोद्धार मोहीम"
            link="/renovation"
            text="नूतनीकरण व विस्तार योजना."
          />
          <InfoCard
            icon={<Users />}
            title="सदस्य व्हा"
            link="/members"
            text="मंडळाचे सदस्य बना."
          />
        </div>
      </section>

      {/* ================= HERO 3 ================= */}
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <Image src={hero3Image} 
        layout="fill"
  objectFit="fill" alt="Navdurga" fill className="object-cover" />
      </section>

      {/* ================= DONATION ================= */}
      <section className="w-full bg-secondary/10 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex justify-between font-bold">
                <span>एकत्रित: ₹{currentDonation.toLocaleString("en-IN")}</span>
                <span>ध्येय: ₹{donationGoal.toLocaleString("en-IN")}</span>
              </div>
              <Progress value={progress} className="h-4" />
              <p className="text-center text-muted-foreground">
                {progress.toFixed(2)}% पूर्ण
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="w-full bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary">
            आगामी कार्यक्रम
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e) => (
              <Card key={e.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={e.image} alt={e.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{e.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-primary">
                    <Calendar className="h-4 w-4" /> {e.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>{e.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="w-full bg-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-primary">
            गॅलरी
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------ SMALL CARD ------------------ */
function InfoCard({
  icon,
  title,
  text,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-primary">{icon}</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{text}</p>
        <Button asChild variant="link" className="px-0">
          <Link href={link}>
            सविस्तर वाचा <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

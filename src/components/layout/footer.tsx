import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center py-6 gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground text-center">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>
            डायमंड स्पोर्ट्स क्लब, वाघोबावाडी, पाईपलाईनच्या वरती, टेंभीपाडा, भांडुप (प.), मुंबई - ४०००७८
          </span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} डायमंड स्पोर्ट्स क्लब ( संचालित ) दुर्गामाता मंदिर आणि मित्र मंडळ. सर्व हक्क राखीव.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          नोंदणी क्र: महाराष्ट्र राज्य, मुंबई ८६ / १९९२ जी.बी.बी.एस.डी.
        </p>
      </div>
    </footer>
  );
}

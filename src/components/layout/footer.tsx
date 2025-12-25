
export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center py-6 gap-2">
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

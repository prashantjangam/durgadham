export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center py-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} दुर्गाधाम जिर्णोद्धार. सर्व हक्क राखीव.
        </p>
      </div>
    </footer>
  );
}

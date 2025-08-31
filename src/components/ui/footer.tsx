import chietaLogo from "@/assets/chieta-logo.jpeg";
export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <img src={chietaLogo} alt="Chieta Logo" className="h-10 w-auto mb-2" style={{ maxHeight: 48 }} />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chieta Desk System. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
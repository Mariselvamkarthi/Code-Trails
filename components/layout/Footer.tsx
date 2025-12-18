import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground tracking-wide">
            <p>© {currentYear} Mariselvam</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-opacity duration-200 hover:opacity-80"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-opacity duration-200 hover:opacity-80"
              aria-label="Behance"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


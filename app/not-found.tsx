import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-display-xl mb-6">404</h1>
        <h2 className="text-display-lg mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            Go Home
          </Button>
          <Button href="/work" variant="secondary">
            View Work
          </Button>
        </div>
      </div>
    </div>
  );
}


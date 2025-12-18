export default function Loading() {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="animate-pulse">
        <div className="h-12 bg-muted rounded-sm mb-4 w-1/3"></div>
        <div className="h-6 bg-muted rounded-sm mb-16 w-1/2"></div>
        <div className="space-y-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-b border-border pb-8">
              <div className="h-8 bg-muted rounded-sm mb-4 w-1/4"></div>
              <div className="h-4 bg-muted rounded-sm mb-2"></div>
              <div className="h-4 bg-muted rounded-sm w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


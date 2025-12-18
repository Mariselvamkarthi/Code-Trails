export default function Loading() {
  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="max-w-4xl animate-pulse">
        <div className="h-12 bg-muted rounded-sm mb-6 w-3/4"></div>
        <div className="h-6 bg-muted rounded-sm mb-8 w-1/2"></div>
        <div className="space-y-8">
          <div className="h-8 bg-muted rounded-sm w-1/3"></div>
          <div className="h-4 bg-muted rounded-sm"></div>
          <div className="h-4 bg-muted rounded-sm w-5/6"></div>
        </div>
      </div>
    </div>
  );
}


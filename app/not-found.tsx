import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-700 mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

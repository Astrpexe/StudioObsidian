import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#131313] text-[#e2e2e2]">
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="text-lg mb-8">Could not find requested resource</p>
      <Link href="/" className="text-[#ffffff] underline">
        Return Home
      </Link>
    </div>
  );
}

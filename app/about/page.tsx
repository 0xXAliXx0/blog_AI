import Link from 'next/link';

export default function About() {
  return (
    <div className="p-24">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-2">This is the about page of my application.</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}

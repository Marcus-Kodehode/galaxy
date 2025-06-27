"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl hover:text-blue-400 transition">Home</Link>
          <Link href="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
          <Link href="/info" className="hover:text-blue-400 transition">Info</Link>
          <Link href="/overview" className="hover:text-blue-400 transition">Overview</Link>
        </div>
        <span className="italic text-sm text-gray-400">Melkeveien Galaxy Explorer</span>
      </nav>
    </header>
  );
}

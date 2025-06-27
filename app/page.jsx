import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/starry.jpg"
          alt="Melkeveien logo"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-4xl font-bold mb-6 text-center">
          Velkommen til Melkeveien Explorer
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-center">
          Dette er en side om Melkeveien og dens stjerner og planeter. Utforsk
          galaksen vår, søk og filtrer blant planeter og stjerner, og se flotte
          bilder fra NASA sitt arkiv.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="/planets"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Utforsk Planeter
          </a>
          <a
            href="/stars"
            className="bg-yellow-500 text-white px-6 py-3 rounded shadow hover:bg-yellow-600 transition"
          >
            Utforsk Stjerner
          </a>
          <a
            href="/gallery"
            className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-900 transition"
          >
            Galleri
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Melkeveien. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

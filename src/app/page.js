import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen bg-[url('/bg.jpg')] bg-cover flex-col items-center justify-between p-24">
      <div className="backdrop-blur-md absolute inset-0" />
      <div className="flex w-full justify-between items-center z-10">
        <div className="bg-black/80 rounded-3xl h-96 p-10 text-white text-6xl">
          Landing page hai ye!
        </div>
        <div className="relative w-96 h-96  bg-cover">
          <Image
            src="/circle.png"
            alt="Me standing on a cliff with"
            height={600}
            width={600}
            objectFit="cover"
            className="absolute animate-spin w-full h-full"
          />
          <Image
            src="/ssiu.png"
            alt="Me standing on a cliff with"
            height={600}
            width={600}
            objectFit="cover"
            className="absolute animate-pulse w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button, MovingBorder } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="backdrop-blur-md absolute inset-0" /> */}
      <div className="flex w-full justify-between items-center z-10">
        {/* <MovingBorder duration={1} rx="30%" ry="30%">
          <div className="bg-gray-600/50 uppercase font-bold rounded-3xl w-[750px] p-10 text-white text-8xl">
            developer KHandelwal
          </div>
        </MovingBorder> */}
        <div
          className="bg-gray-600/50 uppercase font-bold
            rounded-3xl w-[750px] text-white text-8xl"
        >
          <Button
            borderRadius="1rem"
            className="uppercase text-8xl p-10 flex flex-col"
          >
            <TypewriterEffectSmooth
              words={[
                {
                  text: "Developer",
                },
                {
                  text: "Khushal",
                },
              ]}
              className="text-8xl"
            />
            {/* <TypewriterEffectSmooth
              words={[
                {
                  text: "Khushal",
                },
              ]}
              className="text-8xl"
            /> */}
          </Button>
        </div>

        <div className="relative w-96 h-96  bg-cover">
          <Image
            src="/circle.png"
            alt="Me standing on a cliff with"
            height={600}
            width={600}
            objectFit="cover"
            className="absolute animate-spin spin w-full h-full"
          />
          <Image
            src="/ssiu.png"
            alt="Me standing on a cliff with"
            height={600}
            width={600}
            objectFit="cover"
            className="flex justify-center text-center
            hover:animate-pulse items-center text-7xl font-bold italic w-full h-full"
          />
          {/* <div>GDSC<br/>SSIU</div> */}
        </div>
      </div>
      <BackgroundBeams />
    </main>
  );
}

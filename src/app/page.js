import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button, MovingBorder } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-96 flex-col items-center justify-between px-24">
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
                  text: "Cloud",
                },
                {
                  text: "Carnival",
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
        <CardContainer className="inter-var relative w-96 h-96 bg-cover">
          <CardBody className="bg-gray-700/40 rounded-3xl">
            <CardItem
              translateZ={20}
              className="absolute w-full h-full
                border-[20px] border-separate border-double rounded-3xl border-t-yellow-500 
                border-l-green-500 border-r-blue-500 border-b-red-600"
            ></CardItem>
            <CardItem translateZ={50}>
              <Image
                src="/ssiu.png"
                alt="Me standing on a cliff with"
                height={600}
                width={600}
                className="flex justify-center text-center z-20
              hover:animate-pulse items-center text-7xl font-bold italic w-full h-full"
              />
            </CardItem>
            {/* <Image
            src="/circle.png"
            alt="Me standing on a cliff with"
            height={600}
            width={600}
            className="absolute animate-spin spin w-full h-full"
          /> */}
            {/* <div>GDSC<br/>SSIU</div> */}
          </CardBody>
        </CardContainer>
      </div>
      <BackgroundBeams />
    </main>
  );
}

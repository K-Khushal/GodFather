import AmongUs from "@/components/particles/AmongUs";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col md:flex-row items-center justify-center md:gap-10 p-24 md:py-8 text-white">
      {/* <Button borderRadius="1rem" className="uppercase md:p-10 flex flex-col "> */}
      <TypewriterEffectSmooth
        words={[
          {
            text: "Cloud",
          },
          {
            text: "Carnival",
          },
        ]}
        className="p-4 rounded-3xl uppercase text-center border-double border-white border-[20px] text-3xl md:text-9xl bg-blue-950/70 md:min-w-[200px] md:max-w-[900px]"
      />
      <CardContainer className="inter-var relative w-64 h-64 md:w-80 md:h-80 bg-cover">
        <CardBody className="bg-gray-700/40 h-full rounded-3xl">
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
              height={800}
              width={800}
              className="flex justify-center text-center z-20 hover:animate-pulse items-center 
                text-7xl font-bold italic w-full h-full"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      <a
        href="https://gdsc.community.dev/events/details/developer-student-clubs-swarrnim-startup-innovation-university-gandhinagar-presents-cloud-carnival/"
        className="p-4 bg-secondary rounded-2xl flex gap-2 items-center w-"
      >
        Register <FaArrowRight size={16} />
      </a>
    </main>
  );
}

"use client";

import React, { useCallback } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button, MovingBorder } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import AmongUs from "@/components/particles/AmongUs";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "@/components/particles/particles.json";

export default function Home() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async () => {}, []);

  return (
    <main className="flex min-h-screen md:min-h-1 flex-col items-center justify-between px-24 md:py-8">
      <AmongUs/>
      {/* <ParticlesContainer/> */}
      {/* <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      /> */}
      {/* <div className="backdrop-blur-md absolute inset-0" /> */}
      <div className="flex flex-col md:flex-row w-full mt-20 md:mt-0  justify-center md:justify-between items-center z-10">
        {/* <MovingBorder duration={1} rx="30%" ry="30%">
          <div className="bg-gray-600/50 uppercase font-bold rounded-3xl w-[750px] p-10 text-white text-8xl">
            developer KHandelwal
          </div>
        </MovingBorder> */}
        <div
          className=" uppercase font-bold
            rounded-3xl  md:w-[650px] text-white w-full"
        >
          <Button
            borderRadius="1rem"
            className="uppercase md:p-10 flex flex-col "
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
              className="px-4 text-3xl md:text-7xl"
            />
          </Button>
          <div className="m-2 my-10 flex">
            <a
              href="https://gdsc.community.dev/events/details/developer-student-clubs-swarrnim-startup-innovation-university-gandhinagar-presents-cloud-carnival/"
              className="p-4 bg-secondary rounded-2xl flex gap-2 items-center w-"
            >
              Register <FaArrowRight size={16} />
            </a>
          </div>
        </div>
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
      </div>
      {/* <BackgroundBeams /> */}
    </main>
  );
}

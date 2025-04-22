import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section className="my-5">
      <div className="border-b-2 border-black pb-8">
        <div className="w sm:w-[530px] space-y-3">
          <h2 className="text-2xl">Full Stack Developer</h2>
          <p className="text-lg">
            I have experience working with frameworks like Next.js and Laravel.
            Over time, I’ve worked across a wide range of technology stacks,
            including the MERN stack.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-14 mt-8">
        <div className="text-lg lg:!my-auto leading-relaxed space-y-3 mt-10 lg:mt-0">
          <p>
            Hello. I am a Web Developer with hands-on experience in building
            production-grade applications. In 2024, I joined Innovative
            Marketing Services as an intern, and worked there for a year.
          </p>
          <p>
            I am set to graduate this June with a Bachelor&apos;s degree in Computer
            Science from the Institute of Management Sciences, Peshawar.
          </p>
          <p>
            My interests span advanced frontend and backend development, AI
            engineering, and contributing to open-source communities. I
            primarily work with TypeScript, JavaScript, and Python.
          </p>
          <p>I live in Peshawar.</p>
        </div>
        <Image
          src="/images/hamza_prop.jpeg"
          alt="Hamza Ali"
          width={200}
          height={200}
          className="h-fit w-[340px] sm:w-[560px] mx-auto my-auto lg:h-[500px] lg:w-[500px] xl:w-[560px] xl:h-[560px] object-contain"
        />
      </div>
    </section>
  );
};

export default Introduction;

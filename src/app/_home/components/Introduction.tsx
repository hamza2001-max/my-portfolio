import ImageComponent from "./ImageComponent";

const Introduction = () => {

  return (
    <section className="my-5">
      <div className="border-b-2 border-black pb-8">
        <div className="w-full sm:w-[530px] space-y-3">
          <h2 className="text-lg font-medium">Full Stack Developer</h2>
          <p className="text-lg">
            Experienced in working with frameworks like Next.js and Laravel.
            Over time, I&apos;ve worked across a wide range of technology stacks,
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
        <ImageComponent/>
      </div>
    </section>
  );
};

export default Introduction;
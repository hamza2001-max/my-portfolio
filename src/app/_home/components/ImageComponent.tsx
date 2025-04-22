"use client";
import { useState } from "react";
import ImageSkeleton from "./ImageSkeleton";
import Image from "next/image";

const ImageComponent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && <ImageSkeleton />}
      <Image
        src="/images/hamza_prop.jpeg"
        alt="Hamza Ali"
        width={200}
        height={200}
        priority
        onLoad={() => setImageLoaded(true)}
        className={`h-fit w-[340px] sm:w-[560px] mx-auto my-auto lg:h-[500px] lg:w-[500px] xl:w-[560px] xl:h-[560px] object-contain ${
          !imageLoaded && "hidden"
        }`}
      />
    </>
  );
};

export default ImageComponent;

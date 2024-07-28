"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function DinamicImage() {
  const [isWidth1024, setisWidth1024] = useState(false);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    const changeImage = () => {
      if (window.innerWidth < 1024) {
        setisWidth1024(true);
      } else {
        setisWidth1024(false);
      }
    };
    changeImage();

    window.addEventListener("resize", changeImage);

    setIsTrue(true);
    return () => {
      window.removeEventListener("resize", changeImage);
    };
  }, []);

  return (
    <>
      {isTrue ? (
        isWidth1024 ? (
          <Image
            src="/main-img-lg.png"
            alt="main-img"
            width={420}
            height={550}
            className="mx-auto"
          />
        ) : (
          <Image src="/main-img.png" alt="main-img" width={520} height={750} />
        )
      ) : (
        <Skeleton className="m-auto mb-[30px] mr-[20px] h-[270px] w-[210px] rounded-2xl" />
      )}
    </>
  );
}

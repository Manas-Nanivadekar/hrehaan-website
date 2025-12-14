import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="absolute top-20 right-12 m-4 flex flex-col justify-center items-center space-y-4 hidden md:flex">
      <Link href="https://x.com/hrehaaniyer">
        <Image
          className="h-8 w-8 hover:scale-110 cursor-pointer"
          src="/X.png"
          alt="Twitter/X"
          height={32}
          width={32}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/hrehaan-swaminathan-iyer-26b738284/">
        <Image
          className="h-8 w-8 hover:scale-110 cursor-pointer"
          src="/in.png"
          alt="LinkedIn"
          height={32}
          width={32}
        />
      </Link>
    </div>
  );
};

export default Socials;

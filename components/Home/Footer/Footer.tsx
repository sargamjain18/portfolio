import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-16 bg-[#0f0715]">
      <div className="flex items-center justify-center gap-8 text-white font-bold">
        <Link href={"#home"}>Home.</Link>
        <Link href={"#about"}>About.</Link>
        <Link href={"#projects"}>Project.</Link>
        <Link href={"#contact"}>Contact.</Link>
      </div>
      <p className="mt-6 text-center text-gray-400">
        @ 2025 All right reserved
      </p>
    </div>
  );
};

export default Footer;

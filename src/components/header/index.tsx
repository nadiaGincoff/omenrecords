"use client";
import type {HeaderProps} from "@/types";

import Image from "next/image";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

import MenuItems from "./menuItems";
import SocialMediaButtons from "./socialMediaButtons";

// eslint-disable-next-line react/function-component-definition
const MobileHeader: React.FC = () => {
  return (
    <div className="pl-16px pr-16px pt-21px pb-16px flex w-full items-center justify-between">
      <h1 className="text-6xl font-extrabold leading-3">OMEN.</h1>
      <MenuItems size="text-md" />
      <SocialMediaButtons size={5} />
    </div>
  );
};

function DesktopHeader() {
  return (
    <div className="pt-32px flex w-full items-center justify-between">
      <Link href="/">
        <h4 className="text-4xl">ömenrecords</h4>
      </Link>
      <MenuItems size="text-2xl" />
      <SocialMediaButtons size={25} />
    </div>
  );
}

export default function Header() {
  const isMobile = useMediaQuery({maxWidth: "640px"});

  return (
    <header className="flex w-full max-w-full pt-8">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}

import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon } from "@heroicons/react/outline";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header>
      <HeaderItem title="Home" Icon={HomeIcon} />
      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;

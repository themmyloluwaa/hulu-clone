import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HeaderProps } from "../../types";
import { ICONS } from "../../utils/icons";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {ICONS.map((icon, i) => (
          <HeaderItem title={icon.title} Icon={icon.Icon} key={i} />
        ))}
      </div>
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

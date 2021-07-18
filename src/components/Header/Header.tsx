import React from "react";
import Image from "next/image";
type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <header>
      <h1>This is the header</h1>
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

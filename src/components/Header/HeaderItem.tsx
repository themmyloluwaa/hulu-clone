import React from "react";

type IconProps = {
  className: string;
};

type Props = {
  title: string;
  Icon: React.FC<IconProps>;
};

const HeaderItem: React.FC<Props> = ({ title, Icon }) => {
  return (
    <div className="flex mt-5 flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100  hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;

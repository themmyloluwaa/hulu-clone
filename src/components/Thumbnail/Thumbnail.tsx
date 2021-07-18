import Image from "next/image";
import React from "react";
import { ResultProps } from "../../types";
import { ThumbUpIcon } from "@heroicons/react/outline";
const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Thumbnail: React.FC<ResultProps> = (props) => {
  console.log(props);
  const IMAGE_URL = `${BASE_URL}${
    props.backdrop_path ||
    props.poster_path ||
    `${BASE_URL}${props.poster_path}`
  }`;

  return (
    <div className=" p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image layout="responsive" src={IMAGE_URL} height={1080} width={1920} />
      <div className="p-2">
        <p className="truncate max-w-md">{props.overview}</p>
        <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {props.title || props.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {props.media_type && `${props.media_type} . `}
          {props.release_date || props.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {props.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;

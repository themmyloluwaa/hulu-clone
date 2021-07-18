import React from "react";
import FlipMove from "react-flip-move";

import { ResultProps } from "../../types";
import Thumbnail from "../Thumbnail";

type Props = {
  results: ResultProps[];
};
const Result: React.FC<Props> = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex 3xl:flex-wrap 3xl:justify-center">
      {results.map((result, i) => (
        <Thumbnail key={result.id} {...result} />
      ))}
    </FlipMove>
  );
};

export default Result;

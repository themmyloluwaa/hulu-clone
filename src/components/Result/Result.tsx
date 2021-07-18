import React from "react";

import { ResultProps } from "../../types";
import Thumbnail from "../Thumbnail";

type Props = {
  results: ResultProps[];
};
const Result: React.FC<Props> = ({ results }) => {
  return (
    <div>
      {results.map((result, i) => (
        <Thumbnail key={i} {...result} />
      ))}
    </div>
  );
};

export default Result;

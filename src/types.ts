export type IconProps = {
  className: string;
};

export type HeaderItemProps = {
  title: string;
  Icon: React.FC<IconProps>;
};

export type HeaderProps = {};

export type ResultProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type HomeProps = {
  results: ResultProps[];
};

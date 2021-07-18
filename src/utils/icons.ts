import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { HeaderItemProps } from "../types";

export const ICONS: HeaderItemProps[] = [
  {
    title: "HOME",
    Icon: HomeIcon,
  },
  {
    title: "TRENDING",
    Icon: LightningBoltIcon,
  },
  {
    title: "VERIFIED",
    Icon: BadgeCheckIcon,
  },
  {
    title: "COLLECTIONS",
    Icon: CollectionIcon,
  },
  {
    title: "SEARCH",
    Icon: SearchIcon,
  },
  {
    title: "ACCOUNT",
    Icon: UserIcon,
  },
];

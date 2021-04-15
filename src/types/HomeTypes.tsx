import type { Images } from "./CommonTypes";

export type NavigationType = {
  image: Images;
};

export type ServerType = {
  image: Images;
};

export type Items = {
  subTitle: string;
  description: string;
  src: string;
  alt: string;
};

export type LatestType = {
  title: string;
  src: string;
  alt: string;
  items: Items[];
};

export type HomeBody = {
  NavigationType;
  ServerType;
  LatestType;
};

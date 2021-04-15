import type { Images } from "./CommonTypes";

export type HeroType = {
  image: Images;
};

export type InfoType = {
  title: string;
  text: string;
  comment: string;
  images: Images[];
};

export type Content = {
  title: string;
  text: string;
  comment: string;
  subComment: string;
  subText: string;
};

export type OurMissionType = {
  image: Images;
  content: Content[];
};

export type Text = {
  text: string;
};

export type FooterType = {
  title: string;
  text: Text[];
};

export type Body = {
  InfoType;
  OurMissionType;
  FooterType;
};

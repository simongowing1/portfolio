import { Image } from "./Image.types";

export interface Video {
    hd1920: string;
    hd1280: string;
    sd960: string;
    sd640: string;
    posterImage?: Image;
    mobilePosterImage?: Image;
    autoplay?: boolean;
  }
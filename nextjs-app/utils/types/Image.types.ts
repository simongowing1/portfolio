import { SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Image = SanityImageSource & {
    asset?: {
      _ref: string;
      _type: string;
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
  }
import { Asset } from "./Asset.types";
import { TypeBase } from "./TypeBase.types";

export interface Image extends TypeBase {
    alt: string;
    asset: Asset;
    fileUrl: string;
    hotspot?: {
      x: number;
      y: number;
    };
    crop: {
      top: number;
      left: number;
      right: number;
      bottom: number;
    };
    caption?: string;
  }
export interface Asset {
    _ref: string;
    _type: string;
    blurImage?: string;
    fileUrl: string;
    dimensions?: {
      aspectRatio: number;
      height: number;
      width: number;
    };
  }
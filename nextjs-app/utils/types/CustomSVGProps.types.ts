import {DetailedHTMLProps, HTMLAttributes} from 'react';

export type CustomSVGProps = DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> & {
  /*
   * Add optionally required svg properties here:
   */
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  foregroundColor?: string;
  height?: string;
  width?: string;
};
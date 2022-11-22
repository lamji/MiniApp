/* eslint-disable @typescript-eslint/no-explicit-any */
import { DetailsDataIn } from './common';
export interface IDetails {
  dataLoad?: { [key: string]: any }[];
  dataIn: {
    styles?: React.CSSProperties;
    DetailsDataIn?: DetailsDataIn;
  };
}

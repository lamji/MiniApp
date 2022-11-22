/* eslint-disable @typescript-eslint/no-explicit-any */
import { DetailsDataIn } from './common';
export interface IMembershipDetails {
  dataIn: {
    /** Variant styles */
    styles?: React.CSSProperties;
    memberInfoDataIn?: DetailsDataIn;
    userInfoDataIn?: DetailsDataIn;
    addressInfoDataIn?: DetailsDataIn;
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type DetailsDataLoad = {
  id: number | string;
  fieldName: string;
  fieldValue: string;
};

export type DetailsDataIn = {
  dataIn?: any;
  dataLoad?: { [key: string]: any }[];
  title?: string;
  titleContainerStyle: React.CSSProperties;
  titleTextStyle: React.CSSProperties;
  infoContainerStyle: React.CSSProperties;
  fieldNameContainerStyle: React.CSSProperties;
  fieldNameTextStyle: React.CSSProperties;
  fieldValueContainerStyle: React.CSSProperties;
  fiedValueTextStyle: React.CSSProperties;
  style: React.CSSProperties;
};

export type ProfileDataIn = {
  membershipDetailsDataIn?: {
    style?: React.CSSProperties;
    memberInfoDataIn?: DetailsDataIn;
    userInfoDataIn?: DetailsDataIn;
    addressInfoDataIn?: DetailsDataIn;
  };
  title?: string;
  buttonGroupLabels?: {
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
  };
  footerText?: string;
  footerLinkText?: string;
  showCard?: boolean;
  showBarcode?: boolean;
  showButtonGroup?: boolean;
  onNavHomePress?: () => void;
  onFooterLinkPress?: () => void;
  onRenewPress?: () => void;
  onUnlinkPress?: () => void;
  customCardDetailsComponent?: React.ReactNode;
  customMemberDetailsComponent?: React.ReactNode;
  customFooterComponent?: React.ReactNode;
  containerStyle?: React.CSSProperties;
  cardInfoContainerStyle?: React.CSSProperties;
  titleContainerStyle?: React.CSSProperties;
  titleTextStyle?: React.CSSProperties;
  cardContainerStyle?: React.CSSProperties;
  barcodeContainerStyle?: React.CSSProperties;
  buttonGroupContainerStyle?: React.CSSProperties;
  buttonStyles?: {
    primaryButtonStyle?: React.CSSProperties;
    primaryLabelStyle?: React.CSSProperties;
    secondaryButtonStyle?: React.CSSProperties;
    secondaryLabelStyle?: React.CSSProperties;
  };
};

export type MembershipProfileDataLoad = {
  baseURL: {
    membership: string;
  };
  endpoints: {
    getMembershipDetails: any;
  };
  token: string;
  userData: {
    [key: string]: any;
  };
};

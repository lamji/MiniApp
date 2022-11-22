/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMembershipProfile {
  dataLoad: {
    /** Initial value of counter */
    value: number;
  };
  dataIn: {
    action?: {
      onRenew: (args: any) => void;
      onUnlink: (args: any) => void;
    };
    styles?: {
      root: React.CSSProperties;
      ScrollView: React.CSSProperties;
      cardInfoContainer: React.CSSProperties;
      cardContainer: React.CSSProperties;
      title: React.CSSProperties;
      titleContainerStyle: React.CSSProperties;
      barcodeContainer: React.CSSProperties;
      buttonGroupContainer: React.CSSProperties;
      button: React.CSSProperties;
      buttonGroupLabel: React.CSSProperties;
      divider: React.CSSProperties;
      footerContainer: React.CSSProperties;
      footer: React.CSSProperties;
    };
    customCardDetailsComponent?: string;
    showCard?: boolean;
    showBarcode?: boolean;
    showButtonGroup?: boolean;
    buttonGroupLabels?: {
      primaryButtonLabel?: string;
      secondaryButtonLabel?: string;
    };
    cardInfo: {
      details: {
        businessName?: string;
        expDate?: string;
        name?: string;
        number?: string;
      };
      styles?: {
        card: React.CSSProperties;
        cardNumber: React.CSSProperties;
        details: React.CSSProperties;
        exp: React.CSSProperties;
        expLabel: React.CSSProperties;
        expandContainer: React.CSSProperties;
        expirationContainer: React.CSSProperties;
        footer: React.CSSProperties;
        imageContainer: React.CSSProperties;
        nameContainer: React.CSSProperties;
        nameExpirationContainer: React.CSSProperties;
      };
      type: string;
    };
  };
  /** return value of count */
  dataOut: (arg: number) => void;
}

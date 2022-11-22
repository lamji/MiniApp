/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPendingMembership {
  dataIn: {
    styles?: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Theme?: React.CSSProperties;
      root?: React.CSSProperties;
      contentContainer?: React.CSSProperties;
      titleContainer?: React.CSSProperties;
      title?: React.CSSProperties;
      messageContainer?: React.CSSProperties;
      message: React.CSSProperties;
      buttonLabel?: React.CSSProperties;
    };
    buttonLabel?: string;
    message?: string;
    action?: {
      onGoToHomepagePress: () => void;
    };
  };
}

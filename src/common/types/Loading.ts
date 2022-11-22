/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILoading {
  dataIn: {
    status?: boolean | undefined;
    styles?: {
      backdrop?: React.CSSProperties;
      label?: React.CSSProperties;
    };
    label?: string;
  };
  /** return value of count */
  dataOut: (arg: number) => void;
}

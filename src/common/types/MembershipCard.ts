/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMembershipCard {
  dataIn?:
    | {
        styles?:
          | {
              card?: React.CSSProperties;
              expandContainer?: React.CSSProperties;
              imageContainer?: React.CSSProperties;
              cardNumber?: React.CSSProperties;
              footer?: React.CSSProperties;
              details?: React.CSSProperties;
              nameExpirationContainer?: React.CSSProperties;
              nameContainer?: React.CSSProperties;
              expirationContainer?: React.CSSProperties;
              expLabel?: React.CSSProperties;
              exp?: React.CSSProperties;
            }
          | any;
        type: string;
        details:
          | {
              number: string;
              businessName?: string;
              name: string;
              expDate: string | null;
            }
          | any;
      }
    | any;
}

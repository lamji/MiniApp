/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IExpandCardModal {
  visible: boolean;
  fullScreen: boolean;
  styles?: any;
  details: {
    number: string;
    businessName?: string;
    name: string;
    expDate: string | null;
  };
  type: 'premium' | 'business';
}

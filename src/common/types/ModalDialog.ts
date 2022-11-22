export interface IModalDialog {
  open: boolean;
  fullScreen?: boolean;
  headerComponent: JSX.Element;
  children: React.ReactNode;
  bottomModalBodyStyle?: React.CSSProperties;
  bottomModalHeaderStyle?: React.CSSProperties;
}

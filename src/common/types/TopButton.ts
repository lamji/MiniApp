export interface ITapButtonProps {
  // theme?:
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: string;
  disabled?: boolean;
}

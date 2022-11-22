export interface IText {
  /**
   * Text contents
   */
  label: string | number;
  /**
   * How large should the text be?
   */
  size?: 'small' | 'medium' | 'large';
}

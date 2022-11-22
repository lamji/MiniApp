import { IText } from 'common/types';
import classnames from 'classnames';
import './styles.css';

export const Text = (props: IText) => {
  const { label, size = 'medium' } = props;

  const textClass = classnames({
    text: true,
    [size]: true,
  });

  return <div className={textClass}>{label}</div>;
};

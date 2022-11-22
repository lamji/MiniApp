import { IMembershipProfile } from 'common/types';
import { useStyles } from 'Styles/membershipProfile';

function useViewModel(props: IMembershipProfile) {
  const { dataIn } = props;
  const classes = useStyles(dataIn?.styles);

  return {
    membershipProfileTheme: dataIn?.styles?.Theme,
    classes,
  };
}

export default useViewModel;

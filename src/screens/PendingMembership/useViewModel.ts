import { IPendingMembership } from 'common/types';
import { DefaultTheme } from 'Styles/DefaultThemeColors';
import { useStyles } from 'Styles/membershipPending';

function useViewModel(props: IPendingMembership) {
  const { dataIn } = props;
  const theme = DefaultTheme();
  const classes = useStyles({
    dataIn: dataIn?.styles,
    theme: theme,
  });

  const onGoToHomepagePress = () => {
    dataIn?.action?.onGoToHomepagePress();
  };

  return {
    membershipPendingTheme: dataIn?.styles?.Theme,
    classes,
    theme,
    onGoToHomepagePress,
    buttonLabel: dataIn?.buttonLabel,
    message: dataIn?.message,
  };
}

export default useViewModel;

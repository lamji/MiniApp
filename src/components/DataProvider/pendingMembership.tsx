import { ComponentType } from 'react';
import { IPendingMembership } from 'common/types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useViewModel from 'screens/PendingMembership/useViewModel';

export const PendingMembershipeProvider = (WrappedComponent: ComponentType<IPendingMembership>) => {
  const Component = (props: IPendingMembership) => {
    const { membershipPendingTheme } = useViewModel(props);
    const { dataLoad, dataIn } = props;
    const theme = createTheme({
      ...membershipPendingTheme,
    });

    const loaded = dataLoad && dataIn;
    return (
      <ThemeProvider theme={theme}>{loaded ? <WrappedComponent {...props} /> : null}</ThemeProvider>
    );
  };

  return Component;
};

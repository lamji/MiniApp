import { ComponentType } from 'react';
import { IMembershipProfile } from 'common/types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useViewModel from 'screens/MembershipProfile/useViewModel';

export const MembershipProfileProvider = (WrappedComponent: ComponentType<IMembershipProfile>) => {
  const Component = (props: IMembershipProfile) => {
    const { membershipProfileTheme } = useViewModel(props);
    const theme = createTheme({
      ...membershipProfileTheme,
    });

    const { dataLoad, dataIn } = props;

    const loaded = dataLoad && dataIn;
    return (
      <ThemeProvider theme={theme}>{loaded ? <WrappedComponent {...props} /> : null}</ThemeProvider>
    );
  };

  return Component;
};

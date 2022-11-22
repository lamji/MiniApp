/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme } from './DefaultThemeColors';
export const useStyles = (propsDataIn: any) => {
  const theme = DefaultTheme();
  return {
    container: {
      paddingHorizontal: 20,
    },
    infoContainer: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingBottom: 2,
      display: 'flex',
      ...propsDataIn?.titleContainerStyle,
    },
    fieldNameContainer: {
      width: '50%',
      ...propsDataIn?.fieldNameContainerStyle,
    },
    fieldName: {
      fontSize: 14,
      fontWeight: '400',
      color: theme?.colors?.darkGray,
      ...propsDataIn?.fieldNameTextStyle,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.colors.text,
      ...propsDataIn?.titleTextStyle,
    },
    titleContainer: {
      paddingBottom: '21px',
      ...propsDataIn?.titleContainerStyle,
    },
    valueContainer: {
      width: '50%',
      alignItems: 'flex-start',
      flexDirection: 'row',
      ...propsDataIn?.fieldValueContainerStyle,
    },
    value: {
      fontSize: 14,
      fontWeight: '400',
      color: theme.colors.text,
      ...propsDataIn?.dataIn?.fiedValueTextStyle,
    },
  };
};

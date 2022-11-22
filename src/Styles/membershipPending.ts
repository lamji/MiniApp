/* eslint-disable @typescript-eslint/no-explicit-any */

export const useStyles = (propsDataIn: any) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: {
      xs: 3,
      sm: 10,
    },
    backgroundColor: propsDataIn?.theme.colors?.lightGray,
    ...propsDataIn?.dataIn?.root,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    ...propsDataIn?.dataIn?.contentContainer,
  },
  titleContainer: {
    paddingHorizontal: 10,
    ...propsDataIn?.dataIn?.titleContainer,
  },
  title: {
    fontWeight: '500',
    textAlign: 'center',
    color: propsDataIn?.theme?.colors?.text,
    ...propsDataIn?.dataIn?.title,
  },
  messageContainer: {
    padding: '10px',
    ...propsDataIn?.dataIn?.messageContainer,
  },
  message: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: propsDataIn?.theme?.colors?.darkGray,
    ...propsDataIn?.dataIn?.message,
  },
  buttonLabel: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
    borderRadius: propsDataIn?.theme?.colors?.buttonRadius,
    height: propsDataIn?.theme?.colors?.modalButtonHeight,
    backgroundColor: propsDataIn?.theme.colors.primary,
    color: propsDataIn?.theme?.colors?.white,
    '&:hover': {
      backgroundColor: propsDataIn?.theme.colors.primary,
    },
    ...propsDataIn?.dataIn?.buttonLabel,
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any */

export const useStyles = (propsDataIn: any) => ({
  root: {
    flex: 1,
    ...propsDataIn?.root,
  },
  ScrollView: {
    flexGrow: 1,
    backgroundColor: 'rgb(255, 251, 255)',
    ...propsDataIn?.ScrollView,
  },
  cardInfoContainer: {
    padding: '20px',
    justifyContent: 'center',
    ...propsDataIn?.cardInfoContainer,
  },
  cardContainer: {
    padding: '20px 0px',
    ...propsDataIn?.cardContainer,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    ...propsDataIn?.title,
  },
  barcodeContainer: {
    height: 54,
    justifyContent: 'center',
    alignSelf: 'center',
    ...propsDataIn?.barcodeContainer,
  },
  buttonGroupContainer: {
    paddingTop: '20px',
    paddingBottom: '10px',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    ...propsDataIn?.buttonGroupContainer,
  },
  button: {
    width: '48%',
    ...propsDataIn?.button,
  },
  buttonGroupLabel: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    ...propsDataIn?.buttonGroupContainer,
  },
  divider: {
    borderBottomWidth: 1,
    ...propsDataIn?.divider,
  },
  footerContainer: {
    padding: 20,
    flexDirection: 'row',
    ...propsDataIn?.footerContainer,
  },
  footer: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    paddingRight: 5,
    ...propsDataIn?.footer,
  },
});

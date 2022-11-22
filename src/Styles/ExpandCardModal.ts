/* eslint-disable @typescript-eslint/no-explicit-any */

export const useStyles = (propsDataIn: any) => ({
  closeButton: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    ...propsDataIn?.closeButton,
  },
  closeButtonContainer: {
    flexDirection: 'row',
    paddingTop: '1px',
    paddingRight: 'px',
  },
  modal: {
    padding: 0,
    justifyContent: 'center',
    ...propsDataIn?.modal,
  },
  barcodeContainer: {
    height: 54,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'gray',
    ...propsDataIn?.barcodeContainer,
  },
  cardContainer: {
    margin: '20px 0px',
    height: 377,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    ...propsDataIn?.cardContainer,
  },
  card: {
    height: '65%',
    width: 377,
    borderRadius: '10px',
    transform: { rotate: '-90deg' },
    ...propsDataIn?.card,
  },
  divider: {
    width: '100%',
    height: 50,
    ...propsDataIn?.divider,
  },
  captionContainer: {
    margin: '30px 0',
    backgroundColor: '#FFF9EA',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#FEBA2C',
    flexDirection: 'row',
    paddingLeft: '20px',
    paddingRight: '50px',
    paddingTop: '10px',
    paddingBottom: '20px',
    borderRadius: 5,
    ...propsDataIn?.captionContainer,
  },
  caption: {
    fontSize: 14,
    fontWeight: '600',
    ...propsDataIn?.caption,
  },
});

export const Primary = {
  disabled: true,
  children: 'Sample',
  onClick: (e: any) => console.log(e),
  variant: 'outlined',
  style: {
    textTransform: 'uppercase',
    // backgroundColor: theme?.palette?.primary?.main, //.colors.primary,
    borderRadius: 0,
    height: 60,
    width: '100%', // added
  },
};

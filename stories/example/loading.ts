export const Primary = {
  dataIn: {
    status: false,
    styles: {
      backdrop: {},
      label: {},
    },
    label: 'loading, wait ...',
  },
  dataOut: (value: boolean) => console.log('DATA OUT', value),
};

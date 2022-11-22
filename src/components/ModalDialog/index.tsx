import * as React from 'react';
import { Dialog } from '@mui/material';
import { IModalDialog } from 'common/types';

export function ModalDialog(props: IModalDialog) {
  return (
    <Dialog
      open={props.open}
      sx={{ ...props?.bottomModalBodyStyle }}
      fullScreen={props?.fullScreen}
      fullWidth
      maxWidth="xs"
    >
      <div>{props.headerComponent}</div>
      {props.children}
    </Dialog>
  );
}

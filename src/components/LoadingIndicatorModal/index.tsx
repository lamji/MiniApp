import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ILoading } from 'common/types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const useStyles = (dataIn: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...dataIn?.root,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 3,
    ...dataIn?.label,
  },
});

export function LoadingIndicatorModal(props: ILoading) {
  const { dataIn } = props;
  const classes = useStyles(dataIn?.styles);
  const status: boolean = dataIn?.status as boolean;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(status);
  }, [status]);

  return (
    <div>
      <Backdrop
        sx={{ display: 'flex', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Box
          sx={{
            ...classes?.root,
          }}
        >
          <CircularProgress color="inherit" />
          {dataIn?.label && (
            <Typography
              variant="body1"
              sx={{
                ...classes?.label,
              }}
            >
              {dataIn?.label}{' '}
            </Typography>
          )}
        </Box>
      </Backdrop>
    </div>
  );
}

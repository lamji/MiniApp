import * as React from 'react';
import { Button } from '@mui/material';
import type { ITapButtonProps } from 'common/types';

export function TopButton(props: ITapButtonProps) {
  // const theme = props?.theme;
  const onClick = props.onClick;
  const children = props.children;
  const style = {
    textTransform: 'uppercase',
    // backgroundColor: theme?.palette?.primary?.main, //.colors.primary,
    borderRadius: 0,
    height: 60,
    width: '100%', // added
    ...props?.style,
  };
  const disabled = props?.disabled;

  return (
    <Button
      variant={props?.variant ? props?.variant : 'contained'}
      sx={{
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

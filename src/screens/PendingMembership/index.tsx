import React from 'react';
import useViewModel from './useViewModel';
import { IPendingMembership } from 'common/types';
import { PendingMembershipeProvider } from 'components/DataProvider/pendingMembership';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { TopButton } from 'components';

function PendingMembership(props: IPendingMembership) {
  const { classes, onGoToHomepagePress, buttonLabel, message } = useViewModel(props);

  return (
    <React.Fragment>
      <Box
        sx={{
          ...classes?.root,
        }}
      >
        <Box
          className="contentContainer"
          sx={{
            ...classes?.contentContainer,
          }}
        >
          <Box
            className="titleContainer"
            sx={{
              ...classes?.titleContainer,
            }}
          >
            <Typography
              variant="h5"
              className="title"
              sx={{
                ...classes?.title,
              }}
            >
              Your Membership is Still Gathering Some Data
            </Typography>
          </Box>
          <Box
            className="messageContainer"
            sx={{
              ...classes?.messageContainer,
            }}
          >
            <Typography
              variant="body1"
              className="message"
              sx={{
                ...classes?.message,
              }}
            >
              {message ||
                'We are currently gathering some data, but you can now access other services exculisvely for Landers Members.'}
            </Typography>
            <TopButton style={classes?.buttonLabel} onClick={() => onGoToHomepagePress()}>
              {buttonLabel || 'Go to homepage'}
            </TopButton>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default PendingMembershipeProvider(PendingMembership);

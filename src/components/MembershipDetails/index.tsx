import React from 'react';
import { IMembershipDetails } from 'common/types';
import { Box } from '@mui/system';
import { DefaultTheme } from 'Styles/DefaultThemeColors';
import { Details } from 'components/Details';
import Divider from '@mui/material/Divider';

export function MembershipDetails(props: IMembershipDetails) {
  const { dataIn } = props;
  const theme = DefaultTheme();
  console.log('dataIn', dataIn);
  return (
    <React.Fragment>
      <Box sx={{ ...dataIn?.styles }}>
        <Details
          dataIn={dataIn?.memberInfoDataIn?.dataIn}
          dataLoad={dataIn?.memberInfoDataIn?.dataLoad}
        />
        <Divider
          sx={{
            marginTop: 5,
            marginBottom: 5,
            borderBottomWidth: 1,
            borderColor: theme.colors.lightGray,
          }}
        />
        <Details
          dataIn={dataIn?.userInfoDataIn?.dataIn}
          dataLoad={dataIn?.userInfoDataIn?.dataLoad}
        />
        <Divider
          sx={{
            marginTop: 5,
            marginBottom: 5,
            borderBottomWidth: 1,
            borderColor: theme.colors.lightGray,
          }}
        />
        <Details
          dataIn={dataIn?.addressInfoDataIn?.dataIn}
          dataLoad={dataIn?.addressInfoDataIn?.dataLoad}
        />
      </Box>
    </React.Fragment>
  );
}

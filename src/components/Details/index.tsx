/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IDetails } from 'common/types';
import { useStyles } from 'Styles/Details';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export function Details(props: IDetails) {
  const { dataIn, dataLoad } = props;
  const DatadataLoad: any = dataLoad as any;
  const classes = useStyles(dataIn?.DetailsDataIn);

  console.log('sample', dataIn);

  const infoList = DatadataLoad.map((item: any) => {
    return (
      <Box
        key={item?.id}
        className="infoContainer"
        sx={{
          ...classes?.infoContainer,
        }}
      >
        <Box
          className="fieldNameContainer"
          sx={{
            ...classes?.fieldNameContainer,
          }}
        >
          <Typography className="fieldName" variant="body1" sx={{ ...classes?.fieldName }}>
            {item.fieldName || '-'}
          </Typography>
        </Box>
        <Box className="valueContainer" sx={{ ...classes?.valueContainer }}>
          <Typography className="value" variant="body1" sx={{ ...classes?.value }}>
            {item.fieldValue || '-'}
          </Typography>
        </Box>
      </Box>
    );
  });
  return (
    <React.Fragment>
      {dataIn?.DetailsDataIn?.title !== '' && (
        <Box className="MainContainer" sx={{ ...classes?.container }}>
          <Box className="titleContainer" sx={{ ...classes?.titleContainer }}>
            <Typography
              variant="body1"
              sx={{
                ...classes?.title,
              }}
            >
              {dataIn?.DetailsDataIn?.title || '-'}
            </Typography>
          </Box>
        </Box>
      )}
      {infoList}
    </React.Fragment>
  );
}

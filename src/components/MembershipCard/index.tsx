import * as React from 'react';
import { IMembershipCard } from 'common/types';
import { useStyles } from 'Styles/MembershipCard';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { DefaultTheme } from 'Styles/DefaultThemeColors';
import { Images } from 'common/utils/utils';

export function MembershipCard(props: IMembershipCard) {
  const { dataIn } = props;
  const theme = DefaultTheme();
  console.log('MembershipCard', dataIn);
  const classes = useStyles({
    dataIn: dataIn?.styles,
    theme: theme,
  });
  console.log(props, classes);
  return (
    <React.Fragment>
      <Box
        className="Card"
        sx={{
          backgroundColor: dataIn?.type === 'business' ? '#C7CACB' : '#A09167',
          ...classes?.card,
        }}
      >
        <Box
          className="expandContainer"
          sx={{
            ...classes?.expandContainer,
          }}
        >
          <FontAwesomeIcon size="lg" color={theme.colors.primary} icon={faExpand} />
        </Box>
        <Box>
          <Box className="imageContainer" sx={{ ...classes?.imageContainer }}>
            <CardMedia
              className="LandersSuperStoreCard"
              component="img"
              height="auto"
              image={Images?.LandersSuperStoreCard}
              alt="Landers Super Store Card"
            />
          </Box>
          <Typography
            variant="h6"
            className="cardNumber"
            sx={{
              color: theme?.colors?.white,
              ...classes?.cardNumber,
            }}
          >
            {dataIn?.details?.number || '-'}
          </Typography>
        </Box>
        <Box
          className="footer"
          sx={{
            ...classes?.footer,
          }}
        >
          <Box
            className="detailsBox"
            sx={{
              color: theme.colors.white,
              ...classes?.details,
            }}
          >
            {dataIn?.type === 'business' && (
              <Typography
                variant="body1"
                className="details"
                sx={{
                  color: theme.colors.white,
                  ...classes?.details,
                }}
              >
                {dataIn?.details?.businessName}
              </Typography>
            )}
          </Box>

          <Box
            className="nameExpirationContainer"
            sx={{
              ...classes?.nameExpirationContainer,
            }}
          >
            <Box
              className="nameContainer"
              sx={{ color: theme.colors.white, ...classes?.nameContainer }}
            >
              <Typography variant="body1" className="detailsName" sx={{ ...classes?.details }}>
                {dataIn?.details?.name}
              </Typography>
            </Box>
            <Box
              className="expirationContainer"
              sx={{
                color: theme.colors.white,
                ...classes?.expirationContainer,
              }}
            >
              <Typography
                variant="body1"
                className="expLabel"
                sx={{ color: theme.colors.white, ...classes?.expLabel }}
              >
                Date of Expiration
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...classes?.exp,
                }}
              >
                {dataIn?.details?.expDate}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

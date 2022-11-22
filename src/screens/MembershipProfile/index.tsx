/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import useViewModel from './useViewModel';
import { Box, Typography } from '@mui/material';
import { IMembershipProfile } from 'common/types';
import { MembershipProfileProvider } from 'components/DataProvider/membershipProfile';
import { DefaultTheme } from 'Styles/DefaultThemeColors';
import { MembershipCard } from 'components/MembershipCard';
import { TopButton } from 'components';
import CardMedia from '@mui/material/CardMedia';

function MembershipProfile(props: IMembershipProfile) {
  const { classes } = useViewModel(props);
  const { dataIn } = props;
  const theme = DefaultTheme();

  console.log('MembershipProfile', dataIn);

  return (
    <React.Fragment>
      <Box sx={{ ...classes?.root }}>
        <Box
          className="ScrollView"
          sx={{
            backgroundColor: theme?.colors?.background,
            ...classes?.ScrollView,
          }}
        >
          {dataIn?.customCardDetailsComponent !== '' ? (
            dataIn?.customCardDetailsComponent
          ) : (
            <Box className="MP_cardInfoContainer" sx={{ ...classes?.cardInfoContainer }}>
              <Box
                className="MP_titleContainerStyle"
                sx={{ ...dataIn?.styles?.titleContainerStyle }}
              >
                <Typography
                  variant="body1"
                  className="MP_title"
                  sx={{
                    color: theme?.colors?.text,
                    ...classes?.title,
                  }}
                >
                  My Membership
                </Typography>
                {dataIn?.showCard && (
                  <Box
                    className="MP_cardContainer"
                    sx={{
                      ...classes?.cardContainer,
                    }}
                  >
                    <MembershipCard dataIn={dataIn?.cardInfo} />
                  </Box>
                )}
                {dataIn?.showBarcode && (
                  <Box
                    className="MP_barcodeContainer"
                    sx={{
                      backgroundColor: 'transparent',
                      ...classes?.barcodeContainer,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      image={
                        dataIn?.cardInfo?.details?.number
                          ? `https://barcode.tec-it.com/barcode.ashx?data=${dataIn?.cardInfo?.details?.number}&code=&translate-esc=true&dpi=600&hidehrt=True`
                          : undefined
                      }
                      alt="Barcode"
                    />
                  </Box>
                )}
                {dataIn?.showButtonGroup && (
                  <Box
                    className="MP_buttonGroupContainer"
                    sx={{
                      ...classes?.buttonGroupContainer,
                    }}
                  >
                    <TopButton
                      onClick={(i: any) => dataIn?.action?.onRenew(i)}
                      style={{
                        height: theme?.button?.modalButtonHeight,
                        borderRadius: theme?.button?.buttonRadius,
                        backgroundColor: theme?.colors?.primary,
                        '&:hover': {
                          backgroundColor: theme?.colors?.primary,
                        },
                        ...classes?.button,
                      }}
                    >
                      {dataIn?.buttonGroupLabels?.primaryButtonLabel || 'Renew'}
                    </TopButton>
                    <TopButton
                      onClick={(i: any) => dataIn?.action?.onUnlink(i)}
                      style={{
                        color: theme.colors.primary,
                        borderWidth: 1,
                        borderColor: theme.colors.primary,
                        height: theme?.button?.modalButtonHeight,
                        borderRadius: theme?.button?.buttonRadius,
                        '&:hover': {
                          borderColor: theme?.colors?.primary,
                        },
                        ...classes?.button,
                      }}
                      variant="outlined"
                    >
                      {dataIn?.buttonGroupLabels?.primaryButtonLabel || 'Unlink'}
                    </TopButton>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default MembershipProfileProvider(MembershipProfile);

//- dataIn?.customCardDetailsComponent

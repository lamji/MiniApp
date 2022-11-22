/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IExpandCardModal } from 'common/types/ExpandCardModal';
import { ModalDialog } from 'components/ModalDialog';
import AppBar from '@mui/material/AppBar';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, IconButton, Toolbar, Typography } from '@mui/material';
import { useStyles } from 'Styles/ExpandCardModal';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { DefaultTheme } from 'Styles/DefaultThemeColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  status: (ars: boolean) => void;
  styles: any;
}

export default function BodyModal(props: Props) {
  const theme = useStyles(props?.styles);
  const handleClose = () => {
    props?.status(false);
  };
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ position: 'relative', backgroundColor: 'transparent' }}
      >
        <Toolbar
          className="modal"
          sx={{
            marginBottom: 0,
            ...theme?.modal,
          }}
        >
          <Box className="closeButtonContainer" sx={{ ...theme?.closeButtonContainer }}>
            <IconButton
              className="closeButton"
              sx={{ ...theme?.closeButton }}
              edge="start"
              color="#A6ACAE"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export function ExpandCardModal(props: IExpandCardModal) {
  const { fullScreen, visible, details, type, styles } = props;
  const classes = useStyles(styles);
  const theme = DefaultTheme();
  const [open, setOpen] = React.useState(false);
  console.log('data', fullScreen, visible, details, type);

  React.useEffect(() => {
    setOpen(visible);
  }, [visible]);

  return (
    <React.Fragment>
      <ModalDialog
        bottomModalBodyStyle={{
          backgroundColor: 'white',
        }}
        fullScreen={fullScreen}
        bottomModalHeaderStyle={{}}
        headerComponent={<BodyModal styles={styles} status={(i) => setOpen(i)} />}
        open={open}
      >
        <Box
          sx={{
            padding: '0px 20px',
          }}
        >
          <Box
            sx={{
              ...classes?.barcodeContainer,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={
                details?.number
                  ? `https://barcode.tec-it.com/barcode.ashx?data=${details?.number}&code=&translate-esc=true&dpi=600&hidehrt=True`
                  : undefined
              }
              alt="barcode"
              sx={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Box
            className="cardContainer"
            sx={{
              ...classes?.cardContainer,
            }}
          >
            <Box
              className="card"
              sx={{
                backgroundColor: type === 'business' ? '#C7CACB' : '#A09167',
                ...classes?.card,
              }}
            >
              <Box
                sx={{
                  padding: '10px',
                }}
              >
                {type === 'business' && (
                  <Typography variant="body1">{details?.businessName}</Typography>
                )}
                <Typography variant="body1">{details?.name || ''}</Typography>
              </Box>
              <Divider
                sx={{
                  backgroundColor: theme?.colors?.tintedBlack,
                  ...classes?.divider,
                }}
              />
            </Box>
          </Box>
          <Box
            className="captionContainer"
            sx={{
              ...classes?.captionContainer,
            }}
          >
            <FontAwesomeIcon size="lg" color={theme.colors.primary} icon={faInfoCircle} />
            <Typography
              variant="body1"
              sx={{
                ...classes?.caption,
              }}
            >
              You can visit your preffered store for your photo to be taken and get your physical
              Landers Card.
            </Typography>
          </Box>
        </Box>
      </ModalDialog>
    </React.Fragment>
  );
}

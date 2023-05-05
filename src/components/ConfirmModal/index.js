import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
// import { SOCIAL_ICON_SIZE } from "../../const";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 540,
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 24,
  p: 8,
  outline: 'none',
};

const ShareModal = styled(Modal)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
}));

const ConfirmModal = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    let timer;
    if (openAlert) {
        timer = setTimeout(() => {setOpenAlert(false)}, 1500);
    }
    return () => clearTimeout(timer);
  }, [openAlert]);

  const showPreview = () => {
    window.open(url, '_blank', 'noreferrer');
  };

  const ShareSocial = ({ url, title }) => (
    <Stack direction="row" spacing={1}>
      <EmailShareButton url={url} title={title}>
        <ForwardToInboxIcon />
      </EmailShareButton>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon />
      </FacebookShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon />
      </RedditShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon />
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsAppIcon />
      </WhatsappShareButton>
    </Stack>
  );
  return (
    <ShareModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: '12px 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ 'aria-label': 'list URL' }}
            value={url}
          />
          <IconButton sx={{ p: '10px' }} aria-label="preview">
            <VisibilityIcon onClick={showPreview} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="copy">
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>
        {openAlert ? (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            URL saved.
          </Alert>
        ) : null}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Share with friends
        </Typography>
        <ShareSocial />
      </Box>
    </ShareModal>
  );
};

ConfirmModal.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ConfirmModal;

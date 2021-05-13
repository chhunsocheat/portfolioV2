import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "auto",
    height: "auto",
    top: "50%",
    left: "50%",
    padding: theme.spacing(2, 4, 3),
    // eslint-disable-next-line no-useless-computed-key
  },
  gif: {
    [theme.breakpoints.down('sm')]: {
      // eslint-disable-line no-useless-computed-key
      width: "300px",

      top: "50%",
      left: "10%",
    },
  },
}));

export default function GifModal({ thumbnail, gifFile }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img loading="lazy" className={classes.gif} src={gifFile} alt="" />
    </div>
  );

  return (
    <div>
      <img src={thumbnail} type="button" onClick={handleOpen} alt="loading" />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

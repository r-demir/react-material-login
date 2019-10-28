import React from "react";
// material-ui components
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import modalStyle from "../assets/jss/material-kit-react/modalStyle";

const useStyles = makeStyles(modalStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal() {
  const [modal, setModal] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <Button
        style={{ marginTop: 10, marginLeft: 8 }}
        color="rose"
        variant="contained"
        round
        onClick={() => setModal(true)}
      >
        Modal
      </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Modal title</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <h5>Are you sure you want to do this?</h5>
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button onClick={() => setModal(false)}>Never Mind</Button>
          <Button onClick={() => setModal(false)} color="success">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

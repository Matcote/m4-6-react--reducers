import React from "react";
import { BookingContext } from "./BookingContext";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const PurchaseModal = () => {
  const {
    state,
    actions: { beginBookingProcess, cancelBookingProcess },
  } = React.useContext(BookingContext);
  console.log(state);
  return (
    <Dialog
      open={state.selectedSeatId !== null}
      onClose={cancelBookingProcess}
    ></Dialog>
  );
};
export default PurchaseModal;

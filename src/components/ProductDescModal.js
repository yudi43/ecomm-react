import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ProductDetail from "./ProductDetail";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: "100%",
    height: "100%",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      height: "80%",
      maxWidth: "none",
      maxHeight: "none",
      borderRadius: 0,
    },
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    marginRight: theme.spacing(1),
  },
}));

const ProductDescModal = ({ product, onClose }) => {
  const classes = useStyles();
  console.log("this is the product:", product.product);
  return (
    <Dialog
      open={true}
      onClose={onClose}
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <IconButton onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ProductDetail product={product} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductDescModal;

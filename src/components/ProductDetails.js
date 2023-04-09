import { Typography } from "@material-ui/core";
import Navbar from "./utils/Navbar";

function ProductDetail({ productId }) {
  return (
    <div>
      <Navbar />
      <Typography varient="h1">
        Products details page, product selected: {productId}
      </Typography>
    </div>
  );
}

export default ProductDetail;

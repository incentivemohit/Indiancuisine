import { Card, CardContent, Rating } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import { ProductContext } from "../../Context";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function ProductCard({ id, photo, title, price }) {
  const { addToCart } = useContext(ProductContext);
  const [value, setValue] = React.useState(2);

  return (
    <>
      <Card
        sx={{
          cursor: "pointer",
        }}
        className="product-card"
      >
        <CardContent>
          <div
            className="item-image "
            style={{ width: "230px", height: "230px" }}
          >
            <img src={photo} alt=" Loading..." className="w-100 h-100 " />
          </div>
          <h5 className="text-center pt-2">{title}</h5>
          <div className="details d-flex justify-content-between align-items-center">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
            />
          </div>

          <div className="card-actions pt-2 d-flex justify-content-between align-items-center">
            <p className="h3">
              <sup>Rs.</sup>
              {price}
            </p>
            <button className="btn btn-primary" onClick={() => addToCart(id)}>
              <AddCircleOutlineIcon />
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;

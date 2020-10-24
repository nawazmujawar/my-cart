import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    padding: "20px",
  },
  removeBtn: {
    backgroundColor: "rgb(255,159,0)",
  },
}));

export default function CheckoutProducts({
  id,
  productName,
  price,
  imageUrl,
  rating,
  description,
  specification,
  reviews,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={imageUrl}
        title="product image"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {productName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ₹{price}
          </Typography>
          <div style={{ display: "flex" }}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <p>{description}</p>
          <Button color="primary" onClick={removeFromBasket}>
            Remove item
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}

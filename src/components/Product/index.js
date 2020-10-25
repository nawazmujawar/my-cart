import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  link: {
    textDecoration: "none",
  },
  card: {
    maxWidth: 345,
    marginTop: "50px",
  },
  rating: {
    display: "flex",
  },
});

function Product(props) {
  const classes = useStyles();

  let { product } = props;

  return (
    <div className={classes.root}>
      <Link className={classes.link} to={`/view/${product.id}`}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={product.imageUrl}
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.productName}
              </Typography>
              <div className={classes.rating}>
                {Array(product.rating)
                  .fill()
                  .map((_, i) => (
                    <p key={i}>⭐</p>
                  ))}
              </div>
              <h2>₹{product.price}</h2>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

export default Product;

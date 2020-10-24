import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import products from "../../data/products.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(8),
    },
  },
  categories: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  const categoryNames = [];

  for (const [key] of Object.entries(products)) {
    categoryNames.push(key);
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.categories}>
        {categoryNames.map((name, index) => (
          <Link className={classes.link} key={index} to={`/categories/${name}`}>
            <Button>{name}</Button>
          </Link>
        ))}
      </Paper>
    </div>
  );
}

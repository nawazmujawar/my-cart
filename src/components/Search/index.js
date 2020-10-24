import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import myProducts from "../../data/products.json";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "60%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Search() {
  const classes = useStyles();
  let productsList = myProducts.Mobile.concat(myProducts.TV);
  let [searchQuery, setSearchQuery] = React.useState("");

  const onSearchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Products"
        inputProps={{ "aria-label": "Search Products" }}
        value={searchQuery}
        onChange={onSearchQueryHandler}
      />
      <Link to={`/search/${searchQuery}`}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Link>
    </Paper>
  );
}

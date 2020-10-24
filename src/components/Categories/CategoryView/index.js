import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import myProducts from "../../../data/products.json";
import Product from "../../Product";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function CategoryView() {
  const classes = useStyles();
  const { categoryId } = useParams();

  const productsList = myProducts[categoryId];

  const [products, setProducts] = React.useState(productsList);

  let sortProducts = products;
  let filterProducts = products;

  const [sortValue, setSortValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");

  const onSortHandler = (event) => {
    setSortValue(event.target.value);
    switch (event.target.value) {
      case "low":
        sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
        setProducts(sortProducts);
        break;
      case "high":
        sortProducts.sort((a, b) => {
        
          return b.price - a.price;
        });
        setProducts(sortProducts);
        break;

      default:
        break;
    }
  };
  const onFilterHandler = (event) => {
    setFilterValue(event.target.value);
    switch (event.target.value) {
      case 1:
        let filteredOneStar = filterProducts.filter((rating) => {
        
          return rating.rating == 1;
        });
        setProducts(filteredOneStar);
        break;
      case 2:
        let filteredTwoStar = filterProducts.filter((rating) => {
          return rating.rating == 2;
        });
        setProducts(filteredTwoStar);
        break;
      case 3:
        let filteredThreeStar = filterProducts.filter((rating) => {
          return rating.rating == 3;
        });
        setProducts(filteredThreeStar);
        break;
      case 4:
        let filteredFourStar = filterProducts.filter((rating) => {
          return rating.rating == 4;
        });
        setProducts(filteredFourStar);
        break;
      case 5:
        let filteredFiveStar = filterProducts.filter((rating) => {
          return rating.rating == 5;
        });
        setProducts(filteredFiveStar);
        break;

      default:
        break;
    }
  };
  return (
    <div>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortValue}
              onChange={onSortHandler}
            >
              <MenuItem value="low">Low-to-High</MenuItem>
              <MenuItem value="high">High-to-Low</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterValue}
              onChange={onFilterHandler}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategoryView;

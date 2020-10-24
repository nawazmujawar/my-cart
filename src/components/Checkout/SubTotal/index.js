import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import CurrencyFormat from "react-currency-format";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  checkoutBtn: {
    backgroundColor: "rgb(255,159,0)",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function SubTotal() {
  const classes = useStyles();

  const [{ basket }, dispatch] = useStateValue();
  return (
    <Card className={classes.root}>
      <CardContent>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items):<strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </CardContent>
      <CardActions>
        <Button className={classes.checkoutBtn}>Procced Checkout</Button>
      </CardActions>
    </Card>
  );
}

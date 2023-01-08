import React from "react";
import {
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import Clear from "../../assets/images/Clear.png";
import Minus from "../../assets/images/Minus.png";
import Plus from "../../assets/images/Plus.png";
import "./MyCart.css";
import { addItem, removeItem, deleteItem } from "../../redux/Action";
import { useSelector, useDispatch } from "react-redux";
import PathHeader from "../CustomComponent/path-header/PathHeader";

export function MyCart() {
  const data = useSelector((state) => state);
  console.log("state of aravinth", data);
  const dispatch = useDispatch();
  const addHandler = (name, location, weight, rate, oldRate) => {
    dispatch(addItem({ name, location, weight, rate, oldRate }));
  };
  const deleteHandler = (name, location, weight, rate, oldRate) => {
    dispatch(deleteItem({ name, location, weight, rate, oldRate }));
  };
  const removeHandler = (name) => {
    dispatch(removeItem({ name }));
  };

  let totalOldPrice = 0;
  let totalNewPrice = 0;
  let totalSavings = 10;
  const length = data ? data.length : 0;
  for (let i = 0; i < length; i++) {
    if (data[i].oldRate)
      totalOldPrice = totalOldPrice + data[i].oldRate * data[i].quantity;
    totalNewPrice = totalNewPrice + data[i].rate * data[i].quantity;
    totalSavings = totalNewPrice - totalOldPrice;
  }
  console.log("testtt lenght", length);
  return (
    <Grid className="cartWrapper">
      {length > 0 ? (
        <PathHeader
          pathName="My Cart"
          pathHeading={`My Cart (${length} Items)`}
        />
      ) : (
        <PathHeader pathName="My Cart" pathHeading="My Cart" />
      )}
      {length > 0 ? (
        <Grid data-testId="tableShow" className="tblGrid">
          <TableContainer className="tblWrapper">
            <Table>
              <TableHead className="tblHead">
                <TableRow>
                  <TableCell className="tblHeading">ItemDescription</TableCell>
                  <TableCell className="tblHeading">Qty</TableCell>
                  <TableCell />
                  <TableCell align="right" className="tblHeading">
                    Price(KD)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  ? data.map((cartData) => {
                      return (
                        <TableRow>
                          <TableCell>
                            <Typography variant="p" className="productName">
                              {cartData.name}
                            </Typography>
                            <Typography className="farmName">
                              {cartData.location}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography className="farmName">
                              {cartData.weight}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Grid container>
                              <Grid>
                                <IconButton
                                  data-testId="remove"
                                  onClick={() => removeHandler(cartData.name)}
                                >
                                  <img src={Clear} alt="Clear" />
                                </IconButton>
                              </Grid>
                              <Grid className="clearBtnWrapper">
                                <IconButton>
                                  <img
                                    data-testId="delete"
                                    src={Minus}
                                    alt="Decrease"
                                    onClick={() =>
                                      deleteHandler(
                                        cartData.name,
                                        cartData.location,
                                        cartData.weight,
                                        cartData.rate,
                                        cartData.oldRate
                                      )
                                    }
                                  />
                                </IconButton>
                                <Grid className="totalCount">
                                  <Typography className="noOfCount">
                                    {cartData.quantity}
                                  </Typography>
                                </Grid>
                                <IconButton
                                  data-testId="add"
                                  onClick={() =>
                                    addHandler(
                                      cartData.name,
                                      cartData.location,
                                      cartData.weight,
                                      cartData.rate,
                                      cartData.oldRate
                                    )
                                  }
                                >
                                  <img src={Plus} alt="Increase" />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="right">
                            <Grid
                              container
                              columnGap={3}
                              justifyContent="flex-end"
                            >
                              <del className="farmName">
                                {cartData.oldRate
                                  ? (
                                      cartData.oldRate * cartData.quantity
                                    ).toFixed(2)
                                  : ""}
                              </del>
                              <Typography className="price">
                                {(cartData.rate * cartData.quantity).toFixed(2)}
                              </Typography>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : null}

                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell>
                    <Grid>
                      <Typography className="totalText">Sub Total</Typography>
                      <Typography className="farmName">
                        Total Savings
                      </Typography>
                    </Grid>
                  </TableCell>
                  <TableCell align="right">
                    <Grid container columnGap={3} justifyContent="flex-end">
                      <Typography className="farmName">
                        <del>{totalOldPrice.toFixed(2)}</del>
                      </Typography>
                      <Typography className="totalText">
                        {totalNewPrice.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                      <Typography className="farmName">
                        {totalSavings > 0
                          ? totalSavings.toFixed(2)
                          : (totalSavings * -1).toFixed(2)}
                      </Typography>
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell>
                    <Typography className="farmName">
                      Additional charges may apply
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Button className="checkoutBtn">Checkout</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      ) : (
        <Grid container justifyContent={"center"}>
          <Typography variant="h3" className="emptyCart">
            Cart is Empty
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

// export default MyCart;

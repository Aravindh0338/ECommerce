import React from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import BookMark from "../../../assets/images/bookmark.png";
import BookMarkRed from "../../../assets/images/bookmarkRed.png";
import { addItem } from "../../../redux/Action";
import { useDispatch } from "react-redux";
import "./Cards.css";

function Cards({
  image,
  name,
  location,
  des,
  weight,
  kd,
  discount,
  oldValue,
  rate,
  oldRate,
}) {
  const dispatch = useDispatch();

  const addHandler = (name, location, weight, rate, oldRate) => {
    dispatch(addItem({ name, location, weight, rate, oldRate }));
  };
  return (
    <Card>
      <CardMedia
        component="img"
        image={`${process.env.REACT_APP_Website}/${image}`}
        // image={image}
        height="241px"
        alt={name}
      />

      <div className="cardOfferWrapper">
        <div className="cardOfferImg">
          <img src={BookMark} alt="book" />
          <span>Deal of the Day</span>
        </div>
        <div className="cardOfferImg">
          <img src={BookMarkRed} alt="book" />
          <span className="discountText">{discount}</span>
        </div>
      </div>
      <CardContent>
        <Typography className="cardName">{name}</Typography>
        <Typography className="cardLocation">{location}</Typography>
        <Typography className="cardDes">{des}</Typography>
        <Grid container>
          <Typography className="cardWeight">{weight}</Typography>
          {oldValue ? (
            <Typography className="cardWeight">
              <del>{oldValue}</del>
            </Typography>
          ) : null}
          <Typography className="cardKd">{kd}</Typography>
        </Grid>
      </CardContent>
      <CardActions className="cartBtn">
        <Button
          data-testId="addBtn"
          className="btnText"
          fullWidth={true}
          onClick={() => {
            addHandler(name, location, weight, rate, oldRate);
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;

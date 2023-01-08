import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import "./Home.css";
import { FeatureData } from "../../assets/data/FeatureData";
import Feature from "../CustomComponent/Feature/Feature";
import Cards from "../CustomComponent/Cards/Cards";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ShopNow from "../../assets/images/ShopNow.png";
import CategoriesCard from "../CustomComponent/Categories/CategoriesCard";
import FarmCard from "../CustomComponent/ExploreFarm/FarmCard";
import {
  dealResponsive,
  promosResponsive,
  topCategoriesResponsive,
  exploreFarmsResponsive,
} from "../../assets/data/Responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetch from "../controllers/fetch";
import { useNavigate } from "react-router-dom";

// import { CartDetails } from "../../assets/data/CartDetails.js";
// import { Categories } from "../../assets/data/Categories.js";
// import { Farm } from "../../assets/data/Farm.js";

function Home() {
  const [cartData, setCartData] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [farmData, setFarmData] = useState();
  const navigate = useNavigate();

  const apiCall = async () => {
    let response;
    response = await fetch(process.env.REACT_APP_Cart_Details);
    setCartData(response);

    response = await fetch(process.env.REACT_APP_Categories);
    setCategoriesData(response);

    response = await fetch(process.env.REACT_APP_Farm);
    setFarmData(response);
  };

  useEffect(() => {
    apiCall();
  }, []);

  let dealOfThesettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: dealResponsive,
  };
  let topCategoriesSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: topCategoriesResponsive,
  };
  let exploreFarmsSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: exploreFarmsResponsive,
  };
  let featuredPromosSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: promosResponsive,
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let cartSlider = useRef();
  const prevCartHandler = () => {
    cartSlider.slickPrev();
  };
  const nextCartHandler = () => {
    cartSlider.slickNext();
  };
  let topCategoriesSlider = useRef();
  const prevCategoryHandler = () => {
    topCategoriesSlider.slickPrev();
  };
  const nextCategoryHandler = () => {
    topCategoriesSlider.slickNext();
  };
  let exploreFarmsSlider = useRef();

  const prevExploreHandler = () => {
    exploreFarmsSlider.slickPrev();
  };
  const nextExploreHandler = () => {
    exploreFarmsSlider.slickNext();
  };
  let featuredPromosSlider = useRef();
  const prevPromosHandler = () => {
    featuredPromosSlider.slickPrev();
  };
  const nextPromosHandler = () => {
    featuredPromosSlider.slickNext();
  };

  return (
    <div>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="headerImg"
      >
        <Grid>
          <Typography
            data-testid="freshestText"
            className="freshText"
            variant={isMobile ? "h2" : "h1"}
          >
            Freshest of Produce,
            <br />
            <span>gauranteed!</span>
          </Typography>
        </Grid>
        <Grid>
          <Button
            className="exploreBtn"
            onClick={() => {
              navigate("/farm");
            }}
          >
            Explore Farm
          </Button>
        </Grid>
      </Grid>

      <Grid container className="promosText">
        <Typography variant="h6" color="#415162" className="headingText">
          Featured Promos
        </Typography>

        <button
          data-testId="leftSlidarBtn"
          className="slidingBtn"
          onClick={prevPromosHandler}
        >
          <ChevronLeftOutlinedIcon />
        </button>
        <button
          data-testId="rightSlidarBtn"
          className="slidingBtn"
          onClick={nextPromosHandler}
        >
          <ChevronRightOutlinedIcon />
        </button>
        <Typography
          className="heading"
          onClick={() => {
            navigate("/feature-promos");
          }}
        >
          View All
        </Typography>
      </Grid>

      <Grid className="sliderWrapper">
        <Slider
          ref={(e) => {
            featuredPromosSlider = e;
          }}
          {...featuredPromosSettings}
        >
          {FeatureData.map((featureData) => {
            return (
              <Grid item md={4}>
                <Feature
                  key={featureData.id}
                  image={featureData.image}
                  name={featureData.name}
                />
              </Grid>
            );
          })}
        </Slider>
      </Grid>

      <Grid className="section">
        <div className="dealOfTheDayWrapper">
          <Typography className="dealText" variant="h5">
            Deal Of the Day
          </Typography>
          <Grid className="sliderWrapper" md={12} xs={12} sm={12}>
            <Slider
              ref={(e) => {
                cartSlider = e;
              }}
              {...dealOfThesettings}
            >
              {cartData &&
                cartData.map((item) => {
                  return (
                    <Grid xs={12} sm={6} md={4}>
                      <Cards
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        location={item.location}
                        des={item.des}
                        weight={item.weight}
                        kd={item.kd}
                        discount={item.discount}
                        oldValue={item.oldValue}
                        oldRate={item.oldRate}
                        rate={item.rate}
                      />
                    </Grid>
                  );
                })}
            </Slider>
          </Grid>
        </div>

        <Grid container className="bottomSlider">
          <button onClick={prevCartHandler} className="slidingBtn">
            <ChevronLeftOutlinedIcon />
          </button>
          <button onClick={nextCartHandler} className="slidingBtn">
            <ChevronRightOutlinedIcon />
          </button>
          <Typography
            className="heading"
            onClick={() => {
              navigate("/deal-of-the-day");
            }}
          >
            View All
          </Typography>
        </Grid>
        <Grid md={12}>
          <img src={ShopNow} className="shopnowImg" alt="shop now" />
        </Grid>
        <Grid container className="promosText">
          <Typography variant="h6" color="#415162" className="headingText">
            TopCategories
          </Typography>

          <button className="slidingBtn" onClick={prevCategoryHandler}>
            <ChevronLeftOutlinedIcon />
          </button>
          <button className="slidingBtn" onClick={nextCategoryHandler}>
            <ChevronRightOutlinedIcon />
          </button>
          <Typography
            className="heading"
            onClick={() => {
              navigate("/categories");
            }}
          >
            View All
          </Typography>
        </Grid>

        <Grid className="sliderWrapper" xs={12} sm={12} md={12}>
          <Slider
            ref={(e) => {
              topCategoriesSlider = e;
            }}
            {...topCategoriesSettings}
          >
            {categoriesData &&
              categoriesData.map((food) => {
                return (
                  <CategoriesCard
                    key={food.id}
                    name={food.name}
                    image={food.image}
                  />
                );
              })}
          </Slider>
        </Grid>
        <Grid container className="promosText">
          <Typography variant="h6" color="#415162" className="headingText">
            Explore Farms
          </Typography>

          <button className="slidingBtn" onClick={prevExploreHandler}>
            <ChevronLeftOutlinedIcon />
          </button>
          <button className="slidingBtn" onClick={nextExploreHandler}>
            <ChevronRightOutlinedIcon />
          </button>
          <Typography
            className="heading"
            onClick={() => {
              navigate("/farm");
            }}
          >
            View All
          </Typography>
        </Grid>
        <Grid className="sliderWrapper">
          <Slider
            ref={(e) => {
              exploreFarmsSlider = e;
            }}
            {...exploreFarmsSettings}
          >
            {farmData &&
              farmData.map((farm) => {
                return (
                  <FarmCard key={farm.id} image={farm.image} name={farm.name} />
                );
              })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

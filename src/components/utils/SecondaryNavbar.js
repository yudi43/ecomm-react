import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    marginTop: "1px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.palette.primary1.main,
  },
  leftText: {
    marginLeft: theme.spacing(2),
  },
  buttonsContainer: {
    marginRight: theme.spacing(2),
  },
  // selected button
  navButton: {
    height: "100%",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary1Dark.another,
    "&:hover": {
      backgroundColor: theme.palette.primary1Dark.another,
    },
  },
  navButtons: {
    color: theme.palette.bg.main,
    fontSize: "0.8em",
  },
  categories: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "0.9em",
  },
  dptGrid: {
    display: "None",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  locationIcon: {
    transform: "scale(1.2)",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.main,
    marginLeft: "15px",
    marginRight: "5px",
  },
  locationText: {
    color: theme.palette.bg.main,
    fontWeight: "bold",
    fontSize: "0.85em",
  },
}));

const SecondaryNavbar = ({ categories, currentSelectedCategory }) => {
  const classes = useStyles();
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("UseEffect of SecondaryNavBar");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocation(data.address);
          })
          .catch((error) => console.log(error));
      },
      (error) => console.log(error)
    );
  }, [categories, currentSelectedCategory]);

  const handleCategoryClick = (categoryClicked) => {
    navigate(`/categories/${categoryClicked}`); //navigate the user to Category page
  };

  const renderCategoryButtons = (
    navButtons,
    navButtonCssClass,
    categoryTextCssClass
  ) => {
    if (categories) {
      return categories
        .slice(0, 20)
        .filter((item) => !item.includes("men"))
        .map((singleCategory, index) => {
          if (singleCategory === currentSelectedCategory) {
            return (
              <Button
                className={navButtonCssClass}
                variant="contained"
                onClick={() => handleCategoryClick(singleCategory)}
                key={index}
                disableElevation
                disableFocusRipple
                disableRipple
              >
                <Typography
                  variant="subtitle1"
                  className={categoryTextCssClass}
                >
                  {singleCategory}
                </Typography>
              </Button>
            );
          } else {
            return (
              <Button
                className={navButtons}
                onClick={() => handleCategoryClick(singleCategory)}
                key={index}
                disableElevation
                disableFocusRipple
                disableRipple
              >
                <Typography
                  variant="subtitle1"
                  className={categoryTextCssClass}
                >
                  {singleCategory}
                </Typography>
              </Button>
            );
          }
        });
    } else {
      return <div></div>;
    }
  };

  return (
    <Box className={classes.root}>
      <Grid className={classes.dptGrid}>
        <LocationOnIcon className={classes.locationIcon} />
        <Typography variant="subtitle1" className={classes.locationText}>
          {location ? (
            <p>
              {location.suburb}, {location.city_district}, {location.city},{" "}
              {location.postcode}
            </p>
          ) : (
            <p>Loading location...</p>
          )}
        </Typography>
      </Grid>
      <Box className={classes.buttonsContainer}>
        {renderCategoryButtons(
          classes.navButtons,
          classes.navButton,
          classes.categories
        )}
      </Box>
    </Box>
  );
};

export default SecondaryNavbar;

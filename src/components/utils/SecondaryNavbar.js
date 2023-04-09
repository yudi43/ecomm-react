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
  categories: {
    textTransform: "capitalize",
    color: theme.palette.bg.main,
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
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.main,
    marginLeft: "15px",
  },

  locationText: {
    color: "#ffffff",
    fontSize: "0.8em",
    marginLeft: "5px",
  },
}));

const SecondaryNavbar = ({ categories }) => {
  const classes = useStyles();
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("This was the location returned:", data);
            setLocation(data.address);
          })
          .catch((error) => console.log(error));
      },
      (error) => console.log(error)
    );
  }, []);

  const handleCategoryClick = (categoryClicked) => {
    //do something
    navigate(`/categories/${categoryClicked}`);
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
        {categories
          .slice(0, 20)
          .filter((item) => !item.includes("men"))
          .map((item, index) => {
            return (
              <Button
                onClick={() => handleCategoryClick(item)}
                key={index}
                disableElevation
                disableFocusRipple
                disableRipple
              >
                <Typography variant="subtitle1" className={classes.categories}>
                  {item}
                </Typography>
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export default SecondaryNavbar;

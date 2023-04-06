import { useState } from "react";
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu"; // Import Menu component
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SecondaryNavbar from "./SecondaryNavbar";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary1.main,
    boxShadow: "none",
  },
  Toolbar: {
    alignItems: "center",
    height: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  dropdownButton: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    borderRadius: "10px",
    backgroundColor: "#005EB5",
    // color: theme.palette.primary1.main,
    textTransform: "none",
    color: "inherit",
    "&:hover": {
      backgroundColor: "#004D96",
    },
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    width: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "60%",
    },
    justifyContent: "space-between" /* Add this line */,
  },
  searchIcon: {
    padding: theme.spacing(0.2, 0.2),
    margin: theme.spacing(0.5, 0.5),
    height: "80%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    borderRadius: "40%",
  },

  //input section
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    color: theme.palette.primary1.main,
    fontSize: "0.9em",
    paddingLeft: `calc(1em + ${theme.spacing(0.2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
    "&.MuiInputBase-input": {
      color: theme.palette.primary1.main,
    },
  },
  userIcon: {
    marginLeft: theme.spacing(1),
    display: "None",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  cartIcon: {
    marginLeft: theme.spacing(1),
  },
  dptGrid: {
    display: "None",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  ctgIcon: {
    color: theme.palette.secondary.main,
  },
  logoIcon: {
    color: theme.palette.secondary.main,
    fontSize: "large",
  },
  divider: {
    backgroundColor: theme.palette.primary2.main,
    height: 1,
    width: "100%",
  },
}));

const Navbar = ({ categories }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = (catgs) => {
    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {catgs.map((cat, index) => {
          return (
            <MenuItem key={index} onClick={handleMenuClose}>
              {cat}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    console.log("Search value:", event.target.value);
    // Do something with the search value, such as making an API request
  };
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.Toolbar}>
          {/* Logo */}
          <Grid className={classes.title}>
            <Typography variant="h4">QuickBuy</Typography>
            <KeyboardDoubleArrowRightIcon className={classes.logoIcon} />
          </Grid>
          {/* Dropdown Button */}
          <Grid className={classes.dptGrid}>
            <IconButton
              className={classes.dropdownButton}
              onClick={handleMenuOpen}
            >
              <AppsIcon className={classes.ctgIcon} />
              <Typography variant="body1" style={{ marginLeft: "5px" }}>
                Departments
              </Typography>
            </IconButton>
          </Grid>
          {renderMenuItems(categories)}
          {/* Search Bar */}
          <div className={classes.search}>
            <InputBase
              value={searchValue}
              onChange={handleSearchChange}
              style={{ flex: 1 }}
              placeholder="Search for items of QuickBuy store here"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          {/* User Icon */}
          <IconButton className={classes.userIcon} color="inherit">
            <AccountCircleIcon />
          </IconButton>
          {/* Cart Icon */}
          <IconButton className={classes.cartIcon} color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Divider className={classes.divider} />
      <SecondaryNavbar categories={categories} />
    </div>
  );
};

export default Navbar;

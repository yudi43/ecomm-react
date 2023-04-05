import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu'; // Import Menu component
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SecondaryNavbar from './SecondaryNavbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary1.main,
    boxShadow: 'none',
},
    Toolbar: {
      alignItems: 'center',
      height: '80px'
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  dropdownButton: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    textTransform: 'none',
    color: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '60%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    color: theme.palette.bg.contrastText,
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
  userIcon: {
    marginLeft: theme.spacing(1),
    display:'None',
    [theme.breakpoints.up('sm')]: {
        display: 'block'
      },
  },
  cartIcon: {
    marginLeft: theme.spacing(1),
  },
  dptGrid: {
    display:'None',
    [theme.breakpoints.up('sm')]: {
        display: 'block'
      },
  },
  logoIcon: {
    color: theme.palette.secondary.main,
    fontSize: 'large'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItems = () => {
    return (
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Menu Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Menu Item 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Menu Item 3</MenuItem>
      </Menu>
    );
  };

  return (
    <div>
        <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.Toolbar}>
            {/* Logo */}
            <Grid className={classes.title}>
                <Typography variant="h6" >
                    QuickBuy
                </Typography>
                <KeyboardDoubleArrowRightIcon className={classes.logoIcon}/>
            </Grid>
            {/* Dropdown Button */}
            <Grid className={classes.dptGrid}>
                <IconButton
                className={classes.dropdownButton}
                color="inherit"
                onClick={handleMenuOpen}
                >
                <AppsIcon />
                <Typography variant="body1" style={{fontWeight: 'bold'}}>
                    Departments
                </Typography>
                </IconButton>
            </Grid>
            {renderMenuItems()}
            
            {/* Search Bar */}
            <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search for items of QuickBuy store here"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
            />
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
        <SecondaryNavbar />
    </div>
  );
};

export default Navbar;

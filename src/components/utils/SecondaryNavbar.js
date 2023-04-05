import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    height:'auto',
    marginTop:'1px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.primary1.main,
  },
  leftText: {
    marginLeft: theme.spacing(2),
  },
  buttonsContainer: {
    marginRight: theme.spacing(2),
  },
  categories: {
    textTransform: 'capitalize',
    color: theme.palette.bg.main,
    fontWeight: 'bold',
    fontSize: '0.8em'
  },
  dptGrid: {

    display:'None',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        alignItems: 'center',
      
    },
  },

  locationIcon: {
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.secondary.main,
  },

  locationText: {
    color: '#ffffff',
    fontSize: '0.7em'
  }
}));

const SecondaryNavbar = ( { categories } ) => {
    const classes = useStyles();
  
    return ( 
      <Box className={classes.root}>

        <Grid className={classes.dptGrid}>
                <LocationOnIcon className={classes.locationIcon}/>
                <Typography variant="subtitle2" className={classes.locationText}>
                    Yelahanka, Bengaluru - 560064
                </Typography>
        </Grid>
        <Box className={classes.buttonsContainer}>
          {categories.slice(0,7).map((item) => {
              return (
                  <Button disableElevation disableFocusRipple disableRipple>
                      <Typography variant="subtitle2" className={classes.categories}>
                          {item}
                      </Typography>
                  </Button>                
              )
          })}
        </Box>
      </Box>
    );
  }
  
export default SecondaryNavbar;

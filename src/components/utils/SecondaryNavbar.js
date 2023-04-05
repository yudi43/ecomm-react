import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    fontWeight: 'bold'
  }
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.leftText}>
        <Typography variant="subtitle2" color="textSecondary">
          Left Text
        </Typography>
      </Box>
      <Box className={classes.buttonsContainer}>
        <Button disableElevation disableFocusRipple disableRipple>
            <Typography variant="body1" className={classes.categories}>
                Button 1
            </Typography>
        </Button>
        <Button disableElevation disableFocusRipple disableRipple>
            <Typography variant="body1" className={classes.categories}>
                Button 1
            </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default AppHeader;

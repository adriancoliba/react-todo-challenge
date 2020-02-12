import React from 'react';
import { TextField, CircularProgress, CssBaseline, Button, Avatar,
  Typography, Container, Grid, Checkbox, FormControlLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from "@material-ui/core";
import style from "./style";
import LogoImage from '../../assets/images/logo.png';

const Navigation = (props) => {
  const { classes } = props;
  return (
    <div >
      <Grid container spacing={0} className={classes.container} justify='center' alignItems='center'>
        <Grid item>
          <img src={LogoImage} alt="Logo" width={42}/>
        </Grid>
        <Grid item>
            <Typography variant="body1" className={classes.logoText}>Todo Lists</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(style)(Navigation);
import React, { useState } from 'react';
import { useEffect } from 'react';
import * as moment from "jalali-moment"
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    direction: "rtl"
  },
  weekDay: {
    color: "#e91e63",
    fontSize: "2.5rem",
    fontWeight: "bold"
  },
  deatailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: "15px"
  },
  detail: {
    color: "white",
    fontSize: "1.25rem"
  }
})
const HeaderDate = () => {
  const classes = useStyles();
  const [DateNow, setDateNow] = useState({});

  useEffect(() => {
    const nowInIran = moment().locale('fa');
    setDateNow({
      "weekDay": nowInIran.format('dddd'),
      "monthDay": + nowInIran.format('DD'),
      "month": nowInIran.format('MMMM'),
      "year": nowInIran.format('YYYY'),
    })
  }, []);

  return (
    <Box className={classes.root}>
      <Typography className={classes.weekDay}>{DateNow.weekDay}</Typography>
      <Typography className={classes.deatailContainer}>
        <Typography className={classes.detail}>{`${DateNow.monthDay} ${DateNow.month}`}</Typography>
        <Typography className={classes.detail}>{`سال ${DateNow.year}`}</Typography>
      </Typography>
    </Box>
  );
};

export default HeaderDate;

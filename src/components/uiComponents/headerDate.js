import React, { useState } from 'react';
import { useEffect } from 'react';
import * as moment from "jalali-moment"
import { Box, Typography } from '@material-ui/core';

const HeaderDate = () => {
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
    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", direction: "rtl" }}>
      <Typography style={{ color: "#673ab7", fontSize: "2.5rem", fontWeight:"bold"}}>{DateNow.weekDay}</Typography>
      <Typography style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingRight: "15px" }}>
        <Typography style={{ fontSize: "1.25rem" }}>{`${DateNow.monthDay} ${DateNow.month}`}</Typography>
        <Typography style={{ fontSize: "1.25rem" }}>{`سال ${DateNow.year}`}</Typography>
      </Typography>
    </Box>
  );
};

export default HeaderDate;

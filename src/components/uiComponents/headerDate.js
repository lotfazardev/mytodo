import React, { useState } from 'react';
import { useEffect } from 'react';
import * as moment from "jalali-moment"

const HeaderDate = () => {
  const [DateNow, setDateNow] = useState({});

  useEffect(() => {
    setDateNow({
      "weekDay": moment().locale('fa').format('dddd'),
      "monthDay" : + moment().locale('fa').format('DD'),
      "month" : moment().locale('fa').format('MMMM'),
      "year" : moment().locale('fa').format('YYYY'),
    })
  }, []);

  return (
    <>
      <h1>{DateNow.weekDay}</h1>
      <h1>{DateNow.monthDay}</h1>
      <h1>{DateNow.month}</h1>
      <h1>{DateNow.year}</h1>
    </>
  );
};

export default HeaderDate;

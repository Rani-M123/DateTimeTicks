
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import { format, setHours } from 'date-fns';


function LiveTime() {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Set start and end times for a particular day (January 27, 2022)
  const startTimeIST = setHours(new Date("2023-04-26"),10);
  const endTimeIST = setHours(new Date("2023-05-27"), 11);

  // Convert start and end times to ticks
  const startTimeTicks = (((startTimeIST.getTime() -startTimeIST.getTimezoneOffset()*60000))* 10000)
  //const startTimeTicks = startTimeIST.getTime()
  const endTimeTicks = (((endTimeIST.getTime() -endTimeIST.getTimezoneOffset()*60000))* 10000)

  
  const startTimeFormatted = format(startTimeIST, 'yyyy-MM-dd HH:mm:ss');
  
  const endTimeFormatted = format(endTimeIST, 'yyyy-MM-dd HH:mm:ss');
  
  const currentFormatted = format(new Date(currentTime), 'yyyy-MM-dd HH:mm:ss');

  // Return start and end times as ticksy
  return (
    <div>
   
  <div>{startTimeFormatted}: {startTimeTicks}</div>
  <div>{endTimeFormatted}: {endTimeTicks}</div>
    
    </div>
  )
}

export default LiveTime;


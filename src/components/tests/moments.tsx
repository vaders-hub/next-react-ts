import React, { useEffect, useState } from "react";

import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko";

import useInterval from "use-interval";

const LiveTimeContainer = () => {
  const [seconds, setSeconds] = useState(Date.now());
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  const startTime: number = +new Date("2022-09-23T16:09");
  const nowTimeFormat: number = +new Date(seconds);
  const fmttDate = moment(seconds).format("YYYY-MM-DD h:mm:ss");

  useInterval(
    () => {
      setSeconds(Date.now());
    },
    isRunning ? delay : null
  );

  // 날짜 차이 계산
  const a = moment(nowTimeFormat);
  const b = moment(startTime);
  const gap = a.diff(b, "days");

  function handleDelayChange(e: any) {
    setDelay(Number(e.target.value));
  }

  return (
    <>
      {startTime - nowTimeFormat > 0 ? (
        <>
          <Moment fromNow>{startTime}</Moment>&nbsp;접수 시작
        </>
      ) : (
        <div>종료</div>
      )}
      <div>{fmttDate}</div>
      <input value={delay} onChange={handleDelayChange} />
    </>
  );
};
export default LiveTimeContainer;

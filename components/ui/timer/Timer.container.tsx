"user client";
import { FC } from 'react';
import Timer from "./Timer.component";
import { TimerProps } from "@ui/timer/Timer";

const TimerContainer: FC<TimerProps> = ({date}) => {
  return (
    <Timer date={date}/>
  )
}

export default TimerContainer;
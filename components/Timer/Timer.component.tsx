import { FC, useState, useEffect } from 'react';
import { TimerProps } from "@components/Timer/Timer";
import { StatRoot, StatValueText, StatValueUnit, Text } from "@chakra-ui/react";
import { calculateTimeLeft } from "@/util/calculateTimeLeft";

const Timer: FC<TimerProps> = ({date}) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft((date)))

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(date))
        }, 1000)
        return () => {
            clearInterval(timer);
        };
    }, [date]);
    return (
        <StatRoot>
            <StatValueText alignItems="baseline">
                <Text>{timeLeft.day}</Text> <StatValueUnit>day</StatValueUnit>
                <Text>{timeLeft.hours}</Text> <StatValueUnit>hr</StatValueUnit>
                <Text>{timeLeft.minutes}</Text> <StatValueUnit>min</StatValueUnit>
                <Text>{timeLeft.seconds}</Text> <StatValueUnit>sec</StatValueUnit>
            </StatValueText>
        </StatRoot>
    )
}

export default Timer;
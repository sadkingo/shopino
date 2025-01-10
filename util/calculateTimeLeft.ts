interface calculateTimeLeftType {
    day: number,
    hours: number,
    minutes: number,
    seconds: number,
}

function calculateTimeLeft(targetDate: Date): calculateTimeLeftType {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (difference > 0) {
        timeLeft = {
            day: Math.floor(difference / (1000 * 60 * 60) / 24),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
}

export { calculateTimeLeft };
export type { calculateTimeLeftType };

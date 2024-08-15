import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  const getWeekDay = (date: Date): string => {
    let days: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return days[date.getDay()];
  };

  const greetings = (date: Date): string => {
    let hours = date.getHours();
    let message = 'Good Morning!';

    if (hours < 12) {
      message = 'Good Morning!';
    }
    if (hours >= 12 && hours <= 17) {
      message = 'Good Afternoon!';
    }
    if (hours >= 17 && hours <= 24) {
      message = 'Good Evening!';
    }
    return message;
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.clock}>
      <div className={styles.clock__box}>
        <div className={styles.clock__day}>{getWeekDay(date)}</div>
        <div className={styles.clock_date}>{date.toLocaleDateString()}</div>
        <div className={styles.clock__time}>
          {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      <div className={styles.clock__greetings}>{greetings(date)}</div>
    </div>
  );
};

export default Clock;

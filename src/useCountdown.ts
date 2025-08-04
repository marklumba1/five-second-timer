import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const useCountdown = (initialTime: number) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const clearIntervalRef = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const seconds = useMemo(() => Math.ceil(time / 1000), [time]);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTime(initialTime);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 100);
      }, 100);
    }
    return () => clearIntervalRef();
  }, [isRunning]);

  useEffect(() => {
    if (isRunning && time === 0) {
      setIsRunning(false);
      clearIntervalRef();
    }
  }, [time, isRunning]);
  return { time, seconds, handleStart, handlePause, handleReset };
};
export default useCountdown;

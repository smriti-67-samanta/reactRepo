import React from 'react';
import useTimer from '../hooks/useTimer';

const TimerComponent = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h1>Timer: {timer} seconds</h1>
      <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
      <div>
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default TimerComponent;
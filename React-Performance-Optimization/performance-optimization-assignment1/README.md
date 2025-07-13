Q: 7
Creating a Reusable useTimer Custom Hook
Level
Level 1

Time to solve
45 mins

Overview
This assignment focuses on creating a reusable custom hook called useTimer in React. The useTimer hook will provide functionality to start, stop, and reset a timer in a React component. By completing this assignment, you will gain practical experience in creating custom hooks in React and understanding how to encapsulate and reuse logic across different components.

Detailed Explanation
Topics
Creating custom hooks in React
Managing timer state with useEffect and useState
Starting, stopping, and resetting a timer in React components
Problem Statement
You are tasked with creating a reusable custom hook called useTimer that provides functionality to start, stop, and reset a timer in a React application. Follow these guidelines:

Implement useTimer Hook: Create a custom hook named useTimer that encapsulates timer functionality. The hook should return the following:

timer: The current timer value (in seconds).
isRunning: A boolean indicating whether the timer is currently running.
startTimer: A function to start the timer.
stopTimer: A function to stop the timer.
resetTimer: A function to reset the timer to its initial value (0 seconds).
Manage Timer State: Use the useState hook to manage the timer state within the useTimer hook. Initialize the timer value to 0 seconds and the initial running state to false.

Start Timer: Implement the startTimer function to start the timer. This function should increment the timer value by 1 second every second (using setInterval) while the timer is running.

Stop Timer: Implement the stopTimer function to stop the timer. This function should clear the interval set by startTimer.

Reset Timer: Implement the resetTimer function to reset the timer value to 0 seconds and stop the timer if it is running.
Q: 8
Creating a useToggleItems Hook
Level
Level 2

Time to solve
60 mins

Overview
This assignment tasks you with creating a custom hook called useToggleItems in React, which provides functionality to toggle between items in an array. The useToggleItems hook accepts an array of items and an optional initial position as parameters and returns the current state and a function to toggle the state. By completing this assignment, you will enhance your understanding of custom hooks and state management in React.

Detailed Explanation
Topics
Creating custom hooks in React
Managing state in functional components
Toggling between items in an array
Problem Statement
You are tasked with implementing a custom hook called useToggleItems hook in React which will have the following functionalities.

Accept Parameters: The useToggleItems hook accepts two parameters:
initialValue: An array of items.

initialPosition: The position of the initial item state. If not provided, the default value is zero.

initalValue which will be array of items e.g. ["A", "B", "C"]

Second parameter will be the position of initial item state. useToggleItems(["A", "B", "C"], 2)

The second parameter will be optional, if not passed the default value will be zero.

Return Values: The useToggleItems hook returns two values:
First value will be the curent state
The current state, representing the currently selected item from the array.
Second value will be function which will toggle the state. const [state, toggleState] = useToggleItems(["A", "B", "C", "D], 1);
This function should not accept any parameters: toggleState().
See the example to understand the flow of toggle.
const [state, toggleState] = useToggleItems(["A", "B", "C", "D], 1);

Initial state will be B as position is 1
Flow of toggle will be B --> C --> D --> A --> B
App.js
In your app.js use this customHook with the follwing two parameters
- `["A", "B", "C"]`
- Position = `1`

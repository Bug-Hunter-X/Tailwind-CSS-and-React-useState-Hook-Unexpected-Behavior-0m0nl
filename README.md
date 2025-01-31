# Tailwind CSS and React useState Hook Unexpected Behavior

This repository demonstrates a bug encountered when using Tailwind CSS with React's `useState` hook. The counter in the application unexpectedly does not increment as expected.  The issue likely stems from a misconfiguration or interaction between Tailwind and the state management. The `bug.js` file showcases the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description

The counter component fails to increment when the button is clicked.  This could be due to a misunderstanding of how React's `useState` hook updates state or a conflict with the way Tailwind applies CSS classes.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that clicking the increment button does not update the counter.

## Solution

The solution involves ensuring that the state update within the `useState` hook is handled correctly.  The `bugSolution.js` file demonstrates the corrected implementation.
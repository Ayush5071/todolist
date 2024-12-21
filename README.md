# Next.js To-Do App

A simple, static front-end To-Do application built with **Next.js** and Tailwind CSS. The app allows users to add and delete tasks dynamically. It’s designed to demonstrate basic state management in React using the `useState` hook and features a responsive and clean UI.

## Features

- **Add Tasks:**  
  Users can input a task title and description to add new tasks.

- **Delete Tasks:**  
  Tasks can be removed individually with a delete button.

- **Dynamic Task Rendering:**  
  Tasks are displayed dynamically in a list format.

- **No External Backend:**  
  Fully client-side with state management using the `useState` hook.

## Technologies Used

- **Next.js:** Framework for React with server-side rendering and static generation.
- **React Hooks:** `useState` for managing state.
- **Tailwind CSS:** For styling the application.

## Installation


The app will be available at `http://localhost:3000`.

## How to Use

1. Enter a task title and description in the provided input fields.
2. Click the **"Add Task"** button to add the task to the list.
3. Delete any task by clicking the **"Delete"** button next to it.

## Code Overview

### **State Management:**

- **Adding Tasks:**  
  Uses the `submitHandler` function to append a task (containing title and description) to the state `maintask`.

  ```javascript
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
  };

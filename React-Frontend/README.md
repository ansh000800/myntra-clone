# Myntra Clone – React & Redux Frontend Project

## Overview

This project is a **full-fledged frontend clone of the Myntra e-commerce platform**, built to closely simulate real-world frontend application behavior.

The application is developed using **React** with **Redux Toolkit** for state management and integrates with a **local Node.js + Express server** for data storage and fetching.  
It demonstrates modern frontend architecture, clean component design, and proper handling of asynchronous data fetching.

> 📸 **Project snapshots/screenshots have been added to this repository to showcase the UI and functionality.**

---

## Features

- Complete Myntra-style frontend UI
- Built with React (component-based architecture)
- Global state management using Redux Toolkit
- Data fetched from a local Express backend
- Loading spinner during API calls
- Centralized fetch status handling
- Clean and modular folder structure
- Client-side routing with React Router

---

## Tech Stack

### Frontend

- React
- Redux Toolkit
- React Redux
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend (Local Server)

- Node.js
- Express.js
- Body Parser
- REST APIs

---

## Project Structure

src/
│── components/
│ ├── LoginSpinner.js
│ ├── HomeItem.js
│ ├── BagItemContainer.js
│ ├── BagSummary.js
│ ├── FetchItem.js
│ ├── Header.js
│ ├── Footer.js
│
│── store/
│ ├── BagSlice.js
│ ├── FetchStatus.js
│ ├── ItemSlice.js
│ ├── index.js
│
│── App.js
│── Home.js
│── Bag.js

---

## State Management (Redux)

The application uses **Redux Toolkit** for efficient and scalable state management.

### ItemSlice

- Stores product item data
- Handles initial data loading from the backend

### BagSlice

- Manages cart/bag items
- Handles adding and removing products

### FetchStatus

- Tracks API request lifecycle
- Controls loading spinner visibility
- Prevents duplicate API calls

All states are managed centrally to ensure predictable and maintainable data flow.

---

## Data Fetching

- Data is fetched from a **local Express server**
- API endpoint:
  http://localhost:8080/items

- An artificial delay is added on the backend to simulate real-world API response time
- Fetch lifecycle is controlled using Redux actions:
- Fetch started
- Loading spinner displayed
- Data stored in Redux store
- Fetch completed

---

## Screenshots

📸 **Screenshots of the project UI and functionality have been added to this repository**  
These snapshots highlight:

- Home page layout
- Product listings
- Bag/cart functionality
- Loading spinner behavior

---

## How to Run the Project

### 1. Start the Backend Server

```bash
cd backend
node app.js

The backend server will run on:
http://localhost:8080


### 2.  Start the Frontend Application
npm install
npm run dev

## Learning Outcomes

- Hands-on experience with Redux Toolkit
- Understanding real-world API data fetching patterns
- Managing loading states globally
- Structuring scalable React applications
- Integrating frontend with backend APIs

---

## Future Enhancements

- User authentication and login system
- Checkout and payment flow
- Product search, filter, and sort
- Responsive UI improvements
- Deployment to cloud platforms

---

## Author

**Anshul Sharma**
Aspiring Full Stack Developer
```

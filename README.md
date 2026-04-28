# 🧾 Ticketing & Journaling App Frontend

This is the frontend of a full-stack ticketing and journaling application, built with **React**, **Redux**, and **Redux Thunk**. It connects to a secure backend API to enable users to create, view, update, and delete tickets or notes in a seamless, responsive interface.

---

## 🎯 Features

- Create, read, update, and delete notes/tickets
- Redux store for global state management
- Redux Thunk for handling async API calls
- Error handling and user feedback

---

## 🧰 Tech Stack

- **Frontend Framework:** React
- **State Management:** Redux (Core) with Redux Thunk for async actions
- **Styling:** CSS
- **HTTP Client:** fetch

---

## ⚙️ State Management Architecture

This project uses **Redux Core** (i.e., manually written action creators, action types, and reducers) along with **Redux Thunk** for handling asynchronous API calls.

- Organized Redux files into `actions/`, `reducers/`, and `store.js`
- Manages loading states, and note/ticket data

---
## Demo

[View App Here](https://ticket-app-with-redux-frontend.onrender.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
- git clone https://github.com/Louisa-Otoo/ticket_app_with_redux_core.git
- cd ticket_app_with_redux_core

## 2. Install dependencies
npm install

### 3. Create .env file
In the root of your project:

- REACT_APP_API_URL=http://localhost:5000
- Replace the URL with your backend's live or local address.

### 4. Start the frontend
- npm start
- App should run at: http://localhost:5000

### 🔄 Backend Integration
This frontend connects to the Ticketing & Journaling Backend built with Node.js, Express, and MongoDB. It works with the backend API to persist and retrieve ticket data, enabling full CRUD functionality for tickets and notes.

Make sure the backend server is running for full functionality.


### 📌 Notes
Easily extendable for task tracking, personal journaling, or customer ticketing systems

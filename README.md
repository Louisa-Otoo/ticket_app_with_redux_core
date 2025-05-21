# 🧾 Ticketing & Journaling App Frontend

This is the frontend of a full-stack ticketing and journaling application, built with **React**, **Redux**, and **Redux Thunk**. It connects to a secure backend API to enable users to create, view, update, and delete tickets or notes in a seamless, responsive interface.

---

## 🎯 Features

- Create, read, update, and delete notes/tickets
- Redux store for global state management
- Redux Thunk for handling async API calls
- Responsive and accessible UI
- Error handling and user feedback

---

## 🧰 Tech Stack

- **Frontend Framework:** React
- **State Management:** Redux, Redux Thunk
- - **State Management:** Redux (Core) with Redux Thunk for async actions
- **Styling:** CSS
- **HTTP Client:** fetch

---

## 🚀 Getting Started

### 1. Clone the repository
- git clone https://github.com/yourusername/ticketing-frontend.git
- cd ticketing-frontend

## 2. Install dependencies
npm install

### 3. Create .env file
In the root of your project:

REACT_APP_API_URL=http://localhost:5000/api
Replace the URL with your backend's live or local address.

4. Start the frontend
npm start
App should run at: http://localhost:5000

🔄 Backend Integration
This frontend connects to the Ticketing & Journaling Backend built with Node.js, Express, and MongoDB.

Make sure the backend server is running for full functionality.

📸 Screenshots
Home Page

Note Creation


📌 Notes
Protected routes use conditional rendering and redirection

Easily extendable for task tracking, personal journaling, or customer ticketing systems

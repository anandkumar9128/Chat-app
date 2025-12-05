💬 Real-Time Chat App (MERN + Socket.io)

A full-stack real-time chat application built using the MERN stack with Socket.io for instant messaging.
Users can register, log in, upload profile pictures via Cloudinary, view active users, and chat in real-time.

🚀 Features
👤 User Authentication

Secure login & signup

Password hashing with bcryptjs

JWT-based authentication

Cloudinary integration for profile photo upload

💬 Real-Time Chat

One-to-one instant messaging

Socket.io-powered live communication

Online/offline user status

Auto-refreshing chat window

🗄️ Backend (Node.js + Express + MongoDB)

REST APIs for auth, users, and messages

Real-time socket server

MongoDB models for user & chat messages

🌐 Frontend (React + Vite)

Modern UI with TailwindCSS

Authentication protected routes

Chat UI with live updates

Axios for API calls

React Context for global state management

📁 Project Structure
Chat-App/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── server/                # Backend (Node.js)
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── server.js
    ├── utils/
    └── package.json

🛠️ Tech Stack
Frontend

React

Vite

Tailwind CSS

Axios

React Context API

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcryptjs

Cloudinary

Socket.io

⚙️ Setup & Installation
1. Clone the repository
git clone <your_repo_url>
cd Chat-App

🖥️ Backend Setup
cd server
npm install
npm run start

Create a .env file inside /server:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx


Backend runs at:

http://localhost:5000

🌐 Frontend Setup
cd client
npm install
npm run start


Frontend runs at:

http://localhost:5173

🔌 Socket.IO

Your backend initializes socket.io inside server.js and listens for:

user online/offline

sendMessage

receiveMessage

Frontend connects using:

const socket = io("http://localhost:5000");

🚀 Future Improvements

Group chats

Message read receipts

File/image sharing

Typing indicator

Dark mode

🤝 Contributing

Pull requests are welcome!

⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

# 📚 SmartLMS - AI-Powered Learning Management System

SmartLMS is a **scalable, AI-powered Learning Management System (LMS)** built with the **MERN stack**. It leverages the **Google Gemini API** for intelligent course search, provides secure authentication via Google OAuth, and integrates **Razorpay** for seamless course purchases. Designed for both students and instructors, SmartLMS ensures a smooth and modern learning experience.

---

## 🚀 Features

- **AI-Powered Smart Search**  
  Utilizes **Google Gemini API** to deliver quick and accurate course discovery.

- **Secure Authentication**  
  Integrated **Google OAuth** for seamless login and account security.

- **Payments Integration**  
  **Razorpay Payment Gateway** for course purchases with real-time status tracking.

- **Student Dashboard**  
  Track enrolled courses, monitor progress, and manage learning activities.

- **Instructor Dashboard**  
  Manage created courses, track student engagement, and analyze performance.

- **State Management**  
  **Redux Toolkit** for predictable, efficient state management across the app.

- **Modern UI/UX**  
  Fully responsive design built with **Tailwind CSS** ensuring accessibility across devices.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux Toolkit, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** Google Gemini API
- **Payments:** Razorpay
- **Authentication:** Google OAuth
- **Others:** REST APIs, JWT (if applicable)

---

## 📂 Project Structure

```
SmartLMS/
├── client/          # React frontend (UI)
├── server/          # Node.js + Express backend
├── models/          # MongoDB models
├── routes/          # API routes
├── controllers/     # Business logic
└── README.md
```

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/SmartLMS.git
cd SmartLMS
```

### 2️⃣ Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3️⃣ Setup Environment Variables
Create `.env` files in both `server` and `client` directories with the following:

#### Server `.env`
```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

#### Client `.env`
```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY=your_razorpay_key
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### 4️⃣ Run the Application
```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```

The app should now be running on:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and create a PR.


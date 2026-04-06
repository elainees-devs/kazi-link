
---

# Kazi Link MERN Job Portal – Stage 1: Traffic First, Auth Later

## 🚀 Project Overview

This is the **first stage** of the Kazi Link Job Portal project. The goal of Stage 1 is to **attract users and provide value without requiring authentication**. At this stage, the focus is on SEO-friendly public job listings and anonymous job search.

Stage 1 lays the foundation for engagement and user trust before any login or monetization features are introduced.

---

## 🎯 Objectives

* Build a **public job listing platform** that anyone can browse.
* Optimize database queries for **fast performance** using `.lean()` and selective fields.
* Ensure **searchable and SEO-friendly content**.
* Prepare for Stage 2 by designing **scalable architecture**.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas or local)
* **ORM / ODM:** Mongoose
* **Other Tools:** TypeScript for type safety

---

## 📂 Features Implemented in Stage 1

* Anonymous job search and listings
* Publicly visible job details
* Pagination and basic filtering for listings
* Optimized database queries for speed

**Not yet implemented:**

* Authentication (JWT / OAuth)
* Paid features or dashboards
* Notifications or advanced search

---

## 🛠️ Getting Started

### Prerequisites

* Node.js v18+
* npm or yarn
* MongoDB instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kazi-link.git
cd kazi-link

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the Project

```bash
# Start backend server
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
```

Frontend will run on `http://localhost:3000`, backend API on `http://localhost:5000`.

---

## 🧩 Project Structure

kazi-link/
├── server/
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── services/     # Business or helper services
│   ├── types/        # TypeScript type definitions
│   ├── constants/    # App constants and enums
│   ├── controllers/  # Request handling / business logic
│   └── server.ts     # Express server entry point
└── client/
    ├── src/
    │   ├── components/ # React UI components
    │   ├── pages/      # Page-level components
    │   ├── types/      # Global TypeScript types
    │   ├── api/        # API call modules
    │   └── App.tsx     # Main App component

---

## ⚡ Next Steps (Stage 2 Preview)

* Add **authentication and user accounts**
* Implement **dashboards for candidates and employers**
* Prepare for **monetization features** (freemium model)
* Add **middleware for validation, analytics, and subscription checks**

---

## 💡 Notes / Best Practices

* Focus on **performance and scalability** from Stage 1.
* Keep **middleware modular**; don’t combine too much logic in a single controller.
* Lower barriers first; users should see value **before sharing personal data**.

---

## 📄 License

MIT License © Elaine Muhombe

---


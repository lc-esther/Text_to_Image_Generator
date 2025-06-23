# 🖼️ Text-to-Image Generator (AI-Powered)

This is a full-stack application that allows users to generate images from text prompts using an AI model (like DALL·E or Stable Diffusion). It includes a secure user authentication system, credit-based image generation, and a history of generated results.

---

## 🚀 Tech Stack

### 🔧 Backend
- **Node.js + Express** — REST API
- **MongoDB + Mongoose** — Database
- **JWT** — Authentication
- **Multer / Cloudinary (optional)** — For image uploads
- **AI Integration** — DALL·E / Stability API / Custom ML endpoint

### 🌐 Frontend
- **React + Vite** — SPA architecture
- **Tailwind CSS** — Styling
- **React Context API** — Global state management
- **Axios** — API communication

---


## ✨ Features

- 🔐 **JWT Authentication**
- 💳 **Credit-Based Image Generation**
- 💬 **Text Prompt Input**
- 🧠 **AI-Generated Images**
- 📜 **Result History Page**
- 🛒 **Buy Credits Page**
- 💡 **Modern UI with Tailwind**

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/lc-esther/text-to-image-generator.git
cd text-to-image-generator
### Setup Backend
cd backend
npm install
# Add your .env variables
npm start
### Setup Frontend
cd frontend
npm install
npm run dev


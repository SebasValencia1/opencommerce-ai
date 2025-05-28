# 🛒 eCommerce App with AI Assistant – TODO List

## 📦 Backend (Node.js + TypeScript + MongoDB)

### ✅ Core Setup
- [x] Initialize Node.js project with TypeScript
- [x] Setup `.gitignore`, `.env`, `config.ts`
- [x] Connect to MongoDB using Mongoose
- [x] Define layered architecture (controllers, services, models)

---

### 👤 User & Auth
- [x] Create User model (Mongoose)
- [x] Implement user registration and login
- [ ] Add JWT token authentication
- [ ] Email verification (via Keycloak or custom)
- [ ] Input validation (Zod / Joi)

---

### 🛍️ Product Module
- [x] Create Product model
- [x] CRUD endpoints (admin)
- [ ] Product filtering and search
- [ ] Image upload (base64 or file)


---

## 🧠 AI & ML Features

### 🤖 Product Search
- [ ] See WORKFLOWS.md

### 🤖 1. LLM Chatbot Assistant
- [x] Design chatbot UI in frontend
- [ ] Connect to LLM API (e.g., OpenAI)
- [ ] Route user questions to the chatbot
- [ ] Display conversational responses
- [ ] Route relevant queries to product search or ML suggestion module

---

### 🧠 2. ML Suggestion Module (Personalized Recommendations)

#### 📦 Backend
- [ ] Create `SuggestionService.ts`
  - [ ] Method to call external ML API
- [ ] Create `SuggestionController.ts`
  - [ ] `GET /api/suggestions` (auth-protected)
- [ ] Implement user behavior logging
  - [ ] Track product views, searches, clicks
  - [ ] Save to `UserActivity` collection

#### 🤖 ML API (external or local)
- [ ] Accept user history input (`userId`, `searches`, `recentlyViewed`)
- [ ] Return ranked product IDs
- [ ] Deploy as separate service (e.g., Flask or Node)

#### 🎨 Frontend
- [ ] Build `SuggestionWidget.tsx`
  - [ ] Fetch and display suggestions
- [ ] Track user activity
  - [ ] Log viewed products
  - [ ] Log search queries
  - [ ] Periodically sync with backend

---

## 🛒 Cart & Orders
- [ ] Create Cart model & service
- [ ] Create Order model & endpoints
- [ ] Implement checkout logic (payment stub or real API)
- [ ] Order history page

---

## 🔐 Security
- [ ] Add auth middleware
- [ ] Rate limiting, CORS
- [ ] Secure headers (Helmet)
- [ ] CSP config (especially for image base64 & AI endpoints)

---

## 🚀 Deployment
- [ ] Dockerize backend, frontend, and ML API
- [ ] Nginx reverse proxy with CSP & HTTPS
- [ ] Setup environment variables
- [ ] Deploy to Render / Vercel / DigitalOcean

---

## 📚 Documentation
- [ ] Add full `README.md`
- [ ] Document API endpoints (Postman / Swagger)
- [ ] Setup contribution guidelines
- [ ] Explain AI assistant and ML suggestion logic

---

✅ Keep this list updated as your project grows!

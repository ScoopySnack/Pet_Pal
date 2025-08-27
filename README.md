# 🐾 PetPal — Full-Stack Pet Care & Management App

[![Java](https://img.shields.io/badge/Java-24-red)](#)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)](#)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB)](#)
[![Build](https://img.shields.io/badge/Build-Maven%20%2B%20npm-informational)](#)
[![Database](https://img.shields.io/badge/DB-MySQL-3E6E93)](#)
[![License](https://img.shields.io/badge/License-MIT-purple)](#)

> PetPal helps pet owners (and vets/admins) keep pets happy & healthy: register pets, track care tasks (vaccines, appointments, meds), get breed facts, upload photos, and manage everything behind secure authentication.

---

## 📚 Table of Contents
- [About](#-about)
- [Key Features](#-key-features)
- [Screenshots](#-screenshots)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Backend — Spring Boot](#backend--spring-boot)
  - [Frontend — React](#frontend--react)
- [Environment Variables](#-environment-variables)
- [API & Auth](#-api--auth)
  - [Swagger/OpenAPI](#swaggeropenapi)
  - [Sample Endpoints](#sample-endpoints)
  - [Auth Flow](#auth-flow)
- [Testing](#-testing)
- [Build & Deploy](#-build--deploy)
  - [Manual](#manual)
  - [Docker Compose (optional)](#docker-compose-optional)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 💡 About
**PetPal** is a full-stack app built as a final project for **Coding Factory**. The goal is to demonstrate clean domain modeling, CRUD with repositories/services/controllers, secure authentication/authorization, and a modern, friendly UI.

- Multi-role access (**Owner**, **Vet**, **Admin**)
- RESTful API with DTOs & validation
- CSR Front-end (React) consuming the API
- Optional API docs via Swagger

---

## ✨ Key Features
- ✅ **User Accounts & Roles** — JWT authentication, route guards.
- ✅ **Pet Profiles** — name, breed, birth date, weight, notes, photos.
- 🚧 **Care Tasks** — vaccinations, meds, vet visits (basic CRUD done, reminders pending).
- 🚧 **Breed Facts** — fun facts (endpoint ready, UI in progress).
- ❌ **Friends / social features** — not planned for MVP.
- ✅ **Responsive UI** — Tailwind + Framer Motion base styling done.
- 🚧 **Testing** — some backend unit tests, frontend tests pending.

---

## 🖼 Screenshots
### Landing Page
> Current design of the Home/Landing screen.

<img width="850" height="400" alt="image" src="https://github.com/user-attachments/assets/6f245ec4-c504-4a94-b0f7-5b5bf96f325c" />

(others -> in progress)

---

## 🏗 Architecture (in Progress)

```mermaid
flowchart LR
  %% Subgraphs ΔΕΝ έχουν [] στον τίτλο
  subgraph Frontend
    direction TB
    Login[Login / Register] --> Routes[Protected Routes]
    Routes --> Pets[Pets CRUD]
    Routes --> Tasks[Care Tasks]
    Routes --> Facts[Breed Facts]
  end

  subgraph Backend
    direction TB
    Ctrls[REST Controllers] --> Services[Services]
    Services --> Repos[Repositories / DAO]
    Repos --> DB[(MySQL DB)]
    Services --> Auth[JWT Provider]
  end

  %% Επικοινωνία Frontend <-> Backend
  Login <--> Ctrls
  Pets <--> Ctrls
  Tasks <--> Ctrls
  Facts <--> Ctrls
````

---

## 🧰 Tech Stack

**Backend**

* Java 24+, Spring Boot 3.x (Web, Security, Data JPA, Validation)
* MySQL 8.x (or MariaDB)
* Maven
* Swagger/OpenAPI (springdoc-openapi)

**Frontend**

* React 18+ (CRA)
* React Router, Axios
* Tailwind CSS, Framer Motion, lucide-react
* React Hook Form + Zod (validation)

---

## 📂 Project Structure

```
Pet_Pal/
├─ backend/
│  ├─ src/main/java/gr/codingfactory/petpal/
│  │  ├─ model/            # JPA entities (Pet, CareTask, User, Role, etc.)
│  │  ├─ dto/              # Request/Response DTOs
│  │  ├─ repository/       # Spring Data JPA repositories
│  │  ├─ service/          # Business logic
│  │  ├─ security/         # JWT, filters, config
│  │  └─ controller/       # REST controllers
│  ├─ src/main/resources/
│  │  ├─ application.yml   # DB & JWT config
│  └─ pom.xml
└─ frontend/
   ├─ src/
   │  ├─ components/       # UI components
   │  ├─ pages/            # Routes (Home, Login, Dashboard, Pets, Tasks)
   │  ├─ hooks/            # custom hooks
   │  ├─ lib/              # api client, utils
   │  ├─ styles/           # Tailwind entry
   │  └─ main/index files
   ├─ package.json
   └─ tailwind.config.js
```

---

## ⚡ Quick Start

### Prerequisites

* **Java 24+**, **Maven 3.9+**
* **Node.js 18+** and **npm**
* **MySQL 8+**
* (Optional) **Docker**

### Backend — Spring Boot

```bash
mvn clean install
mvn spring-boot:run
```

### Frontend — React

```bash
npm install
npm start
```

---

## 🔐 Environment Variables

**Backend**

* `DB_USERNAME`, `DB_PASSWORD`
* `JWT_SECRET`
* `CORS_ALLOWED_ORIGINS`

**Frontend**

* `REACT_APP_API_BASE_URL`

---

## 🔗 API & Auth

### Swagger/OpenAPI

```
http://localhost:8080/swagger-ui.html
```

### Sample Endpoints

```
POST   /api/auth/login
GET    /api/pets
POST   /api/pets
```

### Auth Flow

* Login/Register → JWT token
* Token stored client-side
* Token sent in `Authorization: Bearer <token>`

---

## ✅ Testing

**Backend**

```bash
mvn test
```

**Frontend**

```bash
npm test
```

---

## 🚀 Build & Deploy

### Manual

* Backend JAR + MySQL
* Frontend `npm run build`

### Docker Compose (optional)

```yaml
version: "3.9"
services:
  db:
    image: mysql:8
  backend:
    build: ./backend
  frontend:
    build: ./frontend
```

---

## 🗺 Roadmap

* [x] Authentication & JWT
* [x] Pet CRUD (backend + UI)
* [ ] Care task reminders
* [ ] Role dashboards (Owner/Vet/Admin)
* [ ] Photo gallery
* [ ] i18n (EN/GR)
* [ ] E2E tests (Cypress/Playwright)

---

## 📄 License

MIT

---

## 📬 Contact

**Angeliki Nikolaou** — [GitHub @ScoopySnack](https://github.com/ScoopySnack)

```

# Google Calendar Clone — Full Stack Application

A fully interactive, high‑fidelity clone of Google Calendar built using a modern frontend stack and a scalable backend. The project focuses on accurate event management, smooth interactions, and production‑ready architecture.

---

## 1. Project Setup and Running Instructions

### **1.1 Prerequisites**

* Node.js (v18 or above)
* MongoDB Atlas or local MongoDB instance
* npm or yarn

---

## **1.2 Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

This starts Vite's development server.

To build for production:

```bash
npm run build
npm run preview
```

---

## **1.3 Backend Setup**

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
ORIGIN=http://localhost:5173
```

Run the backend:

```bash
npm start
```

---

## **1.4 Environment Variables**

### **Frontend:**

```
VITE_API_URL=http://localhost:5000/api
```

### **Backend:**

```
MONGODB_URI=...
PORT=...
ORIGIN=...
```

---

# 2. Architecture and Technology Choices

## **2.1 Frontend Architecture**

* **Framework:** React
* **Bundler:** Vite for fast HMR and optimized builds
* **State Management:** Local state + derived state from data fetching
* **HTTP Client:** Axios for flexible API handling
* **Date Utilities:** date-fns for performant date operations
* **Animations:** Tailwind CSS transition utilities are used for all animations in the project.

### Tailwind-Based Animations Implemented

* **Hover transitions:** smooth opacity and scale changes using `transition`, `duration-200`, `ease-in-out` classes.
* **Modal animation:** fade-in and scale-up using Tailwind classes and conditional rendering.
* **Week switching:** subtle opacity transition when the selected week changes.
* **Event interaction:** background and border transitions on hover.

These transitions keep the interface lightweight while maintaining smooth interaction similar to Google Calendar.

---

# 5. Future Enhancements

## **5.1 Monthly / Yearly Views**

Add full month and year navigation.

## **5.2 Drag & Drop Event Resizing**

Resize events vertically to change duration.

## **5.3 Notifications & Reminders**

Email or push notifications before event start.

## **5.4 Color‑Coding & Labels**

User‑defined categories: Work, Personal, Exam, etc.

## **5.5 Full Mobile Responsiveness**

Dedicated responsive week and month layouts.

---

# 6. Screenshots & Demo

## **6.1 Application Preview**

*Add your screenshots here. Replace the placeholders below with actual image links or drag images into the README section.*

* **Week View:**

  `![Week View Screenshot](path/to/week-view.png)`

* **Event Creation Modal:**

  `![Event Modal Screenshot](path/to/event-modal.png)`

* **Mini Calendar (if added):**

  `![Mini Calendar Screenshot](path/to/minicalendar.png)`

* **Mobile Responsive Layout (optional):**

  `![Mobile View](path/to/mobile-view.png)`

You can upload images in GitHub issues or repo and paste links here.

---

# 7. Live Demo / Deployment

If deployed on Render / Vercel / Netlify, add the link here:

**Live Demo:** *[https://calendarfrontend6.onrender.com](https://calendarfrontend6.onrender.com)*

---

# 8. Conclusion

This project demonstrates a full production-style calendar system with:

* Scalable backend
* Smooth interactive frontend
* Clean date handling
* Real-world features like conflict detection and animations

Use this README as a complete guide for documentation and deployment.

# ServeNest 🏠🔧

> A full-stack home services web app connecting homeowners with skilled professionals — similar to Urban Company.

![ServeNest](https://img.shields.io/badge/ServeNest-Home%20Services-1A5276?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🔗 Live Demo
**[https://Pavan132312.github.io/servenest](https://Pavan132312.github.io/servenest)**

---

## 📌 About The Project

**ServeNest** bridges the gap between homeowners and skilled workers (plumbers, electricians, carpenters, painters, and more) in tier-2 and tier-3 cities across Karnataka — an underserved market that platforms like Urban Company don't fully cover.

Users can search and book workers nearby, workers can manage their profiles and apply for jobs, and admins can oversee the entire platform.

---

## ✨ Features

### 🏠 For Users
- Register and login with location details
- Browse and filter workers by service, city, and availability
- View detailed worker profiles with ratings and reviews
- Book a worker instantly with date, time, and address
- Post a job and receive applications from workers
- Rate and review workers after service completion
- Cancel bookings and manage booking history

### 🔧 For Workers
- Register with skill, experience, price, and location
- Toggle availability status (Available / Busy)
- View and manage incoming bookings
- Apply to jobs posted by users
- Receive ratings and reviews from customers
- Update profile details anytime

### 🛡️ For Admin
- View platform-wide stats (users, workers, bookings, jobs)
- Browse and search all registered workers and users
- Filter bookings by status
- Remove workers or users from the platform
- View all posted jobs with applicant counts

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and layout |
| CSS3 | Styling, responsive design, animations |
| JavaScript (ES6+) | App logic, DOM manipulation, API calls |
| localStorage | Data persistence (users, bookings, reviews) |
| sessionStorage | Session management (login state) |

---

## 📁 Project Structure

```
servenest/
├── index.html              ← Home page with search and service categories
├── login.html              ← Register / Login for all 3 roles
├── user-dashboard.html     ← User: browse, book, post jobs, my bookings
├── worker-dashboard.html   ← Worker: profile, job alerts, bookings, reviews
├── admin-dashboard.html    ← Admin: view all users, workers, bookings
├── worker-profile.html     ← Public worker profile with ratings and Book Now
├── bookings.html           ← Standalone bookings page with filter tabs
├── style.css               ← Complete styling for all pages
└── app.js                  ← All data, storage helpers, and utility functions
```

---

## 🚀 Getting Started

### Run Locally
1. Clone the repository:
```bash
git clone https://github.com/Pavan132312/servenest.git
```
2. Open the folder in VS Code
3. Install the **Live Server** extension
4. Right-click `index.html` → **Open with Live Server**

### Admin Login
```
Email:    admin@servenest.com
Password: admin123
```

---

## 📸 Pages Overview

| Page | Description |
|---|---|
| Home | Hero section, search bar, service categories, top workers |
| Login / Register | Role-based registration for User, Worker |
| User Dashboard | Browse workers, post jobs, manage bookings |
| Worker Dashboard | Manage profile, view job alerts, track bookings |
| Admin Dashboard | Platform overview and management |
| Worker Profile | Public profile with reviews and Book Now button |
| My Bookings | Full booking history with filter tabs |

---

## 💡 Key Highlights

- **No backend or database required** — fully runs in the browser using localStorage
- **Role-based access control** — Users, Workers, and Admin see different dashboards
- **Real-time rating system** — Reviews update worker ratings instantly
- **Job board** — Users post jobs, workers apply — two-way marketplace
- **Mobile responsive** — Works on all screen sizes

---

## 👨‍💻 Author

**Pavan V**
- GitHub: [@Pavan132312](https://github.com/Pavan132312)
- Email: pavanv9980@gmail.com
- LinkedIn: [linkedin.com/in/pavan-v-167057312](https://linkedin.com/in/pavan-v-167057312)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please give it a star on GitHub!

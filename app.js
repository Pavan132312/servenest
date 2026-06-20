/* ── DATA ── */
const SERVICES = ["Plumber","Electrician","Carpenter","Painter","Cleaning","AC Repair","Mason","Gardener"];

const DEFAULT_WORKERS = [
  { id:1, name:"Ramesh Kumar",   service:"Plumber",      location:"Bengaluru", price:300, rating:4.5, reviews:28, experience:"5 years", phone:"9876543210", about:"Expert in all kinds of plumbing work including pipe repair, leakage fix and bathroom fittings.", available:true },
  { id:2, name:"Suresh Naik",    service:"Electrician",  location:"Bengaluru", price:350, rating:4.8, reviews:42, experience:"7 years", phone:"9876543211", about:"Certified electrician with experience in home wiring, switchboard repair and inverter installation.", available:true },
  { id:3, name:"Manjunath B",    service:"Carpenter",    location:"Mysuru",    price:400, rating:4.3, reviews:19, experience:"4 years", phone:"9876543212", about:"Skilled carpenter for furniture making, door repair and wooden work.", available:false },
  { id:4, name:"Prakash S",      service:"Painter",      location:"Bengaluru", price:250, rating:4.6, reviews:35, experience:"6 years", phone:"9876543213", about:"Professional painter for interior and exterior walls. Use quality paints only.", available:true },
  { id:5, name:"Venkatesh R",    service:"Cleaning",     location:"Bengaluru", price:200, rating:4.2, reviews:15, experience:"3 years", phone:"9876543214", about:"Deep cleaning specialist for home, kitchen and bathroom cleaning services.", available:true },
  { id:6, name:"Arjun Gowda",    service:"Plumber",      location:"Mysuru",    price:280, rating:4.7, reviews:31, experience:"8 years", phone:"9876543215", about:"Experienced plumber handling water tank cleaning, pipe installation and leak repairs.", available:true },
  { id:7, name:"Ravi Shankar",   service:"AC Repair",    location:"Bengaluru", price:500, rating:4.9, reviews:56, experience:"10 years", phone:"9876543216", about:"AC specialist for all brands. Service, gas refill, installation and repair.", available:true },
  { id:8, name:"Deepak M",       service:"Carpenter",    location:"Bengaluru", price:380, rating:4.4, reviews:22, experience:"5 years", phone:"9876543217", about:"Expert in modular furniture, kitchen cabinets and wooden flooring.", available:false },
  { id:9, name:"Kiran Raj",      service:"Painter",      location:"Mysuru",    price:270, rating:4.6, reviews:18, experience:"4 years", phone:"9876543218", about:"Wall painting, texture work, waterproofing and putty work done with care.", available:true },
  { id:10, name:"Naveen S",      service:"Electrician",  location:"Bengaluru", price:320, rating:4.5, reviews:29, experience:"6 years", phone:"9876543219", about:"Home wiring, fan installation, CCTV setup and all electrical repairs.", available:true },
  { id:11, name:"Raju Hegde",    service:"Mason",        location:"Bengaluru", price:450, rating:4.3, reviews:14, experience:"9 years", phone:"9876543220", about:"Masonry work including brick laying, plastering, flooring and tiling.", available:true },
  { id:12, name:"Srinivas K",    service:"Gardener",     location:"Mysuru",    price:180, rating:4.1, reviews:11, experience:"3 years", phone:"9876543221", about:"Garden maintenance, plant care, lawn mowing and landscaping services.", available:true },
];

/* ── STORAGE HELPERS ── */
function getWorkers() {
  const stored = localStorage.getItem("sn_workers");
  if (!stored) {
    localStorage.setItem("sn_workers", JSON.stringify(DEFAULT_WORKERS));
    return DEFAULT_WORKERS;
  }
  return JSON.parse(stored);
}

function saveWorkers(workers) {
  localStorage.setItem("sn_workers", JSON.stringify(workers));
}

function getUsers() {
  return JSON.parse(localStorage.getItem("sn_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("sn_users", JSON.stringify(users));
}

function getBookings() {
  return JSON.parse(localStorage.getItem("sn_bookings") || "[]");
}

function saveBookings(bookings) {
  localStorage.setItem("sn_bookings", JSON.stringify(bookings));
}

function getJobs() {
  return JSON.parse(localStorage.getItem("sn_jobs") || "[]");
}

function saveJobs(jobs) {
  localStorage.setItem("sn_jobs", JSON.stringify(jobs));
}

function getReviews() {
  return JSON.parse(localStorage.getItem("sn_reviews") || "[]");
}

function saveReviews(reviews) {
  localStorage.setItem("sn_reviews", JSON.stringify(reviews));
}

/* ── SESSION ── */
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("sn_current_user") || "null");
}

function setCurrentUser(user) {
  sessionStorage.setItem("sn_current_user", JSON.stringify(user));
}

function logout() {
  sessionStorage.removeItem("sn_current_user");
  window.location.href = "index.html";
}

function requireAuth(role) {
  const user = getCurrentUser();
  if (!user) { window.location.href = "login.html"; return null; }
  if (role && user.role !== role) { window.location.href = "index.html"; return null; }
  return user;
}

/* ── UTILITIES ── */
function showToast(msg, type = "success") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = "toast " + type + " show";
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" });
}

function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

function getAvatarColor(name) {
  const colors = ["#1A5276","#1D9E75","#E67E22","#8E44AD","#C0392B","#16A085"];
  let sum = 0;
  for (let c of name) sum += c.charCodeAt(0);
  return colors[sum % colors.length];
}

/* ── NAVBAR ACTIVE USER ── */
function updateNavbar() {
  const user = getCurrentUser();
  const navUser = document.getElementById("nav-user");
  if (!navUser) return;
  if (user) {
    navUser.innerHTML = `
      <a href="${user.role === 'worker' ? 'worker-dashboard.html' : user.role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html'}">
        👤 ${user.name.split(" ")[0]}
      </a>
      <a href="#" onclick="logout()" class="btn-nav">Logout</a>
    `;
  } else {
    navUser.innerHTML = `
      <a href="login.html">Login</a>
      <a href="login.html" class="btn-nav">Register</a>
    `;
  }
}

document.addEventListener("DOMContentLoaded", updateNavbar);
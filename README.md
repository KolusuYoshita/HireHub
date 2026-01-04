# HireHub — Full-Stack MERN Job Portal 2025

HireHub is a professional role-based platform designed to connect Recruiters and Job Seekers. Built using the MERN stack, it offers a seamless experience for posting jobs, managing applicants, and tracking career opportunities in real-time.

---

## Key Features

### For Job Seekers
- Personalized Dashboard: Track the status of all your applications in one place.
- Browse and Apply: Search through active job listings and submit applications with a single click.
- Application Tracking: Monitor your progress from "Applied" to "Interview" or "Hired."

### For Recruiters
- Job Management: Create, update, and delete job postings with ease.
- Applicant Tracking System (ATS): View candidate profiles and manage the hiring pipeline for every role.
- Secure Management: Handle all recruitment data through a dedicated recruiter interface.

---

## Technical Highlights

- Role-Based Access Control (RBAC): Distinct permissions and views for Recruiters vs. Job Seekers.
- Secure Authentication: User data protection using bcrypt for password hashing and RESTful API security.
- State Management: Designed with React and Redux for a fast, smooth, and responsive user experience.
- Mobile-First Design: Fully responsive frontend that works on all devices.

---

## Tech Stack

- Frontend: React.js, Redux, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Security: bcrypt, REST APIs

---

## Setup and Installation

1. Clone the repository to your local machine.
2. Install dependencies by running 'npm install' in the root directory.
3. Install frontend dependencies by running 'npm install' inside the client folder.
4. Configure your environment variables (.env) with your MongoDB URI and Secret Key.
5. Start the development server using 'npm run dev'.

---

## API Endpoints

- POST /api/auth/register : User registration
- POST /api/auth/login : User login
- GET /api/jobs : Fetch all jobs
- POST /api/jobs : Post a new job (Recruiter)
- POST /api/apply : Submit a job application (Seeker)

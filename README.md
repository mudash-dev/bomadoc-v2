# BomaDoc 2.0.0 — Universal Telemedicine Platform

BomaDoc 2.0.0 is a modern web-based revamp of the original BomaDoc Android application. This version transitions the project from a native mobile app (Kotlin/Jetpack Compose) to a high-performance, universal web application to improve accessibility for both rural and urban users in Kenya.

## ⚖️ Legal Disclaimer & Project Status
**IMPORTANT:** This application is developed strictly for **educational, research, and personal portfolio purposes**. 
- It is **NOT** a certified medical device or platform.
- It does **NOT** fully comply with the **Kenya Data Protection Act (2019)** or the **Digital Health Act (2023)** regarding the handling of sensitive medical data, data localization, or electronic prescription standards.
- Users should not input real personal health information. The developers assume no liability for data breaches or medical outcomes resulting from the use of this software.

## 🚀 The Mission
Building on research regarding **User-Centered Design (UCD)** in rural Kenya, BomaDoc 2.0.0 aims to bridge the healthcare gap by providing a seamless interface for video consultations, appointment scheduling, and digital health records.

## 🛠 Tech Stack (The "V2" Revamp)
- **Framework:** Next.js 14 (App Router)
- **Authentication:** Clerk (Social & Phone Auth)
- **Database:** PostgreSQL (via Neon.tech)
- **ORM:** Prisma
- **Styling:** Tailwind CSS + Shadcn UI
- **Video/Audio:** Agora SDK (Web)
- **Deployment:** Vercel

## 🏗 Current Architecture & Database
The system uses a relational PostgreSQL schema designed to handle:
- **Dual-Role Profiles:** Separate flows for Patients and Doctors.
- **Medical History:** Centralized records for allergies, blood groups, and chronic conditions.
- **Appointment Lifecycle:** From symptom submission to payment and completion.
- **Payment Integration:** Ready for M-Pesa (Daraja) and Stripe.

## 📅 Roadmap
- [x] Project Initialization & Stack Selection
- [x] Relational Database Schema (Prisma)
- [ ] Clerk Authentication & Role-Based Access
- [ ] Appointment Booking Form
- [ ] Agora Video Integration
- [ ] M-Pesa Integration (Stripe for Urban Users)
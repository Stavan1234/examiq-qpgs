# 📘 ExamIQ – Question Paper Generation System (QPGS 1.0)

ExamIQ is a modern web-based system designed to **simplify and automate the process of question paper generation** for colleges and universities.  
It reduces the workload on exam cells and teachers by streamlining task allocation, question management, and final paper generation with AI assistance.

---

## 🚀 Features
- **Role-based Access**
  - Exam Cell: Create tasks, allocate teachers, manage deadlines, generate final papers.
  - Teachers: Add/edit only their allocated questions, upload diagrams and equations.
- **Automatic Paper Generation**
  - AI-powered MCQ creation from lecture summaries (via ChatGPT/Gemini API).
  - Randomized selection of questions from teacher pools for fairness.
- **Smart File Handling**
  - Upload diagrams and formulas.
  - OCR support for labels/symbols (Tesseract.js).
  - Clean/scanned diagrams with OpenCV.
- **PDF Export**
  - Generate final exam-ready papers with headers, sections, and formatting.
- **Minimal, Fast UI**
  - Built with modern design principles: clean, responsive, and distraction-free.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 15 (React), Tailwind CSS, ShadCN UI  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB (JSON-like storage for questions/papers)  
- **Authentication:** NextAuth.js (role-based login: Teacher / Exam Cell)  
- **AI Integration:** ChatGPT/Gemini API (for auto question generation)  
- **OCR & Image Processing:** Tesseract.js + OpenCV  
- **PDF Export:** jsPDF  

---

## 📂 Project Structure
```
src/
├── app/          # Routes (login, dashboard, exam tasks, etc.)
├── components/   # Reusable UI components
│   ├── common/   # Shared UI (Sidebar, Header, Layouts)
│   ├── pages/    # Page-specific UI
│   └── ui/       # ShadCN components
├── lib/utils/    # Helper functions (date, PDF, formatting)
├── notes/        # Documentation for contributors
└── utilities/    # Scripts, mock data, seeding
```

---

## 👥 Getting Started

### Prerequisites
- Node.js (v20 LTS or higher)
- npm (comes with Node.js) or yarn
- Git

### Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/Stavan1234/examiq-qpgs.git
   cd examiq-qpgs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🧑‍🤝‍🧑 Team Workflow
- **Branch Naming Convention**:
  - `feature/login`
  - `feature/dashboard`
  - `feature/exam-tasks`
- **Commit Messages**:
  - `feat: add login form`
  - `fix: sidebar alignment`
- **Collaboration**:
  - Push changes and create Pull Requests (PRs) for review.
  - Use GitHub Issues to assign tasks and Discussions for communication.

---

## 📌 Roadmap
- Build login & role-based dashboard
- Implement teacher question entry system
- Add exam cell allocation + paper generation
- Integrate AI (ChatGPT/Gemini API) for MCQ creation
- Add OCR for diagrams and formulas
- Finalize PDF export & download

---

## 📜 License
This project is for academic purposes under an open MIT license.  
You are free to use, adapt, and improve it with attribution.

---

## 🔖 Authors
- David Almieda
- Anurodh Chandanshiv
- Stavan Kalkumbe
- Joshua Jaison

---

### Notes
- Ensure all collaborators accept the GitHub invitation and set their Git identity (`git config --global user.name "TheirName" && git config --global user.email "their.email@example.com"`) before contributing.
- For issues or suggestions, use the GitHub Issues tab.


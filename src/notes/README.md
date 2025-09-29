# ExamIQ Project Notes (Preview ctrl+shift+v)

This README provides quick guides for Git commands and project structure. It's designed for team collaboration on the ExamIQ app (Next.js frontend for Admin/Exam Cell UI). Follow these to set up, code, and push changes efficiently.

## 1. Git Commands Guide

Here are essential Git commands for this project. Run them in your terminal from the project root (e.g., `C:\Users\HP\examiq`). Assume you've already run `git init` and added the remote (`git remote add origin https://github.com/Stavan1234/examiq-qpgs.git`).

### Basic Setup
- **Initialize Git (if starting fresh)**: Sets up a new repo.
  ```
  git init
  ```
- **Check Current Branch**: Lists branches (asterisk shows current).
  ```
  git branch
  ```
- **Create and Switch to Branch**: Use `main` as default.
  ```
  git checkout -b main
  ```
- **Check Remote URL**: Verify GitHub connection.
  ```
  git remote -v
  ```

### Working with Changes
- **Stage Files**: Add changes to commit (`.` for all).
  ```
  git add .
  ```
- **Commit Changes**: Save staged files with a message.
  ```
  git commit -m "Your descriptive message here"
  ```
- **View Status**: See modified/staged files.
  ```
  git status
  ```
- **View Commit History**: List commits.
  ```
  git log --oneline
  ```

### Pushing to GitHub
- **Push Branch**: Upload to remote (first time use `-u`).
  ```
  git push -u origin main
  ```
  (For later pushes: `git push`)

### Pulling Updates
- **Pull Changes**: Get updates from remote.
  ```
  git pull origin main
  ```

### Branching (for features)
- **Create Branch**: For new features (e.g., login page).
  ```
  git checkout -b feature/login
  ```
- **Switch Branch**: Move between branches.
  ```
  git checkout main
  ```
- **Merge Branch**: Combine into main.
  ```
  git checkout main
  git merge feature/login
  ```

### Troubleshooting
- **Undo Last Commit**: Keep changes but uncommit.
  ```
  git reset --soft HEAD~1
  ```
- **Discard Changes**: Revert uncommitted files.
  ```
  git checkout .
  ```
- **Clone Repo** (for peers): Download project.
  ```
  git clone https://github.com/Stavan1234/examiq-qpgs.git
  cd examiq
  npm install  # Install dependencies
  npm run dev  # Start app
  ```

Always commit often with clear messages. If errors occur, share output (e.g., from `git status`).

## 2. Project Structure and Code Placement

Project root: `examiq/`

- **src/app/**: For pages/routes (Next.js App Router). Put page files here (e.g., `login/page.tsx` for /login route).
- **src/components/common/**: Shared UI like Sidebar, Header.
- **src/components/pages/**: Page-specific components (e.g., LoginForm.tsx).
- **src/lib/utils/**: Helper functions (e.g., dateFormat.ts).
- **src/notes/**: Docs like this README.md.
- **src/utilities/**: Scripts/tools (e.g., mockData.ts for fake data).

### Initial Code Templates

Start by creating these files. Copy-paste and customize. Use shadcn/ui components (installed via `npx shadcn-ui@latest add ...`).

#### Login Page (src/app/login/page.tsx)
This is Page 1: Centered login card.
```tsx
// src/app/login/page.tsx
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';  // For password toggle (add logic later)

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[400px] rounded-lg shadow-md">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to ExamIQ</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input placeholder="Enter your email" className="mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Input type="password" placeholder="Enter your password" className="mt-1" />
              <Eye className="absolute right-3 top-3 h-5 w-5 text-gray-500" />  {/* Toggle icon */}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full bg-blue-600 text-white">Login</Button>
          <a href="/forgot-password" className="text-center text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </CardFooter>
      </Card>
    </div>
  );
}
```

#### Admin Dashboard (src/app/dashboard/page.tsx)
This is Page 2: Sidebar + summaries + table.
```tsx
// src/app/dashboard/page.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Home, Bell, Plus } from 'lucide-react';  // Icons

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 p-4 text-white">
        <h2 className="mb-4 text-xl font-bold">ExamIQ</h2>
        <ul className="space-y-2">
          <li className="flex items-center"><Home className="mr-2" /> Dashboard</li>
          <li className="flex items-center"><Home className="mr-2" /> Exam Tasks</li>
          <li className="flex items-center"><Home className="mr-2" /> Question Bank</li>
          <li className="flex items-center"><Home className="mr-2" /> Teachers</li>
          <li className="flex items-center"><Home className="mr-2" /> Settings</li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-xl">Welcome, John Doe</h2>
          <Bell className="h-6 w-6 text-gray-600" />
        </header>
        <div className="mb-6 grid grid-cols-3 gap-4">
          <Card><CardHeader className="text-center">Ongoing Tasks: 12</CardHeader></Card>
          <Card><CardHeader className="text-center">Pending Review: 5</CardHeader></Card>
          <Card><CardHeader className="text-center">Total Questions: 1,245</CardHeader></Card>
        </div>
        <div className="flex justify-end mb-2">
          <Button variant="outline"><Plus className="mr-2" /> Create New Exam Task</Button>
        </div>
        <Card>
          <CardHeader>Ready for Exam Task</CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject Code</TableHead>
                  <TableHead>Paper Name</TableHead>
                  <TableHead>Submission Deadline</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CS101</TableCell>
                  <TableCell>Mid-Semester Exam</TableCell>
                  <TableCell>10/05/2025</TableCell>
                  <TableCell><Button>Generate Paper</Button></TableCell>
                </TableRow>
                {/* Add more rows */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
```

#### Create New Exam Task (src/app/create-task/page.tsx)
This is Page 3: Form with dynamic sections. Use react-hook-form for handling.
```tsx
// src/app/create-task/page.tsx
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';  // For date picker (add popover logic)

export default function CreateTask() {
  const [sections, setSections] = useState([{ id: 1, name: 'Section A' }]);  // Dynamic sections

  const addSection = () => {
    setSections([...sections, { id: sections.length + 1, name: `Section ${String.fromCharCode(65 + sections.length)}` }]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (reuse from common/Sidebar.tsx later) */}
      <aside className="w-64 bg-blue-900 p-4 text-white">{/* ... */}</aside>
      <main className="flex-1 p-6">
        <Card>
          <CardHeader>Main Details</CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Input placeholder="Paper Name" />
            <Select><SelectTrigger><SelectValue placeholder="Subject Code" /></SelectTrigger><SelectContent><SelectItem value="CS101">CS101</SelectItem></SelectContent></Select>
            <Input placeholder="Total Questions" type="number" />
            <Select><SelectTrigger><SelectValue placeholder="Semester" /></SelectTrigger><SelectContent><SelectItem value="3rd">3rd</SelectItem></SelectContent></Select>
            <div><label>Submission Deadline</label><Calendar /></div>  {/* Wrap in Popover for date picker */}
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardHeader>Section Builder <Button onClick={addSection} variant="outline" className="ml-2">+ Add Section</Button></CardHeader>
          <CardContent>
            {sections.map((sec) => (
              <div key={sec.id} className="mb-4 border p-4 rounded">
                <Input placeholder="Section Name" defaultValue={sec.name} />
                <Textarea placeholder="Instructions" />
                <Select><SelectTrigger><SelectValue placeholder="Assign Teacher" /></SelectTrigger><SelectContent><SelectItem value="John Smith">John Smith</SelectItem></SelectContent></Select>
                <Input placeholder="Min Questions" type="number" />
                <Input placeholder="Questions to Fetch" type="number" />
                <Button variant="destructive">Remove</Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <Button className="mt-4 w-full bg-blue-600 text-white">Allocate Task to Teachers</Button>
      </main>
    </div>
  );
}
```

#### Final Preview & Generation (src/app/preview/page.tsx)
This is Page 4: Paper preview with buttons.
```tsx
// src/app/preview/page.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';  // For PDF export

export default function Preview() {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Mid-Semester Examination - Winter 2025, CS101', 10, 10);
    // Add more content...
    doc.save('exam-paper.pdf');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 p-4 text-white">{/* ... */}</aside>
      <main className="flex-1 p-6">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-xl">Welcome, John Doe</h2>
          <Bell className="h-6 w-6 text-gray-600" />
        </header>
        <div className="flex justify-between mb-2">
          <h3 className="text-lg">Final Preview & Generation</h3>
          <div>
            <Button variant="outline" className="mr-2">Re-generate</Button>
            <Button onClick={exportPDF}>Approve & Export PDF</Button>
          </div>
        </div>
        <Card>
          <CardHeader>Mid-Semester Examination - Winter 2025, CS101</CardHeader>
          <CardContent>
            <p><strong>Section A: Answer any 5 of the following</strong></p>
            <p>Q1: Define a recursive algorithm with the example...</p>
            <p>Q2: Explain the difference of supervised or unsupervised learning</p>
            <p><strong>Section B: Short Answer Questions</strong></p>
            <p>Q3: Describe OSI model layers</p>
            <p>Q4: What is binary search tree?</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
```

### Next Steps
- Add to common/Sidebar.tsx for reuse.
- Implement auth/routes in app/layout.tsx.
- Test: `npm run dev` (visit localhost:3000/login, etc.).
- Commit: Use Git guide above.

For questions, update this file or discuss in GitHub issues. Happy coding!

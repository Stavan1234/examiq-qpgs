### Next Steps for the ExamIQ Project (Preview ctrl+shift+v)

Now that you’ve set up the initial project structure, resolved the Git issue, and have the UI designs confirmed with the new images, here’s a detailed roadmap to proceed with implementing the Login Page, Admin Dashboard, Create New Exam Task, and Final Preview & Generation screens. These steps will guide you and your team to build the UI/UX effectively using Next.js, shadcn/ui, and other libraries, while ensuring smooth collaboration via GitHub. The current time is 10:17 PM IST on Monday, September 29, 2025, so plan your work accordingly.

#### 1. Finalize the Login Page (Page 1)
- **Objective**: Create a fully functional login page based on the provided image.
- **Tasks**:
  - **Enhance the Existing Code**: Update `src/app/login/page.tsx` with the logo (replace with a custom ExamIQ shield icon using `lucide-react` or import an SVG) and add form handling.
    - Install `react-hook-form` if not already done: `npm install react-hook-form`.
    - Example update:
      ```tsx
      import { useForm } from 'react-hook-form';
      import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
      import { Input } from '@/components/ui/input';
      import { Button } from '@/components/ui/button';
      import { Shield } from 'lucide-react';

      export default function Login() {
        const { register, handleSubmit } = useForm();
        const onSubmit = (data: any) => console.log(data); // Replace with auth logic

        return (
          <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-[400px] rounded-lg shadow-md">
              <CardHeader className="text-center">
                <Shield className="mx-auto h-12 w-12 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">Welcome to ExamIQ</h1>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input {...register('email')} placeholder="Enter your email" className="mt-1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <Input {...register('password')} type="password" placeholder="Enter your password" className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full mt-4 bg-blue-600 text-white">Login</Button>
                </form>
              </CardContent>
              <CardFooter>
                <a href="/forgot-password" className="text-center text-sm text-blue-500 hover:underline">Forgot Password?</a>
              </CardFooter>
            </Card>
          </div>
        );
      }
      ```
  - **Add Authentication**: Integrate a simple auth solution (e.g., NextAuth.js: `npm install next-auth`) or a mock login check to redirect to `/dashboard` on success. Place auth logic in `src/lib/auth.ts`.
  - **Test**: Run `npm run dev`, visit `http://localhost:3000/login`, and test form submission.

#### 2. Complete the Admin Dashboard (Page 2)
- **Objective**: Build a dynamic dashboard with a reusable sidebar and task table.
- **Tasks**:
  - **Refine Sidebar**: Move the sidebar to `src/components/common/Sidebar.tsx` for reuse across pages.
    - Example:
      ```tsx
      // src/components/common/Sidebar.tsx
      import { Home, Clipboard, Book, Users, Settings } from 'lucide-react';

      export default function Sidebar() {
        return (
          <aside className="w-64 bg-blue-900 p-4 text-white h-screen">
            <h2 className="mb-4 text-xl font-bold">ExamIQ</h2>
            <ul className="space-y-2">
              <li className="flex items-center"><Home className="mr-2" /> Dashboard</li>
              <li className="flex items-center"><Clipboard className="mr-2" /> Exam Tasks</li>
              <li className="flex items-center"><Book className="mr-2" /> Question Bank</li>
              <li className="flex items-center"><Users className="mr-2" /> Teachers</li>
              <li className="flex items-center"><Settings className="mr-2" /> Settings</li>
            </ul>
          </aside>
        );
      }
      ```
  - **Update Dashboard**: Enhance `src/app/dashboard/page.tsx` to use the sidebar and add a dynamic table with `@tanstack/react-table`.
    - Install if needed: `npm install @tanstack/react-table`.
    - Example update (simplified):
      ```tsx
      import Sidebar from '@/components/common/Sidebar';
      import { Card, CardContent, CardHeader } from '@/components/ui/card';
      import { Button } from '@/components/ui/button';
      import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
      import { Bell } from 'lucide-react';

      export default function Dashboard() {
        const tasks = [
          { code: 'CS101', name: 'Mid-Semester Exam', deadline: '10/05/2025' },
          { code: 'PY101', name: 'Calculus Final Dr Smith', deadline: '15/05/2025' },
          { code: 'HIS305', name: 'Modern History Essay', deadline: '12/05/2025' },
        ];

        return (
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
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
                      {tasks.map((task) => (
                        <TableRow key={task.code}>
                          <TableCell>{task.code}</TableCell>
                          <TableCell>{task.name}</TableCell>
                          <TableCell>{task.deadline}</TableCell>
                          <TableCell><Button>Generate Paper</Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </main>
          </div>
        );
      }
      ```
  - **Navigation**: Add routing to `/create-task` on "Create New Exam Task" click using Next.js `Link` (`npm install next/link`).

#### 3. Implement Create New Exam Task (Page 3)
- **Objective**: Build a form with dynamic section management.
- **Tasks**:
  - **Create the Page**: Update `src/app/create-task/page.tsx` with a form using `react-hook-form` and dynamic sections.
    - Example (simplified):
      ```tsx
      import { useState } from 'react';
      import { useForm, useFieldArray } from 'react-hook-form';
      import { Card, CardContent, CardHeader } from '@/components/ui/card';
      import { Input } from '@/components/ui/input';
      import { Button } from '@/components/ui/button';
      import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
      import { Textarea } from '@/components/ui/textarea';
      import Sidebar from '@/components/common/Sidebar';

      export default function CreateTask() {
        const { register, control, handleSubmit } = useForm();
        const { fields, append, remove } = useFieldArray({ control, name: 'sections' });

        const onSubmit = (data: any) => console.log(data); // Replace with API call

        return (
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6">
              <Card>
                <CardHeader>Main Details</CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Input {...register('paperName')} placeholder="Paper Name" />
                  <Select {...register('subjectCode')}>
                    <SelectTrigger><SelectValue placeholder="Subject Code" /></SelectTrigger>
                    <SelectContent><SelectItem value="CS101">CS101</SelectItem></SelectContent>
                  </Select>
                  <Input {...register('totalQuestions')} type="number" placeholder="Total Questions" />
                  <Select {...register('semester')}>
                    <SelectTrigger><SelectValue placeholder="Semester" /></SelectTrigger>
                    <SelectContent><SelectItem value="3rd">3rd</SelectItem></SelectContent>
                  </Select>
                  <Input {...register('submissionDeadline')} type="date" />
                </CardContent>
              </Card>
              <Card className="mt-4">
                <CardHeader>Section Builder <Button onClick={() => append({ name: '', instructions: '', teacher: '', minQuestions: 0, questionsToFetch: 0 })} variant="outline">+ Add Section</Button></CardHeader>
                <CardContent>
                  {fields.map((field, index) => (
                    <div key={field.id} className="mb-4 border p-4 rounded">
                      <Input {...register(`sections.${index}.name`)} placeholder="Section Name" />
                      <Textarea {...register(`sections.${index}.instructions`)} placeholder="Instructions" />
                      <Select {...register(`sections.${index}.teacher`)}>
                        <SelectTrigger><SelectValue placeholder="Assign Teacher" /></SelectTrigger>
                        <SelectContent><SelectItem value="Jane Doe">Jane Doe</SelectItem></SelectContent>
                      </Select>
                      <Input {...register(`sections.${index}.minQuestions`)} type="number" placeholder="Min Questions" />
                      <Input {...register(`sections.${index}.questionsToFetch`)} type="number" placeholder="Questions to Fetch" />
                      <Button onClick={() => remove(index)} variant="destructive">Remove</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Button onClick={handleSubmit(onSubmit)} className="mt-4 w-full bg-blue-600 text-white">Allocate Task to Teachers</Button>
            </main>
          </div>
        );
      }
      ```
  - **Validation**: Add validation rules in `useForm` (e.g., required fields).
  - **Navigation**: Redirect to `/dashboard` on successful submission (use `next/router`).

#### 4. Develop Final Preview & Generation (Page 4)
- **Objective**: Create a preview page with PDF export functionality.
- **Tasks**:
  - **Update the Page**: Enhance `src/app/preview/page.tsx` with dynamic content and PDF generation.
    - Example:
      ```tsx
      import Sidebar from '@/components/common/Sidebar';
      import { Card, CardContent, CardHeader } from '@/components/ui/card';
      import { Button } from '@/components/ui/button';
      import { Bell } from 'lucide-react';
      import jsPDF from 'jspdf';

      export default function Preview() {
        const exportPDF = () => {
          const doc = new jsPDF();
          doc.text('Mid-Semester Examination - Winter 2025, CS101', 10, 10);
          doc.text('Section A: Answer any 5 of the following', 10, 20);
          doc.text('Q1: Define a recursive algorithm with the example...', 10, 30);
          doc.text('Q2: Explain the difference of supervised or unsupervised learning', 10, 40);
          doc.text('Section B: Short Answer Questions', 10, 50);
          doc.text('Q3: Describe OSI model layers', 10, 60);
          doc.text('Q4: What is binary search tree?', 10, 70);
          doc.save('exam-paper.pdf');
        };

        return (
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
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
  - **Dynamic Content**: Fetch data from the Create Task form (e.g., via state or API) to populate the preview.
  - **Re-generate Logic**: Add a function to randomize questions (mock data for now).

#### 5. Integrate and Test
- **Layout**: Create `src/app/layout.tsx` to wrap pages with a header and sidebar (use `Sidebar` and a header component).
- **Responsiveness**: Add Tailwind classes (e.g., `md:flex`, `sm:w-full`) to ensure desktop/tablet compatibility.
- **Testing**: Run `npm run dev`, navigate through `/login` → `/dashboard` → `/create-task` → `/preview`, and test all interactions.
- **Debugging**: Use browser dev tools to fix styling/layout issues.

#### 6. Collaborate and Deploy
- **Commit Changes**: After each page is functional:
  ```
  git add .
  git commit -m "Implemented [Page Name] with basic functionality"
  git push
  ```
- **Team Coordination**: Assign pages to peers via GitHub issues or branches (e.g., `feature/create-task`).
- **Deploy**: Consider Vercel (free for Next.js) for deployment. Run `npm run build` locally first, then follow Vercel’s setup.

#### 7. Future Enhancements
- Add API integration (e.g., for teacher data, task storage).
- Implement authentication fully with NextAuth.js.
- Add error handling and loading states.

Start with the Login page tonight if time permits (it’s late!), then tackle the Dashboard tomorrow. Let me know if you need code refinements or help with specific features!
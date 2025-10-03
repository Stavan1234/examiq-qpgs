// app/dashboard/page.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Bell, Plus } from 'lucide-react';
import Sidebar from '@/components/common/Sidebar';

// Mock data
const tasks = [
  { code: 'CS101', name: 'Mid-Semester Exam', deadline: '10/05/2025' },
  { code: 'PY101', name: 'Calculus Final Dr Smith', deadline: '15/05/2025' },
  { code: 'HIS305', name: 'Modern History Essay', deadline: '12/05/2025' },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-exam-light-gray text-exam-dark-slate">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between pb-4 border-b" style={{ borderColor: 'var(--exam-cool-gray)' }}>
          <h1 className="text-2xl font-semibold">Welcome, John Doe</h1>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              onClick={() => console.log('Open notifications')}
              className="relative"
            >
              <Bell className="h-6 w-6 text-exam-cool-gray" />
              {/* example badge */}
              <span className="absolute -top-1 -right-1 inline-flex h-2 w-2 rounded-full bg-exam-soft-orange" />
            </Button>
          </div>
        </header>

        {/* Stat Cards */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-sm font-medium text-exam-dark-slate">Ongoing Tasks</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-3xl font-bold text-exam-royal-blue">
              12
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-sm font-medium text-exam-dark-slate">Pending Review</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-3xl font-bold text-exam-soft-orange">
              5
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-sm font-medium text-exam-dark-slate">Total Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-3xl font-bold text-exam-dark-slate">
              1,245
            </CardContent>
          </Card>
        </div>

        {/* Action Bar */}
        <div className="flex justify-end mb-4">
          {/* Using tailwind utility classes for hover/active accessibility */}
          <Button
            onClick={() => console.log('Create new exam task')}
            className="inline-flex items-center gap-2 bg-exam-royal-blue text-white hover:bg-exam-soft-blue active:scale-[0.98] focus:ring-2 focus:ring-exam-soft-blue"
          >
            <Plus className="h-4 w-4" />
            Create New Exam Task
          </Button>
        </div>

        {/* Main Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Ready for Exam Task</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject Code</TableHead>
                  <TableHead>Paper Name</TableHead>
                  <TableHead>Submission Deadline</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.code}>
                    <TableCell className="font-medium">{task.code}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.deadline}</TableCell>
                    <TableCell className="text-right">
                      {/* Make button obviously interactive and accessible */}
                      <button
                        onClick={() => console.log('Generate paper for', task.code)}
                        className="inline-flex items-center px-3 py-1.5 rounded-md border border-exam-cool-gray text-sm hover:bg-exam-soft-blue/10 active:bg-exam-soft-blue/20 focus:outline-none focus:ring-2 focus:ring-exam-soft-blue"
                        aria-label={`Generate paper for ${task.code}`}
                      >
                        Generate Paper
                      </button>
                    </TableCell>
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

'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
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
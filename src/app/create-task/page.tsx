'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar"; // For date picker (add popover logic)

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
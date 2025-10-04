'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// This component would receive the final data object as a prop from the parent page.
// For now, we'll use mock data to represent what the user has built.
const mockFinalData = {
    paperName: 'Mid-Semester Examination - Winter 2025',
    subject: 'CS401 - Operating Systems',
    semester: 'Semester IV',
    deadline: 'October 31, 2025',
    sections: [
        { id: 1, instructions: 'Answer any 5 of the following.', teacher: 'Dr. Alan Grant', submissions: 20, marks: 5 },
        { id: 2, instructions: 'Answer all questions.', teacher: 'Prof. Ellie Sattler', submissions: 10, marks: 10 },
    ]
};

export default function FinalReview({ onBack }: { onBack: () => void; }) {
    
    const handleConfirm = () => {
        // Here, you would make the API call to save the data to your database.
        console.log("Task allocation confirmed. Saving to database...");
        // After success, you would typically redirect the user back to the dashboard.
        // For example: router.push('/dashboard');
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle>Step 3: Final Review</CardTitle>
                    <CardDescription>Please review all the details below before confirming the task allocation.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Main Details Summary */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-lg bg-slate-50">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Paper Name</p>
                            <p className="font-semibold text-slate-800">{mockFinalData.paperName}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Subject</p>
                            <p className="font-semibold text-slate-800">{mockFinalData.subject}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Semester</p>
                            <p className="font-semibold text-slate-800">{mockFinalData.semester}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Deadline</p>
                            <p className="font-semibold text-slate-800">{mockFinalData.deadline}</p>
                        </div>
                    </div>
                    
                    {/* Blueprint Summary Table */}
                    <div>
                         <h3 className="text-lg font-semibold text-slate-800 mb-2">Blueprint Summary</h3>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Section #</TableHead>
                                    <TableHead>Instructions</TableHead>
                                    <TableHead>Assigned Teacher</TableHead>
                                    <TableHead>Submissions</TableHead>
                                    <TableHead>Marks/Q</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockFinalData.sections.map((section, index) => (
                                    <TableRow key={section.id}>
                                        <TableCell className="font-medium">Section {index + 1}</TableCell>
                                        <TableCell>{section.instructions}</TableCell>
                                        <TableCell>{section.teacher}</TableCell>
                                        <TableCell>{section.submissions}</TableCell>
                                        <TableCell>{section.marks}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Navigation and Confirmation Dialog */}
            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="outline" size="lg">Back</Button>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button size="lg">Confirm and Allocate Task</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action will create the exam task and notify {mockFinalData.sections.length} teacher(s). This cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
}

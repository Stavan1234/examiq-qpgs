'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { Check, ChevronsUpDown, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// Mock data for the searchable dropdowns. In a real app, this would come from an API.
const subjects = [
    { value: 'cs401', label: 'CS401 - Operating Systems' },
    { value: 'ma201', label: 'MA201 - Advanced Calculus' },
    { value: 'ph101', label: 'PH101 - Modern Physics' },
];

export default function MainDetails({ onNext }: { onNext: () => void; }) {
    // State to manage form inputs and validation for the "Next" button
    const [paperName, setPaperName] = useState('');
    const [subject, setSubject] = useState('');
    const [semester, setSemester] = useState('');
    const [deadline, setDeadline] = useState<Date | undefined>();
    const [open, setOpen] = useState(false); // For combobox popover

    const isFormValid = paperName && subject && semester && deadline;

    return (
        <Card className="max-w-3xl mx-auto shadow-sm">
            <CardHeader>
                <CardTitle>Step 1: Define the Exam Paper</CardTitle>
                <CardDescription>Enter the high-level details for this examination.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="paper-name">Paper Name</Label>
                    <Input id="paper-name" placeholder="e.g., Mid-Semester Examination - Winter 2025" value={paperName} onChange={(e) => setPaperName(e.target.value)} />
                </div>

                <div className="space-y-2">
                    <Label>Subject</Label>
                     {/* Searchable Combobox for Subjects */}
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between font-normal">
                                {subject ? subjects.find((s) => s.value === subject)?.label : "Select subject..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                            <Command>
                                <CommandInput placeholder="Search subject..." />
                                <CommandList>
                                    <CommandEmpty>No subject found.</CommandEmpty>
                                    <CommandGroup>
                                        {subjects.map((s) => (
                                            <CommandItem key={s.value} value={s.value} onSelect={(currentValue) => {
                                                setSubject(currentValue === subject ? "" : currentValue);
                                                setOpen(false);
                                            }}>
                                                <Check className={cn("mr-2 h-4 w-4", subject === s.value ? "opacity-100" : "opacity-0")} />
                                                {s.label}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="semester">Semester</Label>
                        <Select onValueChange={setSemester}>
                            <SelectTrigger id="semester">
                                <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Semester I</SelectItem>
                                <SelectItem value="2">Semester II</SelectItem>
                                <SelectItem value="3">Semester III</SelectItem>
                                <SelectItem value="4">Semester IV</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Teacher Submission Deadline</Label>
                         {/* Date Picker */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !deadline && "text-slate-500")}>
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {deadline ? format(deadline, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={deadline} onSelect={setDeadline} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <Button onClick={onNext} disabled={!isFormValid} size="lg">
                        Next: Build Sections
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
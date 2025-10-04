'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { PlusCircle, Trash2, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Section = {
    id: number;
    instructions: string;
    teacher: string;
    submitCount: number | '';
    selectCount: number | '';
    marks: number | '';
    cos: string; 
};

const teachers = [
    { value: 't001', label: 'Dr. David Almieda' },
    { value: 't002', label: 'Prof. Joshua Jaison' },
    { value: 't003', label: 'Dr. Anurodh Chandanshiv' },
];

export default function SectionBuilder({ onNext, onBack }: { onNext: () => void; onBack: () => void; }) {
  
    const [sections, setSections] = useState<Section[]>([
        { id: 1, instructions: '', teacher: '', submitCount: '', selectCount: '', marks: '', cos: '' }
    ]);
    const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

    const addSection = () => {
        setSections([...sections, {
            id: sections.length > 0 ? Math.max(...sections.map(s => s.id)) + 1 : 1,
            instructions: '', teacher: '', submitCount: '', selectCount: '', marks: '', cos: ''
        }]);
    };

    const removeSection = (id: number) => {
        setSections(sections.filter(section => section.id !== id));
    };

    const handleSectionChange = (id: number, field: keyof Section, value: string | number) => {
        setSections(sections.map(section =>
            section.id === id ? { ...section, [field]: value } : section
        ));
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle>Step 2: Design the Blueprint & Allocate Tasks</CardTitle>
                    <CardDescription>Add and configure the sections for this exam paper.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={addSection} variant="outline" className="w-full border-dashed">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Section
                    </Button>
                </CardContent>
            </Card>

            {/* Dynamically render each section card */}
            {sections.map((section, index) => (
                <Card key={section.id} className="shadow-sm relative">
                    <CardHeader className="flex flex-row items-center">
                        <div className="flex-grow">
                            <CardTitle>Section Q.{index + 1}</CardTitle>
                        </div>
                        {/* More than one section is required to show the remove button */}
                        {sections.length > 1 && (
                            <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-red-50 hover:text-red-600" onClick={() => removeSection(section.id)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        )}
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor={`instructions-${section.id}`}>Section Instructions</Label>
                            <Textarea id={`instructions-${section.id}`} placeholder="e.g., Answer any 5 of the following." value={section.instructions} onChange={(e) => handleSectionChange(section.id, 'instructions', e.target.value)} />
                        </div>

                        <div className="space-y-2">
                            <Label>Assign Teacher</Label>
                            {/* Each popover needs its own open/close state, managed by openPopoverId */}
                            <Popover open={openPopoverId === section.id} onOpenChange={(isOpen) => setOpenPopoverId(isOpen ? section.id : null)}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" role="combobox" className="w-full justify-between font-normal">
                                        {section.teacher ? teachers.find((t) => t.value === section.teacher)?.label : "Select teacher..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search teacher..." />
                                        <CommandList>
                                            <CommandEmpty>No teacher found.</CommandEmpty>
                                            <CommandGroup>
                                                {teachers.map((teacher) => (
                                                    <CommandItem key={teacher.value} value={teacher.value} onSelect={(currentValue) => {
                                                        handleSectionChange(section.id, 'teacher', currentValue);
                                                        setOpenPopoverId(null);
                                                    }}>
                                                        <Check className={cn("mr-2 h-4 w-4", section.teacher === teacher.value ? "opacity-100" : "opacity-0")} />
                                                        {teacher.label}
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
                                <Label htmlFor={`submit-count-${section.id}`}>Teacher Must Submit (Buffer)</Label>
                                <Input id={`submit-count-${section.id}`} type="number" placeholder="20" value={section.submitCount} onChange={(e) => handleSectionChange(section.id, 'submitCount', parseInt(e.target.value) || '')}/>
                             </div>
                             <div className="space-y-2">
                                <Label htmlFor={`select-count-${section.id}`}>System Will Select</Label>
                                <Input id={`select-count-${section.id}`} type="number" placeholder="7" value={section.selectCount} onChange={(e) => handleSectionChange(section.id, 'selectCount', parseInt(e.target.value) || '')}/>
                             </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor={`marks-${section.id}`}>Marks per Question</Label>
                                <Input id={`marks-${section.id}`} type="number" placeholder="5" value={section.marks} onChange={(e) => handleSectionChange(section.id, 'marks', parseInt(e.target.value) || '')}/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor={`cos-${section.id}`}>Course Outcomes (COs) to Cover</Label>
                                <Input id={`cos-${section.id}`} placeholder="e.g., CO1, CO3" value={section.cos} onChange={(e) => handleSectionChange(section.id, 'cos', e.target.value)} />
                                {/* UX Note: For a more advanced "Tags" input, a custom component or a library like 'react-select' could be used. For simplicity, we use a standard text input. */}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="outline" size="lg">Back</Button>
                <Button onClick={onNext} size="lg">Next: Review & Allocate</Button>
            </div>
        </div>
    );
}



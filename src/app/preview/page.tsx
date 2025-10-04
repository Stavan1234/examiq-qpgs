'use client';

import { useRef } from 'react';
import DashboardLayout from '@/app/dashboard/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Download, RefreshCw } from 'lucide-react';
import { applyPdfColorFix, revertPdfColorFix } from '@/lib/pdfColorFix'; // Import our new utility

export default function PreviewPage() {
    const paperContentRef = useRef<HTMLDivElement>(null);

    const exportToPdf = async () => {
        const input = paperContentRef.current;
        if (!input) return;

        // 1. Apply the HSL color overrides
        applyPdfColorFix();
        
        // A short delay to ensure the browser has applied the new styles
        await new Promise(resolve => setTimeout(resolve, 100));

        try {
            const canvas = await html2canvas(input, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                backgroundColor: '#ffffff' // Explicitly set a white background
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / canvasHeight;
            const widthInPdf = pdfWidth - 40; // With margin
            const heightInPdf = widthInPdf / ratio;

            pdf.addImage(imgData, 'PNG', 20, 20, widthInPdf, heightInPdf);
            pdf.save("ExamIQ-Generated-Paper.pdf");

        } catch (error) {
            console.error("Failed to generate PDF:", error);
        } finally {
            // 2. IMPORTANT: Revert the color changes after the PDF is generated
            revertPdfColorFix();
        }
    };

    return (
        <DashboardLayout>
            <div className="p-4 sm:p-6 md:p-8">
                <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-border">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Final Preview & Generation</h1>
                        <p className="text-muted-foreground mt-1">Review the generated paper below. Export it when ready.</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <Button variant="outline" className="hover:bg-accent">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Re-generate
                        </Button>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={exportToPdf}>
                            <Download className="mr-2 h-4 w-4" />
                            Approve & Export PDF
                        </Button>
                    </div>
                </header>

                <Card ref={paperContentRef} className="p-8 md:p-12 shadow-lg rounded-lg border bg-card">
                    <CardContent className="p-0">
                        <header className="text-center border-b border-border pb-4 mb-6">
                            <h2 className="text-xl font-bold text-card-foreground">University of Technology</h2>
                            <p className="text-lg font-semibold text-muted-foreground mt-1">Mid-Semester Examination - Winter 2025</p>
                            <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                                <span><strong>Subject:</strong> CS401 - Operating Systems</span>
                                <span><strong>Max Marks:</strong> 100</span>
                                <span><strong>Time:</strong> 3 Hours</span>
                            </div>
                        </header>
                        
                        <div className="space-y-8 text-card-foreground">
                            <section>
                                <h3 className="text-lg font-bold mb-2">Section A</h3>
                                <p className="text-sm italic text-muted-foreground mb-4">Instructions: Answer any 5 of the following. Each question carries 5 marks.</p>
                                <ol className="list-decimal list-inside space-y-4">
                                    <li>Define a recursive algorithm. Provide an example with a clear explanation of its base case and recursive step.</li>
                                    <li>Explain the fundamental difference between supervised and unsupervised machine learning, giving one example of an algorithm for each.</li>
                                    <li>What is a deadlock in the context of operating systems? Describe the four necessary conditions for a deadlock to occur.</li>
                                </ol>
                            </section>
                            <section>
                                <h3 className="text-lg font-bold mb-2">Section B</h3>
                                <p className="text-sm italic text-muted-foreground mb-4">Instructions: Answer all questions. Each question carries 10 marks.</p>
                                <ol className="list-decimal list-inside space-y-4" start={4}>
                                    <li>Describe the seven layers of the OSI model. For each layer, briefly explain its primary function and provide an example of a protocol that operates at that layer.</li>
                                    <li>What is a Binary Search Tree (BST)? Explain the properties of a BST and demonstrate the process of inserting the following numbers into an initially empty BST: 50, 30, 70, 20, 40, 60, 80.</li>
                                </ol>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
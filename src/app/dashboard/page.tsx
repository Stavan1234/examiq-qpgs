// src/app/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle, FileText, CheckCircle, Clock } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      {/* Top Action Header (Corrected) */}
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-exam-dark-slate">
          Admin Dashboard
        </h1>
        <div className="flex items-center space-x-2">
            <Link href="/create-task" passHref>
            <Button className="bg-[#2563EB] hover:bg-[#60A5FA] text-white focus:outline-none focus:ring-2 focus:ring-exam-soft-blue">
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Exam Task
             </Button>
             </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-10 mt-6">
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-exam-cool-gray">
              Total Questions
            </CardTitle>
            <FileText className="h-4 w-4 text-exam-cool-gray" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-exam-dark-slate">
              1,245
            </div>
            <p className="text-xs text-exam-cool-gray">
              Across all subjects
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-exam-cool-gray">
              Ongoing Tasks
            </CardTitle>
            <Clock className="h-4 w-4 text-exam-cool-gray" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-exam-dark-slate">12</div>
            <p className="text-xs text-exam-cool-gray">
              Awaiting teacher submissions
            </p>
          </CardContent>
        </Card>
        <Card className="bg-exam-soft-orange/20 border-exam-soft-orange">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-exam-dark-slate">
              Pending Review
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-exam-dark-slate" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-exam-dark-slate">5</div>
            <p className="text-xs text-exam-dark-slate/80">
              Ready for paper generation
            </p>
          </CardContent>
        </Card>
        {/* We can add another card here, e.g., "Total Teachers" */}
      </div>

      {/* Main Task Table */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-exam-dark-slate">
            Ready for Generation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-exam-dark-slate">
                  Subject Code
                </TableHead>
                <TableHead className="text-exam-dark-slate">
                  Paper Name
                </TableHead>
                <TableHead className="text-exam-dark-slate">
                  Deadline
                </TableHead>
                <TableHead className="text-right text-exam-dark-slate">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Example Row 1 */}
              <TableRow>
                <TableCell className="font-medium">CS401</TableCell>
                <TableCell>Mid-Semester Exam - OS</TableCell>
                <TableCell>10/10/2025</TableCell>
                <TableCell className="text-right">
                  <Link href="/preview" passHref>
                    <Button className="bg-[#9CA3AF] hover:bg-emerald-500/80">
                        Generate Paper
                    </Button>
                   </Link>
                </TableCell>
              </TableRow>
              {/* Example Row 2 */}
              <TableRow>
                <TableCell className="font-medium">EE302</TableCell>
                <TableCell>Final Semester Exam - CN</TableCell>
                <TableCell>05/11/2025</TableCell>
                <TableCell className="text-right">
                  <Link href="/preview" passHref>
                    <Button className="bg-[#9CA3AF] hover:bg-emerald-500/80">
                        Generate Paper
                    </Button>
                   </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
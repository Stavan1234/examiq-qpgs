"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Eye, EyeOff, Shield } from "lucide-react";

// 1. Define a specific type for your form data
type FormData = {
  email: string;
  password: string;
  role: "admin" | "teacher";
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // 2. Tell react-hook-form to use your new FormData type
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();

  const selectedRole = watch("role");

  // 3. Apply the FormData type to the 'data' parameter
  const onSubmit = (data: FormData) => {
    console.log("Login submitted:", data);
    // Now you can safely access data.email, data.password, etc.
    if (data.role === 'admin') {
      // window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-exam-light-gray">
      <Card className="w-[400px] rounded-lg shadow-md">
        <CardHeader className="items-center text-center">
          <Shield className="h-12 w-12 text-exam-royal-blue" />
          <h1 className="text-2xl font-bold text-exam-dark-slate">Welcome to ExamIQ</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center">
            <label className="mb-2 text-sm font-medium text-exam-dark-slate">Select your role</label>
            <ToggleGroup
              type="single"
              variant="outline"
              value={selectedRole}
              onValueChange={(role: "admin" | "teacher") => {
                if (role) setValue("role", role, { shouldValidate: true });
              }}
              aria-label="Role selection"
            >
              <ToggleGroupItem value="admin" aria-label="Select Admin Role">
                Admin
              </ToggleGroupItem>
              <ToggleGroupItem value="teacher" aria-label="Select Teacher Role">
                Teacher
              </ToggleGroupItem>
            </ToggleGroup>
            {errors.role && <span className="text-exam-error-red text-sm mt-1">Please select a role.</span>}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <input type="hidden" {...register("role", { required: true })} />
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-exam-dark-slate">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 bg-white border-exam-cool-gray"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-exam-error-red text-sm">{errors.email.message}</span>}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-exam-dark-slate">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 bg-white border-exam-cool-gray pr-10"
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-exam-cool-gray hover:text-exam-dark-slate"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <span className="text-exam-error-red text-sm">{errors.password.message}</span>}
            </div>

            <Button
              type="submit"
              className="w-full bg-exam-royal-blue text-white hover:bg-exam-soft-blue"
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <a href="/forgot-password" className="w-full text-center text-sm text-exam-soft-blue hover:text-exam-royal-blue hover:underline">
            Forgot Password?
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}


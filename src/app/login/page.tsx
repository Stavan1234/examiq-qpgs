"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Eye, EyeOff, Shield } from "lucide-react";
// import Link from "next/link"; // Temporarily removed to fix build error
// import { useRouter } from "next/navigation"; // Temporarily removed to fix build error

// Define a specific type for your form data
type FormData = {
  email: string;
  password: string;
  role: "admin" | "teacher";
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  // const router = useRouter(); // Temporarily removed

  // Tell react-hook-form to use your new FormData type
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();

  const selectedRole = watch("role");

  // Apply the FormData type to the 'data' parameter
  const onSubmit = (data: FormData) => {
    console.log("Login submitted:", data);
    // On successful login, redirect to the appropriate dashboard
    if (data.role === 'admin') {
      // Temporarily use window.location for navigation
      window.location.href = "/dashboard";
    } else {
      // You can create a teacher dashboard later
      // router.push("/teacher-dashboard"); 
    }
  };

  return (
    // Use the new theme variable for the background
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-[400px] rounded-lg shadow-md border-border">
        <CardHeader className="items-center text-center">
            {/* Use primary color for the icon */}
          <Shield className="h-12 w-12 text-primary" />
           {/* Use foreground color for text */}
          <h1 className="text-2xl font-bold text-foreground">Welcome to ExamIQ</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center">
             {/* Use foreground color for text */}
            <label className="mb-2 text-sm font-medium text-foreground">Select your role</label>
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
            {/* Use destructive color for errors */}
            {errors.role && <span className="text-destructive text-sm mt-1">Please select a role.</span>}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <input type="hidden" {...register("role", { required: true })} />
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1" // `border-input` is applied by default
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-destructive text-sm">{errors.email.message}</span>}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 pr-10"
                  {...register("password", { required: "Password is required" })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <span className="text-destructive text-sm">{errors.password.message}</span>}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90" // Use primary button styles
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          {/* Temporarily use a standard <a> tag instead of <Link> */}
          <a href="/forgot-password" className="w-full text-center text-sm text-primary hover:underline">
            Forgot Password?
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}


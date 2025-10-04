'use client';

import { useState } from 'react';
import DashboardLayout from '@/app/dashboard/layout';
import MainDetails from './MainDetails';
import SectionBuilder from './SectionBuilder';
import FinalReview from './FinalReview';

// A type to manage the current step in the multi-step form
type Step = 'mainDetails' | 'sectionBuilder' | 'finalReview';

export default function CreateTaskPage() {
  // State to track the current active step
  const [currentStep, setCurrentStep] = useState<Step>('mainDetails');

  // We will pass data between steps later. For now, let's manage the view.
  // In a real app, you'd manage form data here using a state management library or React Context.

  const goToNextStep = () => {
    if (currentStep === 'mainDetails') setCurrentStep('sectionBuilder');
    if (currentStep === 'sectionBuilder') setCurrentStep('finalReview');
  };

  const goToPreviousStep = () => {
    if (currentStep === 'finalReview') setCurrentStep('sectionBuilder');
    if (currentStep === 'sectionBuilder') setCurrentStep('mainDetails');
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        {/* Header and Progress Indicator */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Create a New Exam Task</h1>
          <p className="text-slate-500 mt-1">Follow the steps below to design and allocate your exam blueprint.</p>
          {/* A simple visual step indicator */}
          <div className="mt-4 flex items-center space-x-4">
            <div className={`flex-1 h-2 rounded-full ${currentStep === 'mainDetails' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${currentStep === 'sectionBuilder' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
            <div className={`flex-1 h-2 rounded-full ${currentStep === 'finalReview' ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
          </div>
        </div>

        {/* Render the current step's component */}
        {currentStep === 'mainDetails' && <MainDetails onNext={goToNextStep} />}
        {currentStep === 'sectionBuilder' && <SectionBuilder onNext={goToNextStep} onBack={goToPreviousStep} />}
        {currentStep === 'finalReview' && <FinalReview onBack={goToPreviousStep} />}
      </div>
    </DashboardLayout>
  );
}
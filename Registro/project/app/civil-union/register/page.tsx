"use client";

import { CivilUnionForm } from '@/components/civil-union/civil-union-form';

export default function CivilUnionRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <CivilUnionForm />
    </div>
  );
}
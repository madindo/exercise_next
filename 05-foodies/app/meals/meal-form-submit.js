'use client';
import { useFormStatus } from 'react-dom';
export default function MealsFromSubmit() {
  const { pending } = useFormStatus();
  return <button>{
    pending ? 'Submitting...' : 'Share Meal'
  }
  </button>;
}
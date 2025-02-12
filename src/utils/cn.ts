import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// In your component:
// className={cn(
//   "base-classes",
//   condition && "conditional-classes",
//   customClasses
// )}
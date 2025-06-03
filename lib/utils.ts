import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function tryCatch<T> (
  promise: Promise<T>
): Promise<[T | null, unknown | null]> {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error]
  }
}


// Convert handleSubmit data for formData for server actions
export const objectToFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  return formData;
};
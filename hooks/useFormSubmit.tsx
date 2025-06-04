'use client'

import { useState } from 'react';
import { UseFormReset, UseFormSetError, FieldValues } from 'react-hook-form';
import logger from '@/utils/logger';
import { objectToFormData } from '@/lib/utils';
import { toast } from 'sonner';

type ServerActionResult = {
  success?: boolean;
  error?: any;
};

type UseFormSubmitOptions<T extends FieldValues> = {
  serverAction: (formData: FormData) => Promise<ServerActionResult>;
  onSuccess?: () => void;
  onError?: (error: any) => void;
  reset: UseFormReset<T>;
  setError: UseFormSetError<T>;
};

export function useFormSubmit<T extends FieldValues>({
  serverAction,
  onSuccess,
  onError,
  reset,
  setError,
}: UseFormSubmitOptions<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: T) => {
    setIsSubmitting(true);
    
    try {
      // Convert to FormData
      const formData = objectToFormData(data);
      
      // Call server action
      const result = await serverAction(formData);
      
      if (result.error) {
        logger.error('Form submission error:', result.error);
        
        if (Array.isArray(result.error)) {
          // Process Zod validation errors
          result.error.forEach((err) => {
            if (err.path && err.path.length > 0) {
              const fieldName = err.path[0] as keyof T;
              setError(fieldName as any, {
                type: 'server',
                message: err.message
              });
            }
          });
          
          toast.error('Please correct the form errors');
        } else {
          // Handle other types of errors
          toast.error(getErrorMessage(result.error));
        }
        
        // Call custom error handler if provided
        onError?.(result.error);
      } else {
        // Success path
        toast.success('Submission successful!');
        reset(); // Reset form on success
        onSuccess?.(); // Call custom success handler if provided
      }
    } catch (error) {
      logger.error('Unexpected error during form submission:', error);
      toast.error(getErrorMessage(error));
      onError?.(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting
  };
}

// Helper function to extract error messages
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  } else if (typeof error === "string") {
    return error;
  } else {
    return "Something went wrong";
  }
};
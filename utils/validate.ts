import { ZodSchema, ZodError } from 'zod';

export const validate = (schema: ZodSchema, data: any) => {
  try {
    schema.parse(data);
    return { success: true, errors: null };
  } catch (error) {
    if (error instanceof ZodError) {
      return { success: false, errors: error.errors };
    }
    return { success: false, errors: null };
  }
};

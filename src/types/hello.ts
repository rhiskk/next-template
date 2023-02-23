import { z } from "zod";

export const helloSchema = z.object({
  hello: z.string(),
});

export type Hello = z.infer<typeof helloSchema>;

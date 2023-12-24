import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(2, "Your name should be at least two characters long!"),
  slug: z.string().min(2, "Your slug should be at least two characters long!"),
  author: z.string().min(2, "Your author should be at least two characters long!"),
  category: z.string(),
  metaTitle: z.string().min(2, "Your title should be at least two characters long!"),
  description: z.string().min(2, "Your description should be at least two characters long!"),
  keywords: z.string(),
  AltText: z.string().min(2, "Your alternate text should be at least two characters long!"),
})

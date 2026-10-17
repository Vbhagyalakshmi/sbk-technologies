import { z } from "zod";

export const serviceOptions = [
  "Website development", "Custom software", "E-commerce", "Mobile / web app", "AI & automation",
  "Cloud & DevOps", "SEO & digital presence", "UI/UX design", "Final-year project", "VLSI / embedded project", "Other",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  contact: z.string().trim().min(5, "Enter a phone number or email").max(120)
    .refine((v) => /^\S+@\S+\.\S+$/.test(v) || /^[+\d][\d\s-]{6,}$/.test(v), "Enter a valid phone number or email"),
  service: z.enum(serviceOptions, { errorMap: () => ({ message: "Please choose a service" }) }),
  budget: z.string().max(60).optional(),
  description: z.string().trim().min(10, "Please describe your project (at least 10 characters)").max(1200),
  preferred: z.enum(["WhatsApp", "Instagram", "Phone call", "Email"]),
});
export type Enquiry = z.infer<typeof enquirySchema>;

export const enquiryToMessage = (d: Enquiry) =>
  `Hi SBK Technologies, I would like to discuss a project.\nName: ${d.name}\nService: ${d.service}\n` +
  (d.budget ? `Budget: ${d.budget}\n` : "") + `Details: ${d.description}\nContact: ${d.contact} (preferred: ${d.preferred})`;

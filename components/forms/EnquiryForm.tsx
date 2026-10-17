"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Instagram, MessageCircle } from "lucide-react";
import { enquirySchema, enquiryToMessage, serviceOptions, type Enquiry } from "@/lib/validation";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

const field = "mt-1 w-full min-h-11 rounded-lg border border-line bg-[#F8FAFF] px-3 py-2 text-heading placeholder:text-muted focus-visible:border-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric";

export default function EnquiryForm() {
  const [done, setDone] = useState<Enquiry | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema), defaultValues: { preferred: "WhatsApp" },
  });

  if (done)
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h2 className="text-2xl font-bold">Almost done, {done.name.split(" ")[0]}</h2>
        <p className="mt-3 text-silver">Your details have been prepared, but nothing has been sent yet. Continue on WhatsApp and press <strong>Send</strong> inside WhatsApp to deliver your message.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={whatsappUrl(enquiryToMessage(done))} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-[#101B32]"><MessageCircle size={18} /> Continue on WhatsApp</a>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-electric px-6 font-semibold text-electric hover:bg-wash"><Instagram size={18} /> Visit Instagram</a>
        </div>
        <p className="mt-4 text-sm text-muted">Instagram opens our profile; messages there are sent manually through its own contact options.</p>
        <button type="button" onClick={() => setDone(null)} className="mt-6 text-sm text-electric underline">Edit my details</button>
      </div>
    );

  const err = (k: keyof Enquiry) => errors[k] && <p role="alert" className="mt-1 text-sm text-[#B42318]">{errors[k]?.message as string}</p>;
  return (
    <form onSubmit={handleSubmit(setDone)} noValidate className="grid gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div><label htmlFor="name" className="font-medium text-heading">Name</label><input id="name" autoComplete="name" className={field} {...register("name")} />{err("name")}</div>
      <div><label htmlFor="contact" className="font-medium text-heading">Phone or email</label><input id="contact" autoComplete="email" className={field} {...register("contact")} />{err("contact")}</div>
      <div><label htmlFor="service" className="font-medium text-heading">Service</label>
        <select id="service" className={field} defaultValue="" {...register("service")}>
          <option value="" disabled>Select a service</option>{serviceOptions.map((s) => <option key={s}>{s}</option>)}
        </select>{err("service")}</div>
      <div><label htmlFor="budget" className="font-medium text-heading">Budget range <span className="text-muted">(optional)</span></label><input id="budget" className={field} placeholder="e.g. ₹20,000 – ₹50,000" {...register("budget")} /></div>
      <div><label htmlFor="description" className="font-medium text-heading">Project description</label><textarea id="description" rows={5} className={field} {...register("description")} />{err("description")}</div>
      <div><label htmlFor="preferred" className="font-medium text-heading">Preferred contact method</label>
        <select id="preferred" className={field} {...register("preferred")}>{["WhatsApp", "Instagram", "Phone call", "Email"].map((m) => <option key={m}>{m}</option>)}</select></div>
      <button type="submit" className="min-h-11 rounded-full bg-electric px-6 font-semibold text-white shadow-glow hover:bg-[#114fbe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric">Prepare my enquiry</button>
      <p className="text-xs text-muted">This form does not store or send your details. It prepares a WhatsApp message for you to send yourself.</p>
    </form>
  );
}

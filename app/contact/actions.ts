"use server";

import { getDb } from "@/lib/mongodb";
import type { ContactFormState } from "./types";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();
  // Honeypot field — real visitors never fill this in.
  const company = String(formData.get("company") || "").trim();

  if (company) {
    return { status: "success", message: "Thank you. We'll be in touch shortly." };
  }

  if (!name || !phone) {
    return {
      status: "error",
      message: "Please share your name and phone number so we can reach you.",
    };
  }

  const digitCount = phone.replace(/\D/g, "").length;
  if (digitCount < 7) {
    return {
      status: "error",
      message: "That phone number looks incomplete. Please double-check it.",
    };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "That email address doesn't look quite right.",
    };
  }

  try {
    const db = await getDb();
    await db.collection("contacts").insertOne({
      name,
      phone,
      email: email || null,
      service: service || null,
      message: message || null,
      createdAt: new Date(),
      source: "website-contact-form",
    });
  } catch (error) {
    console.error("Failed to save contact submission:", error);
    return {
      status: "error",
      message:
        "Something went wrong on our end. Please try reaching us on WhatsApp instead.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your message has been received, and our care team will reach out shortly to confirm your booking.",
  };
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { motionConfig, scrollReveal, buttonPress } from "@/lib/motion";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // TODO: Replace with your form submission logic
    // This is a placeholder - you'll need to integrate with a service like
    // Formspree, SendGrid, or your own API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.01 }}
          transition={motionConfig.fast}
          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 min-h-[44px] text-base"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.01 }}
          transition={motionConfig.fast}
          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 min-h-[44px] text-base"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-foreground"
        >
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.01 }}
          transition={motionConfig.fast}
          className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-base min-h-[120px]"
          placeholder="Your message"
        />
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={scrollReveal.hidden}
          animate={scrollReveal.visible}
          transition={motionConfig.standard}
          className="p-4 bg-muted text-foreground rounded-sm text-sm"
        >
          Thank you for your message. I'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={scrollReveal.hidden}
          animate={scrollReveal.visible}
          transition={motionConfig.standard}
          className="p-4 bg-muted text-foreground rounded-sm text-sm"
        >
          Something went wrong. Please try again or email me directly.
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ opacity: 0.9 }}
        whileTap="pressed"
        variants={buttonPress}
        transition={motionConfig.standard}
        className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
}


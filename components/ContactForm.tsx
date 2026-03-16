"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot — must stay empty
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot — must stay empty
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please wait for the security check to complete.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  const field =
    "w-full px-3.5 py-2.5 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cliq-aqua focus:border-transparent transition disabled:opacity-50";

  if (status === "success") {
    return (
      <div className="bg-cliq-white border border-cliq-navy/10 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 bg-cliq-aqua/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-cliq-aqua"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 mb-2">
          Message received
        </h3>
        <p className="text-zinc-600 text-sm">
          Thanks for reaching out. I&apos;ll get back to you within 1–2 business
          days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            disabled={status === "loading"}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={status === "loading"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={field}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-zinc-700 mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          disabled={status === "loading"}
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className={field}
          placeholder="What's on your mind?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-700 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          disabled={status === "loading"}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`${field} resize-none`}
          placeholder="Tell me what you're working on..."
        />
      </div>

      {/* Honeypot — hidden from real users, bots will fill it in */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="website">Leave this blank</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(token) => setTurnstileToken(token)}
        onExpire={() => setTurnstileToken("")}
        onError={() => {
          setTurnstileToken("");
          setStatus("error");
          setErrorMessage("Security check failed. Please refresh and try again.");
        }}
        options={{ theme: "light" }}
      />

      <button
        type="submit"
        disabled={status === "loading" || !turnstileToken}
        className="w-full px-5 py-3 bg-cliq-coral hover:bg-cliq-coral/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-sm"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

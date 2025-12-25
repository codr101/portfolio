"use client";

import { useState } from "react";

export default function ScheduleCall() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setSelectedDate("");
        setSelectedTime("");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error scheduling call:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 card-hover border border-slate-200 hover:border-slate-500 shadow-md">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-lg bg-slate-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-base font-bold text-slate-700 mb-2">
            Schedule a Call
          </h3>
          <p className="text-slate-600 text-sm font-semibold mb-3">
            Book a time to chat with me
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all text-sm"
            placeholder="Your name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all text-sm"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all text-sm"
          />
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all text-sm"
          >
            <option value="">Select time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {isSubmitting ? "Scheduling..." : "Schedule Call"}
        </button>
        {submitStatus === "success" && (
          <div className="p-2 bg-slate-100 border border-slate-300 rounded-lg text-slate-700 text-xs font-medium">
            ✓ Call scheduled!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs font-medium">
            ✗ Failed to schedule. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}


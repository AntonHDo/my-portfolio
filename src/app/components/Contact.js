"use client";

import React, { useState } from "react";
import { useDarkMode } from "../hooks/DarkModeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { isDarkMode } = useDarkMode();
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <section

      className={`${isDarkMode ? "!bg-slate-800 text-slate-200" : " text-slate-800 !bg-slate-200"} flex flex-col items-center pt-20 w-full `}
    >
      <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full text-5xl font-bold">
        Contact Me!      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col self-center px-7 py-20 mt-0 max-w-full text-lg whitespace-nowrap text-slate-400 w-[789px] max-md:px-5"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`${isDarkMode ? "!bg-slate-200 border-slate-300" : "  !bg-slate-50 border-slate-800"} px-4 py-2.5 rounded-md border border-solid   max-md:max-w-full`}
          placeholder="Name"
          required
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`${isDarkMode ? "!bg-slate-200 border-slate-300" : "  !bg-slate-50 border-slate-800"} mt-10 px-4 py-2.5 rounded-md border border-solid   max-md:max-w-full`}
          placeholder="Email"
          required
        />

        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className={`${isDarkMode ? "!bg-slate-200 border-slate-300" : "  !bg-slate-50 border-slate-800"} mt-10 px-4 py-2.5 rounded-md border border-solid   max-md:max-w-full`}
          placeholder="Subject"
          required
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={`${isDarkMode ? "!bg-slate-200 border-slate-300" : "  !bg-slate-50 border-slate-800"} mt-10 px-4 py-2.5 rounded-md border border-solid   max-md:max-w-full`}
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className={`${isDarkMode ? "!bg-slate-200 border-slate-300 text-slate-800" : " !bg-slate-800 border-slate-400 text-slate-200"} self-center px-4 py-2.5 mt-16 text-2xl text-center  rounded-md border border-solid max-md:mt-10`}
        >
          Submit
        </button>
        <p className="text-center mt-4 text-lg">{status}</p>
      </form>
    </section>
  );
};

export default Contact;

import React from "react";
import SectionTitle from "./Section Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex relative flex-col items-center mt-16 w-full max-md:mt-16 max-md:max-w-full"
    >
      <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <SectionTitle title="Contact Me" />
      </div>
      <form className="flex flex-col self-center px-7 py-11 mt-9 max-w-full text-lg whitespace-nowrap text-slate-400 w-[789px] max-md:px-5">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="px-4 py-2.5 rounded-md border border-solid bg-stone-100 border-stone-300 max-md:max-w-full"
          placeholder="Name"
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="px-4 py-2.5 mt-16 rounded-md border border-solid bg-stone-100 border-stone-300 max-md:pr-5 max-md:mt-10 max-md:max-w-full"
          placeholder="Email"
        />

        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="px-4 py-2.5 mt-16 rounded-md border border-solid bg-stone-100 border-stone-300 max-md:pr-5 max-md:mt-10 max-md:max-w-full"
          placeholder="Subject"
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          className="px-4 pt-2.5 pb-6 mt-16 rounded-md border border-solid bg-stone-100 border-stone-300 max-md:mt-10 max-md:max-w-full"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="self-center px-4 py-2.5 mt-16 text-2xl text-center text-white rounded-md border border-solid bg-slate-400 border-neutral-300 max-md:mt-10"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

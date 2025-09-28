import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="relative h-4/5 flex flex-col lg:flex-row items-center justify-between px-6 ">
      {/* ------ Newsletter Left ------ */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-3/5 absolute lg:-left-10 lg:top-24 -z-0 filter blur-2xl lg:blur-3xl">
        <Image
          src="/images/subtle-by.jpg"
          fill
          sizes="50vw"
          alt="Image by kjpargeter on Freepik"
        />
      </div>
      <div className="relative w-48 lg:w-2/5 h-60">
        <Image
          src="/images/undraw_mailbox.svg"
          fill
          alt="newsletter-illustration"
        />
      </div>

      {/* ------ Newsletter Right ------ */}
      <div className="lg:w-1/2 flex flex-col lg:px-20 py-6 space-y-6 text-slate-600 z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Subscribe to The-Night-Owl newsletter.
        </h2>

        <p className="lg:text-lg font-medium tracking-wide leading-relaxed">
          Uncover a world of ideas: The Night Owl's Monthly Roundup
        </p>

        <div className="lg:pt-6 flex flex-col sm:flex-row space-y-4 lg:space-y-0 max-w-md lg:max-w-lg gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/50 px-3.5 py-2.5 text-white shadow-md ring-1 ring-inset ring-white/5 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

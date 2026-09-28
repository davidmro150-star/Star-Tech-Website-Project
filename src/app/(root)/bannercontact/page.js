"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="rounded-md bg-white p-5 shadow-sm sm:p-8 lg:p-10">

            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Complain & Feedback
              </h1>

              <p className="mt-4 text-sm font-medium text-gray-700">
                Please fill out the following form with details
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                We will review your request and follow up with you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone No.
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Enter subject"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="details"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Details
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <textarea
                  id="details"
                  name="details"
                  rows={8}
                  required
                  placeholder="Write your complaint or feedback here..."
                  className="w-full resize-y rounded-md border border-gray-300 px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Submit
                </button>
              </div>

              {submitted && (
                <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Thank you! Your complaint or feedback has been submitted.
                </div>
              )}

            </form>
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={60}
              className="h-auto w-[180px] object-contain"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white py-6">
        <div className="mx-auto px-4">
          <p className="text-center text-sm text-gray-500">
            © Power By{" "}
            <span className="font-medium text-gray-700">
              SYP Solutions Ltd
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
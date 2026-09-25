
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserPlus,
} from "lucide-react";

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only
    alert("Account registration submitted!");
  };

  return (
    <main className="min-h-screen bg-[#f5f6f7] font-jost">

      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="transition hover:text-[#e21b23]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-gray-800">
              My Account
            </span>
          </div>
        </div>
      </section>

      {/* Account Section */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-[1100px]">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0f1] text-[#e21b23]">
              <UserPlus size={27} />
            </div>

            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Create Your Account
            </h1>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Create an account to manage your orders, shopping history,
              wishlist and more.
            </p>
          </div>

          {/* Main Card */}
          <div className="grid overflow-visible rounded-2xl bg-white shadow-sm md:grid-cols-[0.85fr_1.15fr]">

            {/* Left Information */}
            <div className="bg-black p-7 text-white sm:p-10 lg:p-12">

              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Welcome to Star Tech
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Join our technology community
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base">
                Create your account and enjoy a smoother shopping experience
                with easy access to your orders, wishlist and account
                information.
              </p>

              <div className="mt-8 space-y-4">

                <AccountBenefit text="Manage your orders easily" />

                <AccountBenefit text="Save products to your wishlist" />

                <AccountBenefit text="View your shopping history" />

                <AccountBenefit text="Keep your account information organized" />

              </div>

              <div className="mt-10 border-t border-white/20 pt-6">
                <p className="text-sm text-white/80 mb-5">
                  Already have an account?
                </p>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-black hover:text-white transition-all duration-300 hover:bg-[#c8171e] hover:shadow-lg"
                >
                  Create Account
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Registration Form */}
            <div className="p-6 sm:p-10 lg:p-12">

              <div className="mb-7">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Register Account
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Fill in the information below to create your account.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <FormField
                    label="First Name"
                    icon={<User size={18} />}
                    type="text"
                    placeholder="Enter first name"
                    required
                  />

                  <FormField
                    label="Last Name"
                    icon={<User size={18} />}
                    type="text"
                    placeholder="Enter last name"
                    required
                  />

                </div>

                {/* Email */}
                <FormField
                  label="E-Mail"
                  icon={<Mail size={18} />}
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                {/* Phone */}
                <FormField
                  label="Telephone"
                  icon={<Phone size={18} />}
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  required
                />

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      required
                      className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-11 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e21b23] focus:ring-2 focus:ring-[#e21b23]/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#e21b23]"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      required
                      className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-11 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e21b23] focus:ring-2 focus:ring-[#e21b23]/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#e21b23]"
                      aria-label="Toggle confirm password visibility"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Privacy */}
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-500">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-[#e21b23]"
                  />

                  <span>
                    I have read and agree to the{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-medium text-[#e21b23] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#e21b23] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c8171e]"
                >
                  Create Account
                  <ArrowRight size={18} />
                </button>

              </form>

              {/* Mobile Login */}
              <div className="mt-7 border-t border-gray-200 pt-6 text-center md:hidden">
                <p className="text-sm text-gray-500">
                  Already have an account?
                </p>

                <Link
                  href="/login"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#e21b23]"
                >
                  Login
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


/* Form Field */
function FormField({
  label,
  icon,
  type,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-md border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#e21b23] focus:ring-2 focus:ring-[#e21b23]/10"
        />
      </div>
    </div>
  );
}


/* Account Benefit */
function AccountBenefit({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs">
        ✓
      </div>

      <p className="text-sm leading-6 text-white/90">
        {text}
      </p>
    </div>
  );
}


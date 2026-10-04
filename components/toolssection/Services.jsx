
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  
  ArrowRight,
  ClipboardList,
  FileText,
  CheckCircle2,
  Send,
  PackageCheck,
  User,
  Phone,
  Mail,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import Container from "../Container";

// =========================================================
// BANNER DATA
// =========================================================

const banners = [
  {
    image: "/images/banners/desktop.webp",
    alt: "Desktop Service",
  },
  {
    image: "/images/banners/laptop.webp",
    alt: "Laptop Service",
  },
  {
    image: "/images/banners/mobile.webp",
    alt: "Mobile Repair Service",
  },
];

// =========================================================
// BRAND DATA
// =========================================================

const brands = [
  {
    name: "Apple",
    image:
      "https://service.startech.com.bd/image/catalog/brands/Apple%20%281%29.webp",
  },
  {
    name: "Dell",
    image:
      "https://service.startech.com.bd/image/catalog/brands/Dell1.webp",
  },
  {
    name: "HP",
    image:
      "https://service.startech.com.bd/image/catalog/brands/HP%20%281%29.webp",
  },
  {
    name: "Lenovo",
    image:
      "https://service.startech.com.bd/image/catalog/brands/Lenovo%20%281%29.webp",
  },
];

// =========================================================
// SERVICE DATA
// =========================================================

const services = [
  {
    title: "Desktop Service",
    price: "Starts from: 500৳",
    href: "/desktop-service",
    image:
      "https://service.startech.com.bd/image/cache/catalog/service/desktop-repair-service-150x150.webp",
  },
  {
    title: "Laptop Service",
    price: "Starts from: 1,000৳",
    href: "/laptop-service",
    image:
      "https://service.startech.com.bd/image/cache/catalog/service/laptop-repair-service-150x150.webp",
  },
  {
    title: "Printer Service",
    price: "Starts from: 500৳",
    href: "/printer-service",
    image:
      "https://service.startech.com.bd/image/cache/catalog/service/printer-repair-service-150x150.webp",
  },
  {
    title: "Monitor Service",
    price: "Starts from: 1,000৳",
    href: "/monitor-service",
    image:
      "https://service.startech.com.bd/image/cache/catalog/service/monitor-service-150x150.webp",
  },
  {
    title: "Projector Service",
    price: "Starts from: 1,500৳",
    href: "/projector-service",
    image:
      "https://service.startech.com.bd/image/cache/catalog/service/projector-repair-service-150x150.webp",
  },
  {
    title: "Mobile  Service",
    price: "Starts from: 500৳",
    href: "/mobile-repair-service",
    image:
      "https://service.startech.com.bd/image/cache/catalog/service/mobile-repair-service-150x150.webp",
  },
];

// =========================================================
// SERVICE STEPS
// =========================================================

const steps = [
  {
    number: "01",
    title: "Describe Your Issue",
    description:
      "Share the details of the problem you're experiencing, either online or in-person at our service center.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Get a Quote",
    description:
      "We will provide you with a detailed service plan and cost estimate, either over the phone or in-person.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Approve the Service Plan",
    description:
      "Review and approve the proposed service plan and cost estimate.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Send or Bring Your Device",
    description:
      "Securely ship your device to us or bring it directly to our service center.",
    icon: Send,
  },
  {
    number: "05",
    title: "Get Your Device Back",
    description:
      "Once repaired, we will swiftly return your device to you, or you can pick it up from our service center.",
    icon: PackageCheck,
  },
];

// =========================================================
// PAGE
// =========================================================

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // =======================================================
  // AUTO SLIDER
  // =======================================================

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === banners.length - 1 ? 0 : previous + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  

  // =======================================================
  // FORM SUBMIT
  // =======================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Your service request has been submitted.");
  };

  return (
    <main className="min-h-screen bg-[#f2f4f8] text-gray-900">

      <Container>

        <section className="bg-[#fff]">

          <div className="text-center">

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Trusted Brands We Service
            </h2>

            <p className="mx-auto mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Professional service and repair support for leading technology
              brands.
            </p>

          </div>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

            <div className="relative">

              {/* BANNER */}

              <div className="relative min-h-[220px] rounded-2xl bg-gray-900 sm:min-h-[300px] lg:min-h-[380px]">

                {banners.map((banner, index) => (
                  <div
                    key={banner.image}
                    className={`
              absolute inset-0
              rounded-2xl
              transition-opacity duration-700
              ${currentSlide === index
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                      }
            `}
                  >
                    <img
                      src={banner.image}
                      alt={banner.alt}
                      className="
                absolute inset-0
                h-full w-full
                rounded-2xl
                object-cover
              "
                    />
                  </div>
                ))}

                {/* SLIDE DOTS */}

                <div
                  className="
            absolute bottom-5 left-1/2 z-30
            flex -translate-x-1/2
            items-center gap-2
          "
                >
                  {banners.map((banner, index) => (
                    <button
                      key={banner.image}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`
                h-2.5 rounded-full
                transition-all duration-300
                ${currentSlide === index
                          ? "w-8 bg-red-600"
                          : "w-2.5 bg-white/70"
                        }
              `}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
          1. BRAND LOGOS
      ====================================================== */}

        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">



            {/* BRAND CARDS */}

            <div
              className=" mx-auto mb-8 grid max-w-7xl   grid-cols-2   gap-5   sm:grid-cols-4 sm:gap-6 lg:gap-8
            "
            >
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="
                  flex h-24
                  items-center justify-center
                  rounded-xl
                  border border-gray-200
                  bg-white
                  px-5
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-red-300
                  hover:shadow-md
                  sm:h-28
                "
                >
                  <img
                    src={brand.image}
                    alt={`${brand.name} service`}
                    className="
                    max-h-12
                    max-w-[130px]
                    object-contain
                    sm:max-h-14
                    sm:max-w-[150px]
                  "
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =====================================================
          2. GET HELP FROM EXPERTS
      ====================================================== */}

        <section
          id="service-form"
          className="bg-gray-50"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              {/* LEFT CONTENT */}

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  Fill the Form
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Get Help from{" "}
                  <span className="text-red-600">Experts</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                  Tell us about your device and the problem you are
                  experiencing. Our service experts will help you find the
                  right solution.
                </p>

                <div className="mt-8 space-y-5">

                  {/* PROFESSIONAL SERVICE */}

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      <ShieldCheck size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Professional Service
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Experienced technicians and proper diagnostic support.
                      </p>
                    </div>
                  </div>

                  {/* COMPLETE SUPPORT */}

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      <Wrench size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Complete Repair Support
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        From diagnosis to repair and device collection.
                      </p>
                    </div>
                  </div>

                  {/* GENUINE PARTS */}

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      <ShieldCheck size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Genuine Parts & Quality
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Genuine replacement parts and quality-focused repair solutions.
                      </p>
                    </div>
                  </div>

                  {/* WARRANTY SUPPORT */}

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      <CheckCircle2 size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Warranty Support
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Reliable service with support after your device repair is completed.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* FORM */}

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

                <div className="mb-6">
                  <h2 className="text-xl font-bold sm:text-2xl">
                    Get Help from Experts
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Fill in the information below.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* SERVICE */}

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Service you are looking for
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className="
                      w-full rounded-xl
                      border border-gray-200
                      bg-white
                      px-4 py-3.5
                      text-sm
                      outline-none
                      transition
                      focus:border-red-500
                      focus:ring-2
                      focus:ring-red-100
                    "
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="desktop">
                        Desktop Service
                      </option>

                      <option value="laptop">
                        Laptop Service
                      </option>

                      <option value="printer">
                        Printer Service
                      </option>

                      <option value="monitor">
                        Monitor Service
                      </option>

                      <option value="projector">
                        Projector Service
                      </option>

                      <option value="mobile">
                        Mobile Repair Service
                      </option>
                    </select>
                  </div>

                  {/* ISSUE */}

                  <div>
                    <label
                      htmlFor="issue"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      A little about the issue
                    </label>

                    <textarea
                      id="issue"
                      name="issue"
                      rows={4}
                      required
                      placeholder="Describe your problem..."
                      className="
                      w-full resize-none
                      rounded-xl
                      border border-gray-200
                      px-4 py-3.5
                      text-sm
                      outline-none
                      transition
                      placeholder:text-gray-400
                      focus:border-red-500
                      focus:ring-2
                      focus:ring-red-100
                    "
                    />
                  </div>

                  {/* NAME */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="
                        absolute left-4 top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="
                        w-full rounded-xl
                        border border-gray-200
                        py-3.5
                        pl-11 pr-4
                        text-sm
                        outline-none
                        transition
                        focus:border-red-500
                        focus:ring-2
                        focus:ring-red-100
                      "
                      />
                    </div>
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="
                        absolute left-4 top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="01XXXXXXXXX"
                        className="
                        w-full rounded-xl
                        border border-gray-200
                        py-3.5
                        pl-11 pr-4
                        text-sm
                        outline-none
                        transition
                        focus:border-red-500
                        focus:ring-2
                        focus:ring-red-100
                      "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="
                        absolute left-4 top-1/2
                        -translate-y-1/2
                        text-gray-400
                      "
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="
                        w-full rounded-xl
                        border border-gray-200
                        py-3.5
                        pl-11 pr-4
                        text-sm
                        outline-none
                        transition
                        focus:border-red-500
                        focus:ring-2
                        focus:ring-red-100
                      "
                      />
                    </div>
                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="
                    flex w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-6 py-3.5
                    text-sm font-semibold
                    text-white
                    transition duration-300
                    hover:bg-red-700
                    active:scale-[0.99]
                  "
                  >
                    Get Help
                    <ArrowRight size={18} />
                  </button>

                </form>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
          3. GET SERVED
      ====================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                Get Served
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Follow These Simple Steps
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5 lg:grid-cols-5">

              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="
              group rounded-2xl
              border border-gray-200
              bg-white p-6
              transition duration-300
              hover:-translate-y-1
              hover:border-red-200
              hover:shadow-lg
            "
                  >
                    <div className="flex items-center justify-between">

                      <span className="text-3xl font-bold text-gray-100">
                        {step.number}
                      </span>

                      <div
                        className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-red-50
                  text-red-600
                  transition
                  group-hover:bg-red-600
                  group-hover:text-white
                "
                      >
                        <Icon size={20} />
                      </div>

                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
          4. FEATURED SERVICES
      ====================================================== */}

        <section className="bg-gray-50">
      

          <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="
        group rounded-2xl
        border border-gray-200
        bg-white p-5 text-center
        transition duration-300
        hover:-translate-y-1
        hover:border-red-200
        hover:shadow-xl
      "
              >

                {/* IMAGE */}

                <div
                  className="
          flex h-44 w-full
          items-center justify-center
          rounded-xl
          bg-gray-50
          p-4
        "
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
            h-full w-full
            object-contain
            transition duration-300
            group-hover:scale-105
          "
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
          mt-5
          text-lg font-bold
          text-gray-900
          transition
          group-hover:text-red-600
        "
                >
                  {service.title}
                </h3>

                {/* SERVICE PRICE */}

                <p className="mt-2 text-sm font-semibold text-red-600">
                  {service.price}
                </p>

                {/* VIEW SERVICE */}

                <span
                  className="
          mt-4 inline-flex
          items-center gap-1
          text-sm font-semibold
          text-gray-600
          transition
          group-hover:text-red-600
        "
                >
                  View Service

                  <ArrowRight
                    size={15}
                    className="
            transition
            group-hover:translate-x-1
          "
                  />
                </span>

              </Link>
            ))}

          </div>
        </section>
     </Container>
  


    </main>
  );
}


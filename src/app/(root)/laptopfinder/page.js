
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Laptop,
} from "lucide-react";

import productsData from "../../../../api/productsData";

// =========================================================
// USE LAPTOP DATA FROM EXISTING productsData API
// =========================================================

const LaptopProducts = Array.isArray(productsData)
  ? productsData.filter(
      (product) =>
        product?.category?.toLowerCase() === "laptop"
    )
  : [];

// =========================================================
// BUDGET
// =========================================================

function getBudgetValue(budget) {
  if (!budget) return null;

  const number = budget.replace(/[^\d]/g, "");

  return Number(number);
}

// =========================================================
// PRODUCT TEXT
// =========================================================

function productText(product) {
  return JSON.stringify(product).toLowerCase();
}

// =========================================================
// PURPOSE KEYWORDS
// =========================================================

const purposeKeywords = {
  "Basic Home Use": [
    "home",
    "basic",
    "everyday",
    "office",
    "internet",
    "browser",
    "web",
    "multimedia",
  ],

  "Basic Office Use": [
    "office",
    "business",
    "productivity",
    "word",
    "excel",
    "powerpoint",
  ],

  Study: [
    "student",
    "study",
    "education",
    "school",
    "college",
    "university",
    "office",
  ],

  Freelancing: [
    "freelance",
    "business",
    "office",
    "productivity",
    "creator",
    "professional",
  ],

  "Basic Programming": [
    "programming",
    "developer",
    "coding",
    "code",
    "software",
  ],

  "Software Development": [
    "software development",
    "developer",
    "programming",
    "coding",
    "development",
    "software",
    "intel core i5",
    "intel core i7",
    "ryzen 5",
    "ryzen 7",
  ],

  "Graphic Design": [
    "graphic",
    "design",
    "photoshop",
    "illustrator",
    "creative",
    "creator",
    "dedicated graphics",
    "nvidia",
    "rtx",
    "radeon",
  ],

  "Video Editing": [
    "video editing",
    "video",
    "editing",
    "premiere",
    "after effects",
    "creator",
    "creative",
    "rtx",
    "nvidia",
    "dedicated graphics",
  ],

  Gaming: [
    "gaming",
    "gamer",
    "rtx",
    "gtx",
    "gaming laptop",
    "nvidia",
    "radeon",
    "dedicated graphics",
  ],

  Streaming: [
    "streaming",
    "creator",
    "gaming",
    "video",
    "content creator",
    "webcam",
  ],

  "Gaming & Streaming": [
    "gaming",
    "streaming",
    "creator",
    "rtx",
    "gtx",
    "nvidia",
    "dedicated graphics",
  ],
};

// =========================================================
// PURPOSE MATCH
// =========================================================

function matchesPurpose(product, purpose) {
  if (!purpose) return true;

  const text = productText(product);

  const keywords = purposeKeywords[purpose] || [];

  if (keywords.length === 0) return true;

  return keywords.some((keyword) =>
    text.includes(keyword.toLowerCase())
  );
}

// =========================================================
// SCREEN SIZE
// =========================================================

function getScreenSize(product) {
  const text = productText(product);

  const matches = text.match(
    /(\d{2}(?:\.\d+)?)\s*(?:inch|inches|")/gi
  );

  if (!matches || matches.length === 0) {
    return null;
  }

  const sizes = matches
    .map((value) => {
      const number = value.match(/\d{2}(?:\.\d+)?/);

      return number ? Number(number[0]) : null;
    })
    .filter(Boolean);

  return sizes.length > 0 ? sizes[0] : null;
}

// =========================================================
// SCREEN SIZE MATCH
// =========================================================

function matchesScreenSize(product, screenSize) {
  if (!screenSize) return true;

  const size = getScreenSize(product);

  if (size === null) return true;

  if (screenSize === "Less than 13 inches") {
    return size < 13;
  }

  if (screenSize === "13 to 14.9 inches") {
    return size >= 13 && size <= 14.9;
  }

  if (screenSize === "15 to 17 inches") {
    return size >= 15 && size <= 17;
  }

  if (screenSize === "Bigger than 17 inches") {
    return size > 17;
  }

  return true;
}

// =========================================================
// PORTABILITY
// =========================================================

function matchesPortability(product, portability) {
  if (!portability) return true;

  if (portability === "Not necessary") {
    return true;
  }

  const text = productText(product);

  if (portability === "Yes") {
    return [
      "lightweight",
      "thin",
      "portable",
      "ultrabook",
      "slim",
      "thin and light",
    ].some((keyword) => text.includes(keyword));
  }

  return true;
}

// =========================================================
// FEATURE KEYWORDS
// =========================================================

const featureKeywords = {
  "Backlit Keyboard": [
    "backlit",
    "backlight",
    "back-lit",
  ],

  "Fingerprint Sensor": [
    "fingerprint",
  ],

  Touchscreen: [
    "touchscreen",
    "touch screen",
    "touch display",
  ],

  "360° Convertible": [
    "360",
    "convertible",
    "2-in-1",
    "2 in 1",
    "2in1",
  ],

  Detachable: [
    "detachable",
  ],

  "Dual Display": [
    "dual display",
    "dual screen",
    "second display",
    "secondary display",
  ],

  "Metal Build": [
    "metal build",
    "aluminium",
    "aluminum",
    "metal body",
    "metal chassis",
    "metal",
  ],

  "Privacy Shutter Webcam": [
    "privacy shutter",
    "camera shutter",
    "webcam shutter",
    "privacy camera",
  ],

  "Original Operating System": [
    "windows 11",
    "windows 10",
    "original windows",
    "genuine windows",
    "operating system",
    "os included",
    "windows included",
  ],
};

// =========================================================
// FEATURE MATCH
// =========================================================

function matchesFeature(product, selectedFeatures = []) {
  if (!selectedFeatures || selectedFeatures.length === 0) {
    return true;
  }

  const text = productText(product);

  return selectedFeatures.every((feature) => {
    const keywords = featureKeywords[feature] || [];

    return keywords.some((keyword) =>
      text.includes(keyword.toLowerCase())
    );
  });
}

// =========================================================
// FINAL FILTER
// =========================================================

function filterLaptopProducts(products, answers) {
  if (!Array.isArray(products)) {
    return [];
  }

  return products.filter((product) => {
    // -------------------------------------------------------
    // BUDGET
    // -------------------------------------------------------

    if (answers.budget) {
      const maxBudget = getBudgetValue(answers.budget);

      const productPrice = Number(
        String(product.price || "").replace(/[^\d.]/g, "")
      );

      if (
        Number.isFinite(maxBudget) &&
        Number.isFinite(productPrice) &&
        productPrice > maxBudget
      ) {
        return false;
      }
    }

    // -------------------------------------------------------
    // PURPOSE
    // -------------------------------------------------------

    if (!matchesPurpose(product, answers.purpose)) {
      return false;
    }

    // -------------------------------------------------------
    // SCREEN SIZE
    // -------------------------------------------------------

    if (!matchesScreenSize(product, answers.screenSize)) {
      return false;
    }

    // -------------------------------------------------------
    // PORTABILITY
    // -------------------------------------------------------

    if (!matchesPortability(product, answers.portability)) {
      return false;
    }

    // -------------------------------------------------------
    // FEATURES
    // -------------------------------------------------------

    if (!matchesFeature(product, answers.features)) {
      return false;
    }

    return true;
  });
}

// =========================================================
// QUESTIONS
// =========================================================

const questions = [
  {
    key: "budget",
    title: "What's your budget?",
    subtitle: "Choose the maximum amount you want to spend.",
    type: "radio",

    options: [
      "Up to 40,000৳",
      "Up to 50,000৳",
      "Up to 60,000৳",
      "Up to 80,000৳",
      "Up to 100,000৳",
      "Up to 150,000৳",
      "Up to 200,000৳",
      "Up to 250,000৳",
      "Up to 300,000৳",
      "Up to 400,000৳",
      "Up to 700,000৳",
      "Up to 800,000৳",
    ],
  },

  {
    key: "purpose",
    title: "What will you use the laptop for?",
    subtitle: "Select the purpose that best matches your needs.",
    type: "radio",

    options: [
      "Basic Home Use",
      "Basic Office Use",
      "Study",
      "Freelancing",
      "Basic Programming",
      "Software Development",
      "Graphic Design",
      "Video Editing",
      "Gaming",
      "Streaming",
      "Gaming & Streaming",
    ],
  },

  {
    key: "screenSize",
    title: "What screen size do you prefer?",
    subtitle: "Choose your preferred laptop display size.",
    type: "radio",

    options: [
      "Less than 13 inches",
      "13 to 14.9 inches",
      "15 to 17 inches",
      "Bigger than 17 inches",
    ],
  },

  {
    key: "portability",
    title: "Do you need a portable laptop?",
    subtitle: "Choose whether portability is important to you.",
    type: "radio",

    options: [
      "Yes",
      "Not necessary",
    ],
  },

  {
    key: "features",
    title: "Which features do you need?",
    subtitle: "You can select multiple features.",
    type: "checkbox",

    options: [
      "Backlit Keyboard",
      "Fingerprint Sensor",
      "Touchscreen",
      "360° Convertible",
      "Detachable",
      "Dual Display",
      "Metal Build",
      "Privacy Shutter Webcam",
      "Original Operating System",
    ],
  },
];

// =========================================================
// DESCRIPTIONS
// =========================================================

const descriptions = {
  "Up to 40,000৳":
    "Suitable for basic everyday tasks such as browsing, documents and multimedia.",

  "Up to 50,000৳":
    "A practical budget for study, office work and everyday computing.",

  "Up to 60,000৳":
    "Good for students, office work, freelancing and general productivity.",

  "Up to 80,000৳":
    "Suitable for more demanding productivity, programming and creative tasks.",

  "Up to 100,000৳":
    "A higher-performance range for development, design and professional work.",

  "Up to 150,000৳":
    "Suitable for advanced development, creative work and gaming.",

  "Up to 200,000৳":
    "High-performance laptops for demanding professional workloads and gaming.",

  "Up to 250,000৳":
    "Premium laptops for demanding development, design, editing and gaming.",

  "Up to 300,000৳":
    "High-end performance for professional creative work and gaming.",

  "Up to 400,000৳":
    "Premium performance for demanding professional and enthusiast workloads.",

  "Up to 700,000৳":
    "Ultra-premium laptops designed for extremely demanding workloads.",

  "Up to 800,000৳":
    "Top-tier laptops with maximum performance and premium features.",

  "Basic Home Use":
    "For browsing, watching videos, social media and everyday home tasks.",

  "Basic Office Use":
    "For Microsoft Office, email, documents, presentations and business tasks.",

  Study:
    "For students doing research, online classes, assignments and everyday study.",

  Freelancing:
    "For remote work, freelancing platforms, office applications and productivity.",

  "Basic Programming":
    "For learning programming, coding, web development and basic development tasks.",

  "Software Development":
    "For developers working with coding tools, IDEs, frameworks and software projects.",

  "Graphic Design":
    "For Photoshop, Illustrator and other graphic design and creative applications.",

  "Video Editing":
    "For video editing, Premiere Pro, After Effects and other creative workloads.",

  Gaming:
    "For playing modern PC games with stronger graphics and performance.",

  Streaming:
    "For content creation, live streaming, webcam use and multimedia workloads.",

  "Gaming & Streaming":
    "For gaming while simultaneously streaming and creating content.",

  "Less than 13 inches":
    "Compact display size designed for maximum portability.",

  "13 to 14.9 inches":
    "A balanced size offering portability while maintaining a comfortable workspace.",

  "15 to 17 inches":
    "A larger display suitable for productivity, entertainment, design and gaming.",

  "Bigger than 17 inches":
    "Extra-large displays designed for maximum screen space.",

  Yes:
    "Prioritizes lightweight, thin and portable laptop designs.",

  "Not necessary":
    "Portability is not an important requirement.",

  "Backlit Keyboard":
    "Makes typing easier in low-light environments.",

  "Fingerprint Sensor":
    "Provides convenient biometric login and security.",

  Touchscreen:
    "Allows you to interact directly with the display.",

  "360° Convertible":
    "Allows the laptop to fold and work in different modes.",

  Detachable:
    "Allows the display to detach from the keyboard section.",

  "Dual Display":
    "Provides additional screen space for multitasking.",

  "Metal Build":
    "Provides a premium metal chassis or body construction.",

  "Privacy Shutter Webcam":
    "Provides a physical shutter to cover the webcam.",

  "Original Operating System":
    "Includes an operating system such as genuine Windows.",
};

// =========================================================
// PAGE
// =========================================================

export default function LaptopFinderPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(0);

  const [answers, setAnswers] = useState({
    budget: "",
    purpose: "",
    screenSize: "",
    portability: "",
    features: [],
  });

  const currentQuestion = questions[currentStep];

  // =======================================================
  // CHECK IF ANYTHING SELECTED
  // =======================================================

  const hasSelection =
    answers.budget !== "" ||
    answers.purpose !== "" ||
    answers.screenSize !== "" ||
    answers.portability !== "" ||
    answers.features.length > 0;

  // =======================================================
  // MATCHED LAPTOP COUNT
  // =======================================================

  const matchedLaptopCount = useMemo(() => {
    if (!hasSelection) {
      return 0;
    }

    return filterLaptopProducts(
      LaptopProducts || [],
      answers
    ).length;
  }, [answers, hasSelection]);

  // =======================================================
  // CHECK SELECTED
  // =======================================================

  function isSelected(option) {
    if (currentQuestion.type === "checkbox") {
      return answers.features.includes(option);
    }

    return answers[currentQuestion.key] === option;
  }

  // =======================================================
  // HANDLE OPTION
  // =======================================================

  function handleOptionChange(option) {
    if (currentQuestion.type === "checkbox") {
      setAnswers((previous) => {
        const alreadySelected =
          previous.features.includes(option);

        return {
          ...previous,
          features: alreadySelected
            ? previous.features.filter(
                (feature) => feature !== option
              )
            : [...previous.features, option],
        };
      });

      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.key]: option,
    }));
  }

  // =======================================================
  // NEXT
  // =======================================================

  function handleNext() {
    if (currentStep >= questions.length - 1) {
      return;
    }

    setCurrentStep((previous) => previous + 1);
  }

  // =======================================================
  // PREVIOUS
  // =======================================================

  function handlePrev() {
    if (currentStep <= 0) {
      return;
    }

    setCurrentStep((previous) => previous - 1);
  }

  // =======================================================
  // GO TO RESULTS
  // =======================================================

  function goToResults() {
    const params = new URLSearchParams();

    if (answers.budget) {
      params.set("budget", answers.budget);
    }

    if (answers.purpose) {
      params.set("purpose", answers.purpose);
    }

    if (answers.screenSize) {
      params.set("screenSize", answers.screenSize);
    }

    if (answers.portability) {
      params.set("portability", answers.portability);
    }

    if (answers.features.length > 0) {
      params.set(
        "features",
        answers.features
          .map((feature) => encodeURIComponent(feature))
          .join(",")
      );
    }

    router.push(
      `/laptopfinder/products?${params.toString()}`
    );
  }

  // =======================================================
  // RETURN
  // =======================================================

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="mb-10 text-center">

          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
              <Laptop
                size={28}
                className="text-[#e21b23]"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Laptop Finder
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Answer a few simple questions and find laptops
            that match your requirements.
          </p>

        </div>

        {/* FINDER CARD */}

        <div className="mx-auto max-w-6xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

          {/* STEP */}

          <div className="mb-6 flex items-center justify-between">

            <p className="text-sm font-semibold text-gray-700">
              Question {currentStep + 1} of {questions.length}
            </p>

            <p className="text-sm text-gray-400">
              {Math.round(
                ((currentStep + 1) / questions.length) * 100
              )}
              %
            </p>

          </div>

          {/* PROGRESS */}

          <div className="mb-8 h-2 w-full rounded-full bg-gray-100">
            <div
              className="h-2 rounded-full bg-[#e21b23] transition-all duration-300"
              style={{
                width: `${
                  ((currentStep + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>

          {/* QUESTION TITLE */}

          <div className="text-center">

            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {currentQuestion.title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {currentQuestion.subtitle}
            </p>

          </div>

          {/* MAIN OPTIONS + SIDE BUTTONS */}

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5 lg:gap-8">

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition sm:px-5 ${
                currentStep === 0
                  ? "cursor-not-allowed bg-gray-100 text-gray-400"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">
                Previous
              </span>
            </button>

            {/* OPTIONS */}

            <div className="w-full max-w-2xl">

              <div className="max-h-[430px] overflow-y-auto pr-1">

                <div
                  className={
                    currentQuestion.type === "checkbox"
                      ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
                      : "space-y-3"
                  }
                >

                  {currentQuestion.options.map(
                    (option, index) => {

                      const selected =
                        isSelected(option);

                      return (
                        <label
                          key={`${option}-${index}`}
                          className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition ${
                            selected
                              ? "border-[#e21b23] bg-red-50"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                        >

                          {currentQuestion.type ===
                          "radio" ? (
                            <input
                              type="radio"
                              name={
                                currentQuestion.key
                              }
                              value={option}
                              checked={selected}
                              onChange={() =>
                                handleOptionChange(
                                  option
                                )
                              }
                              className="h-4 w-4 shrink-0 accent-[#e21b23]"
                            />
                          ) : (
                            <input
                              type="checkbox"
                              value={option}
                              checked={selected}
                              onChange={() =>
                                handleOptionChange(
                                  option
                                )
                              }
                              className="h-4 w-4 shrink-0 rounded accent-[#e21b23]"
                            />
                          )}

                          <div className="min-w-0 flex-1">

                            <p className="text-sm font-semibold text-gray-900">
                              {option}
                            </p>

                            {descriptions[option] && (
                              <p className="mt-1 text-xs leading-5 text-gray-500">
                                {descriptions[option]}
                              </p>
                            )}

                          </div>

                        </label>
                      );
                    }
                  )}

                </div>

              </div>

            </div>

            {/* NEXT */}

            {currentStep !==
              questions.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="flex shrink-0 items-center gap-2 rounded-lg bg-[#e21b23] px-3 py-3 text-sm font-semibold text-white transition hover:bg-[#c9181f] sm:px-5"
              >
                <span className="hidden sm:inline">
                  Next
                </span>
                <ChevronRight size={18} />
              </button>
            )}

          </div>

          {/* SHOW MATCHED LAPTOPS */}

          <div className="mt-8 flex justify-center">

            <button
              type="button"
              onClick={goToResults}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#e21b23] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#c9181f]"
            >
              <span>
                Show Matched Laptops
                {hasSelection &&
                  ` (${matchedLaptopCount})`}
              </span>

              <ChevronRight size={18} />

            </button>

          </div>

        </div>

      </div>
    </main>
  );
}


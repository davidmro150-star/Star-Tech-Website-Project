"use client";

import { useState } from "react";
import {
  AirVent,
  Check,
  ChevronDown,
  ChevronUp,
  Users,
  Sun,
  Building2,
  Home,
  DoorOpen,
  RotateCcw,
} from "lucide-react";

// =========================================================
// OPTIONS
// =========================================================

const roomSizes = [
  {
    value: "100-143",
    label: "100-143 sf",
    description: "Small room",
    baseBtu: 12000,
  },
  {
    value: "144-180",
    label: "144-180 sf",
    description: "Small to medium room",
    baseBtu: 18000,
  },
  {
    value: "180-225",
    label: "180-225 sf",
    description: "Medium room",
    baseBtu: 18000,
  },
  {
    value: "225-300",
    label: "225-300 sf",
    description: "Large room",
    baseBtu: 24000,
  },
];

const roomPositions = [
  {
    value: "top-floor",
    label: "Top Floor",
    description: "Room directly under the roof",
    adjustment: 1.1,
  },
  {
    value: "other-floor",
    label: "Other Floor",
    description: "Room on a middle/lower floor",
    adjustment: 1,
  },
];

const sunlightOptions = [
  {
    value: "low",
    label: "Low",
    description: "Very little direct sunlight",
    adjustment: 1,
  },
  {
    value: "medium",
    label: "Medium",
    description: "Moderate sunlight during the day",
    adjustment: 1.05,
  },
  {
    value: "high",
    label: "High",
    description: "Strong direct sunlight",
    adjustment: 1.1,
  },
];

const wallTypes = [
  {
    value: "facebrick",
    label: "Facebrick",
    description: "Brick/concrete wall with normal insulation",
    adjustment: 1,
  },
  {
    value: "single-glass",
    label: "Single Layer Glass",
    description: "More heat can enter through the wall/window area",
    adjustment: 1.05,
  },
  {
    value: "double-glass",
    label: "Double Layer Glass",
    description: "Higher heat retention through glass surfaces",
    adjustment: 1.1,
  },
];

const doorWindowOptions = [
  {
    value: "1-door-no-window",
    label: "1 Door, No Window",
    description: "Lowest door/window heat load",
    adjustment: 1,
  },
  {
    value: "1-door-1-window",
    label: "1 Door, 1 Window",
    description: "Normal ventilation and window area",
    adjustment: 1.03,
  },
  {
    value: "1-door-2-windows",
    label: "1 Door, 2 Windows",
    description: "Additional window heat load",
    adjustment: 1.06,
  },
  {
    value: "2-doors-2-windows",
    label: "2 Doors, 2 Windows",
    description: "Higher opening area",
    adjustment: 1.1,
  },
];

const occupants = [
  {
    value: "1",
    label: "1",
    description: "One person",
    adjustment: 0,
  },
  {
    value: "2",
    label: "2",
    description: "Two people",
    adjustment: 600,
  },
  {
    value: "3",
    label: "3",
    description: "Three people",
    adjustment: 1200,
  },
  {
    value: "4",
    label: "4",
    description: "Four people",
    adjustment: 1800,
  },
];

// =========================================================
// HELPER
// =========================================================

function getAdjustment(options, value) {
  return options.find((item) => item.value === value);
}

// =========================================================
// PAGE
// =========================================================

export default function ACTonCalculatore(){
  const [answers, setAnswers] = useState({
    roomSize: "",
    roomPosition: "",
    sunlight: "",
    wallType: "",
    doorsWindows: "",
    occupants: "",
  });

  const [result, setResult] = useState(null);

  const [openSection, setOpenSection] = useState("roomSize");

  // =========================================================
  // HANDLE CHANGE
  // =========================================================

  const handleChange = (key, value) => {
    setAnswers((previous) => ({
      ...previous,
      [key]: value,
    }));

    setResult(null);
  };

  // =========================================================
  // CHECK COMPLETE
  // =========================================================

  const isComplete = Object.values(answers).every(
    (value) => value !== ""
  );

  // =========================================================
  // CALCULATE
  // =========================================================

  const calculateBTU = () => {
    if (!isComplete) return;

    const room = getAdjustment(roomSizes, answers.roomSize);
    const position = getAdjustment(
      roomPositions,
      answers.roomPosition
    );
    const sunlight = getAdjustment(
      sunlightOptions,
      answers.sunlight
    );
    const wall = getAdjustment(
      wallTypes,
      answers.wallType
    );
    const doorsWindows = getAdjustment(
      doorWindowOptions,
      answers.doorsWindows
    );
    const people = getAdjustment(
      occupants,
      answers.occupants
    );

    if (
      !room ||
      !position ||
      !sunlight ||
      !wall ||
      !doorsWindows ||
      !people
    ) {
      return;
    }

    // =========================================================
    // BASE BTU
    // =========================================================

    let calculatedBtu = room.baseBtu;

    // =========================================================
    // ROOM POSITION
    // =========================================================

    if (answers.roomPosition === "top-floor") {
      calculatedBtu += 2000;
    }

    // =========================================================
    // SUNLIGHT
    // =========================================================

    if (answers.sunlight === "medium") {
      calculatedBtu += 1000;
    }

    if (answers.sunlight === "high") {
      calculatedBtu += 2000;
    }

    // =========================================================
    // WALL TYPE
    // =========================================================

    if (answers.wallType === "single-glass") {
      calculatedBtu += 1000;
    }

    if (answers.wallType === "double-glass") {
      calculatedBtu += 2000;
    }

    // =========================================================
    // WINDOWS & DOORS
    // =========================================================

    if (answers.doorsWindows === "1-door-1-window") {
      calculatedBtu += 500;
    }

    if (answers.doorsWindows === "1-door-2-windows") {
      calculatedBtu += 1000;
    }

    if (answers.doorsWindows === "2-doors-2-windows") {
      calculatedBtu += 1500;
    }

    // =========================================================
    // OCCUPANTS
    // =========================================================

    calculatedBtu += people.adjustment;

    // =========================================================
    // RECOMMENDED AC CAPACITY
    // =========================================================

    let recommendedTon;

    if (calculatedBtu <= 12000) {
      recommendedTon = 1;
    } else if (calculatedBtu <= 18000) {
      recommendedTon = 1.5;
    } else if (calculatedBtu <= 24000) {
      recommendedTon = 2;
    } else {
      recommendedTon = 2.5;
    }

    const recommendedBtu = recommendedTon * 12000;

    // =========================================================
    // SAVE RESULT
    // =========================================================

    setResult({
      calculatedBtu: Math.round(calculatedBtu),
      recommendedBtu,
      recommendedTon,
    });

    // =========================================================
    // SCROLL TO RESULT
    // =========================================================

    setTimeout(() => {
      document
        .getElementById("ac-result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  // =========================================================
  // RESET
  // =========================================================

  const resetCalculator = () => {
    setAnswers({
      roomSize: "",
      roomPosition: "",
      sunlight: "",
      wallType: "",
      doorsWindows: "",
      occupants: "",
    });

    setResult(null);

    setOpenSection("roomSize");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // ACCORDION
  // =========================================================

  const toggleSection = (section) => {
    setOpenSection((previous) =>
      previous === section ? "" : section
    );
  };

  // =========================================================
  // RENDER OPTION
  // =========================================================

  const OptionCard = ({
    option,
    selected,
    onClick,
    icon: Icon,
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`w-full rounded-xl border p-4 text-left transition ${selected
            ? "border-[#e21b23] bg-red-50 shadow-sm"
            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
          }`}
      >
        <div className="flex items-start gap-3">

          <div
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected
                ? "border-[#e21b23] bg-[#e21b23]"
                : "border-gray-300 bg-white"
              }`}
          >
            {selected && (
              <Check
                size={13}
                strokeWidth={3}
                className="text-white"
              />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900">
              {option.label}
            </p>

            {option.description && (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {option.description}
              </p>
            )}
          </div>

          {Icon && (
            <Icon
              size={20}
              className={`shrink-0 ${selected
                  ? "text-[#e21b23]"
                  : "text-gray-400"
                }`}
            />
          )}

        </div>
      </button>
    );
  };

  // =========================================================
  // SECTION
  // =========================================================

  const CalculatorSection = ({
    id,
    number,
    title,
    subtitle,
    value,
    options,
    icon: Icon,
    grid = false,
  }) => {
    const isOpen = openSection === id;

    return (
      <div className="border-b border-gray-200 last:border-b-0">

        {/* SECTION HEADER */}

        <button
          type="button"
          onClick={() => toggleSection(id)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-[#e21b23]">
              {number}
            </div>

            <div className="min-w-0">

              <h2 className="text-sm font-bold text-gray-900 sm:text-base">
                {title}
              </h2>

              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                {subtitle}
              </p>

            </div>
          </div>

          {isOpen ? (
            <ChevronUp
              size={20}
              className="shrink-0 text-gray-400"
            />
          ) : (
            <ChevronDown
              size={20}
              className="shrink-0 text-gray-400"
            />
          )}

        </button>

        {/* OPTIONS */}

        {isOpen && (
          <div
            className={`grid gap-3 pb-5 ${grid
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1"
              }`}
          >
            {options.map((option) => (
              <OptionCard
                key={option.value}
                option={option}
                selected={value === option.value}
                onClick={() =>
                  handleChange(id, option.value)
                }
                icon={Icon}
              />
            ))}
          </div>
        )}

      </div>
    );
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

          <div className="text-center">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
              <AirVent
                size={30}
                className="text-[#e21b23]"
              />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              AC Ton Calculator
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Calculate BTU and find the perfect AC Ton
              capacity for your room.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CALCULATOR
      ===================================================== */}

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        <div className="mx-auto max-w-4xl">

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* PROGRESS */}

            <div className="border-b border-gray-200 px-5 py-4 sm:px-8">

              <div className="flex items-center justify-between">

                <p className="text-sm font-semibold text-gray-700">
                  AC Size Calculator
                </p>

                <p className="text-xs text-gray-500">
                  {
                    Object.values(answers).filter(
                      (value) => value !== ""
                    ).length
                  }{" "}
                  / 6 completed
                </p>

              </div>

              <div className="mt-3 h-2 w-full rounded-full bg-gray-100">

                <div
                  className="h-2 rounded-full bg-[#e21b23] transition-all duration-300"
                  style={{
                    width: `${(Object.values(answers).filter(
                      (value) => value !== ""
                    ).length /
                        6) *
                      100
                      }%`,
                  }}
                />

              </div>

            </div>

            {/* QUESTIONS */}

            <div className="px-5 sm:px-8">

              {/* ROOM SIZE */}

              <CalculatorSection
                id="roomSize"
                number="1"
                title="What’s your room size?"
                subtitle="আপনার রুমের সাইজ কত?"
                value={answers.roomSize}
                options={roomSizes}
                icon={Home}
                grid
              />

              {/* ROOM POSITION */}

              <CalculatorSection
                id="roomPosition"
                number="2"
                title="Room position in the building?"
                subtitle="বিল্ডিংয়ে রুমের অবস্থান কোথায়?"
                value={answers.roomPosition}
                options={roomPositions}
                icon={Building2}
                grid
              />

              {/* SUNLIGHT */}

              <CalculatorSection
                id="sunlight"
                number="3"
                title="Exposure to sunlight?"
                subtitle="রুমে সূর্যের আলোর পরিমাণ কেমন?"
                value={answers.sunlight}
                options={sunlightOptions}
                icon={Sun}
                grid
              />

              {/* WALL TYPE */}

              <CalculatorSection
                id="wallType"
                number="4"
                title="Room Wall Type?"
                subtitle="রুমের দেয়ালের ধরণ?"
                value={answers.wallType}
                options={wallTypes}
                icon={Home}
                grid
              />

              {/* WINDOWS / DOORS */}

              <CalculatorSection
                id="doorsWindows"
                number="5"
                title="Windows & Doors?"
                subtitle="রুমে জানালা ও দরজার সংখ্যা?"
                value={answers.doorsWindows}
                options={doorWindowOptions}
                icon={DoorOpen}
                grid
              />

              {/* OCCUPANTS */}

              <CalculatorSection
                id="occupants"
                number="6"
                title="Number of occupants?"
                subtitle="রুমে থাকা ব্যক্তির সংখ্যা কত?"
                value={answers.occupants}
                options={occupants}
                icon={Users}
                grid
              />

            </div>

            {/* CALCULATE */}

            <div className="border-t border-gray-200 px-5 py-5 sm:px-8">

              <button
                type="button"
                onClick={calculateBTU}
                disabled={!isComplete}
                className={`flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition ${isComplete
                    ? "bg-[#e21b23] text-white hover:bg-[#c9181f]"
                    : "cursor-not-allowed bg-gray-100 text-gray-400"
                  }`}
              >
                Calculate
              </button>

              {!isComplete && (
                <p className="mt-3 text-center text-xs text-gray-400">
                  Please select an option from all six sections.
                </p>
              )}

            </div>

          </div>

          {/* =================================================
              RESULT
          ================================================= */}

          {result && (
            <div
              id="ac-result"
              className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm"
            >

              {/* RESULT HEADER */}

              <div className="border-b border-gray-200 px-5 py-5 sm:px-8">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wide text-[#e21b23]">
                      Recommended AC Capacity
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
                      {result.recommendedTon} Ton AC
                    </h2>

                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <AirVent
                      size={25}
                      className="text-[#e21b23]"
                    />
                  </div>

                </div>

              </div>

              {/* RESULT CONTENT */}

              <div className="grid gap-4 px-5 py-5 sm:grid-cols-2 sm:px-8">

                {/* CALCULATED BTU */}

                <div className="rounded-xl bg-gray-50 p-5">

                  <p className="text-xs font-medium text-gray-500">
                    Estimated BTU Requirement
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {result.calculatedBtu.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    BTU/hour
                  </p>

                </div>

                {/* RECOMMENDED BTU */}

                <div className="rounded-xl bg-red-50 p-5">

                  <p className="text-xs font-medium text-gray-500">
                    Recommended Capacity
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#e21b23]">
                    {result.recommendedBtu.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    BTU/hour
                  </p>

                </div>

              </div>

              {/* MESSAGE */}

              <div className="px-5 pb-5 sm:px-8">

                <div className="rounded-lg border border-gray-200 bg-white p-4">

                  <p className="text-sm leading-6 text-gray-600">
                    Based on the room conditions you selected,
                    a{" "}
                    <span className="font-semibold text-gray-900">
                      {result.recommendedTon} Ton
                    </span>{" "}
                    AC is the recommended capacity.
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    This calculator provides an estimate.
                    Actual AC requirements can vary depending
                    on ceiling height, insulation, room usage,
                    building construction, and other conditions.
                  </p>

                </div>

              </div>

              {/* RESET */}

              <div className="border-t border-gray-200 px-5 py-5 sm:px-8">

                <button
                  type="button"
                  onClick={resetCalculator}
                  className="mx-auto flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#e21b23]"
                >
                  <RotateCcw size={16} />

                  Calculate Again
                </button>

              </div>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}
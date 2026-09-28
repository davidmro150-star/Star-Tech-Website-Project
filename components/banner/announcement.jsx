"use client";

export default function Announcement() {
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto w-full max-w-[1400px] px-3">
        <div className="flex items-center overflow-hidden py-2.5">

          {/* ICON */}
          <div className="mr-3 flex shrink-0 items-center">
            <span className="text-sm font-bold text-red-600">
              🔔
            </span>
          </div>

          {/* MOVING TEXT */}
          <div className="relative flex-1 overflow-hidden">
            <div className="announcement-track whitespace-nowrap text-sm text-gray-700 text-bold">
              Monday, 28 September, All our branches are open including
              Savar, Narayanganj & Sylhet Branch. Additionally, our online
              activities are open and operational. Please check our contact
              page for the schedule.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
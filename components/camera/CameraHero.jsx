
"use client";

import Image from "../Image";

export default function CameraHero() {
  return (
    <section className="mb-5 rounded-lg bg-gray-900">
      <div className="grid h-[180px] grid-cols-1 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 sm:px-8 lg:px-10">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-green-400">
              Camera Collection
            </p>

            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Capture Every Moment
            </h1>

            <p className="mt-2 max-w-md text-xs leading-5 text-gray-300 sm:text-sm">
              Explore DSLR, mirrorless, action cameras,
              lenses and camera accessories.
            </p>
          </div>
        </div>

        {/* RIGHT CAMERA IMAGE */}
        <div className="relative flex h-[180px] items-center justify-center bg-gray-800 px-6">
  
          <Image
            src="https://www.pngkit.com/png/detail/500-5007804_camera.png"
            alt="Professional camera"
            width={580}
            height={360}
            className="h-full w-full object-contain"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

      </div>
    </section>
  );
}


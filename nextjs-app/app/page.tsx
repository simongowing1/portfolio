import { Suspense } from "react";

import { AllProjects } from "@/app/components/global/Projects";

export default async function Page() {
  return (
    <>
      <div className="h-avail bg-gradient-to-r from-red-200 from-0% via-white via-40%  relative">
        <div className="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <div className="relative h-full">
          <div className="h-full mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center flex items-center justify-center">
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>
                This starter is a statically generated site that uses Next.js
                for the frontend and Sanity to handle its content. It comes with
                a standalone Sanity Studio that offers features like real-time
                collaboration, instant side-by-side content previews, and
                intuitive editing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-10">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllProjects()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}

import { Suspense } from "react";

import { AllProjects } from "@/app/components/project/Projects";

export default async function Page() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-red-200 from-0% via-white via-40% relative">
        <div className="bg-gradient-to-b from-white w-full h-64 absolute top-0"></div>
        <div className="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"></div>
        <div className="relative h-full">
          <div className="h-full mx-auto max-w-2xl py-20 lg:max-w-4xl lg:px-12 text-center flex items-center justify-center">
            <div className="container py-6 sm:px-6">
            <div className="mt-6 space-y-6 prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700">
              <p>I am a creative-minded frontend developer with a passion for building customer-focused, humane products. My love for working with others and learning new skills is rooted in 10 years of cross-functional team-leadership and stakeholder collaboration in the visual arts.</p>
              <p>With a strong foundation in modern web technologies and a creative approach to problem-solving, I thrive at delivering innovative, human-centered solutions.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-10">
            <Suspense>{await AllProjects()}</Suspense>
      </div>
    </>
  );
}

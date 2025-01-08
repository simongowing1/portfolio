import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import { moreProjectsQuery, allProjectsQuery } from "@/sanity/lib/queries";
import { Project as ProjectType } from "@/sanity.types";
import OnBoarding from "@/app/components/global/Onboarding";
import SanityImage from "./SanityImage";

const Project = ({ project }: { project: ProjectType }) => {
  const { _id, title, slug, excerpt, date, coverImage } = project;

  return (
    <div className="w-full h-avail">
      <SanityImage image={coverImage} layout='responsive' wrapperClassName="h-full" priority />
    </div>
  );
};

const Projects = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    {heading && (
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="mt-6 pt-6 space-y-12 border-t border-gray-200">
      {children}
    </div>
  </div>
);

export const MoreProjects = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: moreProjectsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Projects heading={`Recent Projects (${data?.length})`}>
      {data?.map((project: any) => <Project key={project._id} project={project} />)}
    </Projects>
  );
};

export const AllProjects = async () => {
  const { data } = await sanityFetch({ query: allProjectsQuery });

  if (!data || data.length === 0) {
    return <OnBoarding />;
  }

  return (
    <Projects
      heading="Recent Projects"
      subHeading={`${data.length === 1 ? "This project is" : `These ${data.length} projects are`} populated from your Sanity Studio.`}
    >
      {data.map((project: any) => (
        <Project key={project._id} project={project} />
      ))}
    </Projects>
  );
};

import { sanityFetch } from "@/sanity/lib/live";
import { moreProjectsQuery, allProjectsQuery } from "@/sanity/lib/queries";
import OnBoarding from "@/app/components/global/Onboarding";
import Project from "./Project";
import { isNotFinalIndex } from "@/utils/helpers/arrayHelpers";

const Projects = ({
  children,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
    <div id={'project-target'} className="">
      {children}
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
      {data?.map((project: any) => <Project key={project._id} project={project}/>)}
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
    >
      {data.map((project: any, index: number) => (
        <div key={index}>
          <Project key={project._id} project={project} isNotFinalProjectInArray={isNotFinalIndex(data, index)}/>
        </div>
      ))}
    </Projects>
  );
};

import { sanityFetch } from "@/sanity/lib/live";
import { moreProjectsQuery, allProjectsQuery } from "@/sanity/lib/queries";
import Project from "./Project";
import { isNotFinalIndex } from "@/utils/helpers/arrayHelpers";
import NotFound from "@/app/not-found";
import { Projects } from "./Projects";



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
    return <NotFound />;
  }

  return (
    <Projects
      heading="Recent Projects"
    >
      {data.map((project: any, index: number) => (
        <Project key={project._id} project={project} isNotFinalProjectInArray={isNotFinalIndex(data, index)} />
      ))}
    </Projects>
  );
};

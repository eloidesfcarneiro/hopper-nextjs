import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import { ProjetoProps, IProjetos } from "../components/ProjectItem";
import { API_URL } from "../config";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function EventPage(project:IProjetos) {
  const router = useRouter();
  return (
    <Layout>
      <h1>{project.name}</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push("/")}>HomePage</button>
    </Layout>
  );
}

export async function getStaticPaths() {

  const res = await fetch(`${API_URL}/api/projects`);
  const projects = await res.json();

  const paths = projects.map((ps:any) => ({
    params : {slug: ps.slug },
  }))

  return {
    paths,
    fallback: true,
  }
  
}

export async function getStaticProps ({params: {slug}}: any) {
  const res = await fetch(`${API_URL}/api/projects/${slug}`);
  const projects = await res.json();

  return {
    props: {
      project: projects[0]
    },
    revalidate: 1
  };
};



// export const getServerSideProps : GetServerSideProps = async (context) => {
//   const { slug } = context.params as IParams; // no longer causes error
//   const res = await fetch(`${API_URL}/api/projects/${slug}`);
//   const projects = await res.json();

//   return {
//     props: {
//       project: projects[0]
//     },
//   };
// };

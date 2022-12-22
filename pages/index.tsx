import { GetStaticProps } from "next";
import Layout from "./components/Layout";
import ProjectItem from "./components/ProjectItem";
import { API_URL } from "./config";
import {IProjetos, ProjetoProps} from "./components/ProjectItem"
import Link from "next/link";
import { apolloClient } from "./apolloClient.ts/apolloClient";
import { gql } from '@apollo/client';

export default function EventsPage({projetos} : ProjetoProps ) {
  return (
    <Layout>
      <h1>Projetos </h1>
      {projetos.length === 0 && <h3>No events to show</h3>}

     {projetos.map((ps) => (
      <ProjectItem name={ps.name} slug={ps.slug} stack={ps.stack} image={ps.image} description={ps.description}></ProjectItem> 
     ))}
     {projetos.length > 0 && (
      <Link href='/projects'>
        <div className="btn-secondary">Veja Todos Projetos</div>
      </Link>
     )}
    </Layout>
  );
}

export const getStaticProps : GetStaticProps<ProjetoProps> = async () => {
  const result = await fetch (`${API_URL}/api/projects`)
  const projects = await result.json()
  console.log(projects);
  // const projetos : ProjetoProps  = result.data.projetos.data.map(
  //   ({attibutes: {name,slug, stack, image: {data: {attibutes: {url : image}}}, description} }  : any) => 
  //   ({
  //   name: {name},
  //   slug: {slug},
  //   stack: {stack},
  //   image: {image},
  //   description: {description},})
  // )

  return {
    props: {
      projetos: projects
    },
    revalidate: 1,
  };
};

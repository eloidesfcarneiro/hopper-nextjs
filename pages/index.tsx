import { GetStaticProps } from "next";
import Layout from "./components/Layout";
import ProjectItem from "./components/ProjectItem";
import { API_URL } from "./config";
import {IProjetos, ProjetoProps} from "./components/ProjectItem"
import Link from "next/link";

export default function EventsPage({projetos} : ProjetoProps ) {
  console.log(projetos)
  return (
    <Layout>
      <h1>Projetos </h1>
      {projetos.length === 0 && <h3>No events to show</h3>}

     {projetos.map((ps) => (
      <ProjectItem id={ps.id} name={ps.name} slug={ps.slug} stack={ps.stack} image={ps.image} description={ps.description}></ProjectItem> 
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
  const response = await fetch(`${API_URL}/api/projects`);
  const projetos = await response.json()

  return {
    props: {projetos:projetos.slice(0,3)},
    revalidate: 1,
  };
};

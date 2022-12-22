import Link from "next/link";
import Image from "next/image";

export type IProjetos = {
  name: string;
  slug: string;
  stack: string;
  image: string;
  description: string;
};

export type ProjetoProps = {
  projetos: IProjetos[];
};

export default function ProjectItem(projeto: IProjetos) {
  return (
    <div className="event">
      <div className="img">
        <Image
          src={projeto.image ? projeto.image : "/images/event-default.png"}
          width={170}
          height={100}
          alt={""}
        ></Image>
      </div>

      <div className="info">
        <span>{projeto.stack}</span>
        <h3>{projeto.name}</h3>
      </div>

      <div className="link">
        <Link href={`/projects/${projeto.slug}`}>
          <div className="btn">Details</div>
        </Link>
      </div>

      <style jsx>
        {`
          .event {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
            padding: 13px;
            box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
          }

          .img {
            flex: 1;
            margin: 10px;
          }

          .info {
            flex: 2;
          }

          @media (max-width: 600px) {
            .event {
              flex-direction: column;
              text-align: center;
            }

            .info {
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}

import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"

// Required props
interface ChildrenProps {
  children: ReactNode;
}

// Optional props
interface HeadProps {
  title?: string;
  keywords?: string;
  description?: string;
}

// Combine required and optional props to build the full prop interface
interface LayoutProps extends ChildrenProps, HeadProps {}

// Use the optional prop interface to define the default props
const defaultProps: HeadProps = {
  title: "DJ Eventes | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};

// Use the full props within the actual component
const Layout = (props: LayoutProps) => {
  const { title, keywords, description, children } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header></Header>

      <div className="container">{children}</div>

      <Footer />

      <style jsx>{`
        .container {
          margin: 60px auto;
          max-width: 960px;
          padding: 0 30px;
        }
      `}</style>
    </div>
  );
};

Layout.defaultProps = defaultProps;

export default Layout;

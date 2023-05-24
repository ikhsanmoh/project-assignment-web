import { memo } from "react";
import Head from "next/head";

// Types
import type { NextPage } from "next";
import { Header } from "@components/organisms";
import { Container } from "@mui/material";

export interface BaseLayoutProps {
  title?: string;
  description?: string;
  content?: string;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line react/display-name
export const BaseLayout: NextPage<BaseLayoutProps> = memo((props) => {
  const { title = "Pokemon", description, content, icon, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name={description ?? "Kunci Dashboard"}
          content={content ?? "Kunci Dashboard"}
        />
        <link rel="icon" href={icon ?? "/favicon.ico"} />
      </Head>
      <main>
        <Container maxWidth="lg">
          <Header />
        </Container>

        {children}
      </main>
    </>
  );
});

import type { FC } from "react";
import useTranslation from "next-translate/useTranslation";

// Components
import { BaseLayout } from "@components/layouts";

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa
      aperiam nisi? Dolore laboriosam at natus maxime odit. Non corporis
      voluptatibus debitis temporibus earum voluptatum obcaecati amet sed quo
      repellat!
    </BaseLayout>
  );
};

export default Home;

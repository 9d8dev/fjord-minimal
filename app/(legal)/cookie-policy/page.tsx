"use client";

import * as Craft from "@/components/craft";
import Content from "@/content/terms-of-service.mdx";

const Cookies = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <Craft.Article>
          <Content />
        </Craft.Article>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Cookies;

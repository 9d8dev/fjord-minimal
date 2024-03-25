import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <h1>
            <Balancer>
              Fjord Minimal :: Headless Wordpress built with Next.js, Tailwind,
              Shadcn/ui, and Craft.
            </Balancer>
          </h1>
          <p>
            Craft was created by <a href="https://bridger.to">Bridger</a> and{" "}
            <a href="https://cameron.so">Cameron</a> at{" "}
            <a href="https://9d8.dev">9d8</a> and{" "}
            <a href="https://alpinecodex.com">Alpine Codex</a>.
          </p>
          <p>
            Fjord is built around the idea of a headless WordPress backend with
            a NextJS frontend. It makes use of the WordPress REST API to fetch
            data and NextJS to render the frontend.
          </p>
          <p>
            Get started by cloning the{" "}
            <a href="https://github.com/9d8dev/fjord-minimal">
              GitHub repository
            </a>{" "}
            today.
          </p>
          <h2 className="text-medium">Key Features</h2>
          <ul>
            <li>
              Automatic typographic styling using a modified version of Tailwind
              Typography
            </li>
            <li>Components and design system by Craft UI and shadcn/ui</li>
            <li>Cached articles and revalidation via Next.js</li>
          </ul>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}

import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import RecentPosts from "@/components/global/recent-posts";

export default function Home() {
  return (
    <Main>
      <ExampleJsx />
      <RecentPosts />
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <Section>
      <Container>
        <h1>
          <Balancer>
            Fjord Minimal is a Headless Wordpress Starter built with Next.js,
            TypeScript, Tailwind, shadcn/ui, and brijr/craft
          </Balancer>
        </h1>
        <p>
          Craft was created by <a href="https://bridger.to">Bridger</a> and{" "}
          <a href="https://cameron.so">Cameron</a> at{" "}
          <a href="https://9d8.dev">9d8</a> and{" "}
          <a href="https://alpinecodex.com">Alpine Codex</a>.
        </p>
        <p>
          Fjord is built around the idea of a headless WordPress backend with a
          NextJS frontend. It makes use of the WordPress REST API to fetch data
          and NextJS to render the frontend.
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
      </Container>
    </Section>
  );
};

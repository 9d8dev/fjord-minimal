import fjord from "@/fjord.config";
import Link from "next/link";
import * as Craft from "@/components/craft";
import { Metadata } from "next";
import { fetchPages } from "@/lib/data";

const metadata: Metadata = {
  title: `All Pages | ${fjord.site_name}`,
  description: `All pages from ${fjord.site_name}. ${fjord.site_description}`,
};

export default async function Pages() {
  let data;
  try {
    data = await fetchPages();
  } catch (error) {
    console.error(error);
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container className="space-y-6">
          {data.map((page: PageProps) => (
            <Link
              href={`/${page.slug}`}
              className="not-prose hover:bg-secondary flex flex-col gap-2 rounded-r-lg hover:rounded-lg border-l-2 p-4 transition-all"
              key={page.id}
            >
              <div className="flex items-baseline gap-2">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: page.title.rendered,
                  }}
                ></h3>
                <p className="text-base opacity-75">
                  date: {new Date(page.date).toLocaleDateString()}
                </p>
              </div>
              <p
                className="text-base opacity-75"
                dangerouslySetInnerHTML={{
                  __html: page.excerpt.rendered,
                }}
              />
            </Link>
          ))}
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}

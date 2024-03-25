// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import * as Craft from "@/components/craft";
import PostCard from "@/components/content/post-card";
import ContentGrid from "@/components/content/content-grid";
import PaginationWrapper from "@/components/content/pagination-wrapper";
import { Separator } from "@/components/ui/separator";

// Next Imports
import type { Metadata } from "next";

// Data Imports
import { fetchTags, fetchPosts } from "@/lib/data";

// Meta Data
export const metadata: Metadata = {
  title: `Blog | ${fjord.site_name}`,
  description: `Read the ${fjord.site_name} blog. ${fjord.site_description}`,
};

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" && +searchParams.page > 1
      ? +searchParams.page
      : 1;
  const offset = (page - 1) * fjord.posts_per_page;
  const { data, totalPosts } = await fetchPosts(fjord.posts_per_page, offset);
  const lastPage = Math.ceil(totalPosts / fjord.posts_per_page);
  const tags = await fetchTags();

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <ContentGrid id="posts">
            {data.map((post: PostProps) => (
              <PostCard
                key={post.id}
                post={post}
                tags={post._embedded["wp:term"]?.[0] ?? []}
              />
            ))}
          </ContentGrid>
          <Separator className="my-6 md:my-12" />
          <PaginationWrapper page={page} lastPage={lastPage} />
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}

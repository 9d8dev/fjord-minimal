import { Section, Container } from "@/components/craft";
import PostCard from "@/components/content/post-card";
import fjord from "@/fjord.config";
import { fetchPosts } from "@/lib/data";

export default async function RecentPosts({
  className,
  excludeId,
}: {
  className?: string;
  excludeId?: number;
}) {
  const posts = await fetchPosts(4, 0);

  // Filter out the post with the given ID and limit to three posts
  const filteredPosts = posts.data
    .filter((post: PostProps) => post.id !== excludeId)
    .slice(0, 3);

  return (
    <Section className="border-t prose-headings:m-0">
      <Container className="flex flex-col gap-6">
        <h2>
          Catch up on the latest guides and resources from {fjord.site_name}
        </h2>
        <h4 className="text-muted-foreground">
          Read the latest from our blog.
        </h4>
        <div className="m-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12">
          {filteredPosts.map((post: PostProps) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

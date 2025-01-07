import { notFound } from "next/navigation";
import { getBlogPosts } from "../../lib/posts";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const posts = getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}

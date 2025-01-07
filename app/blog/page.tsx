import Link from "next/link";
import { getBlogPosts } from "../lib/posts";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <p>{post.publishedAt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

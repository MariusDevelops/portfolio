import fs from "fs";
import path from "path";

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  content: string;
};

function readPost(filePath: string): Post {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const [, frontmatter, content] =
    fileContent.match(/---\s*([\s\S]*?)\s*---\s*([\s\S]*)/) || [];

  const metadata = Object.fromEntries(
    frontmatter.split("\n").map((line) => {
      const [key, ...value] = line.split(": ");
      return [key.trim(), value.join(": ").trim()];
    })
  );

  const slug = path.basename(filePath, path.extname(filePath));
  return {
    slug,
    title: metadata.title,
    publishedAt: metadata.publishedAt,
    summary: metadata.summary,
    content,
  };
}

export function getBlogPosts(): Post[] {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  return files.map((file) => readPost(path.join(contentDir, file)));
}

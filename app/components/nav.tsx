import Link from "next/link";

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            Portfolio
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <Link
            href="/blog"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            Projects
          </Link>
          <Link
            href="/photos"
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            Photos
          </Link>
        </div>
      </div>
    </nav>
  );
}

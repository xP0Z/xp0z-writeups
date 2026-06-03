import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/posts');

export function getWriteupSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md'));
}

export function getWriteupBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content
  };
}

export function getWriteupsByEvent(eventName) {
  const slugs = getWriteupSlugs();
  const writeups = slugs
    .map((slug) => getWriteupBySlug(slug))
    .filter((writeup) => writeup.meta.event === eventName)
    // sort by date or title, currently they don't have dates in frontmatter, so just sort by title
    .sort((a, b) => (a.meta.title > b.meta.title ? 1 : -1));
  return writeups;
}

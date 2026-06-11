import { getWriteupBySlug, getWriteupsByEvent } from '../../../lib/markdown';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Header from '../../../components/Header';
import Contact from '../../../components/Contact';
import CurveFooter from '../../../components/CurveFooter';
import styles from './style.module.scss';
import Link from 'next/link';
import ScrollInit from '../../../components/ScrollInit';

export function generateStaticParams() {
  const writeups = getWriteupsByEvent("DalCTF");
  return writeups.map((writeup) => ({
    slug: writeup.slug,
  }));
}

export default async function WriteupPage({ params }) {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);

  if (!writeup) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <ScrollInit />
      <Header />
      <div className={styles.pageContent}>
        <div className={styles.container}>
          <Link href="/dal-ctf" className={styles.backButton}>
            &larr; Back to Writeups
          </Link>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1>{writeup.meta.title}</h1>
            </header>
            <div className={styles.markdownBody}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {writeup.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
          <CurveFooter />

      </div>

      <Contact />
    </main>
  );
}

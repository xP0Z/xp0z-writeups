import { getWriteupBySlug } from '../../../lib/markdown';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Header from '../../../components/Header';
import Contact from '../../../components/Contact';
import CurveFooter from '../../../components/CurveFooter';
import styles from './style.module.scss';
import Link from 'next/link';

export default async function WriteupPage({ params }) {
  const { slug } = await params;
  const writeup = getWriteupBySlug(slug);

  if (!writeup) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.pageContent}>
        <div className={styles.container}>
          <Link href="/ramunchers-ctf" className={styles.backButton}>
            &larr; Back to Writeups
          </Link>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1>{writeup.meta.title}</h1>
              {writeup.meta.date && <time>{writeup.meta.date}</time>}
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

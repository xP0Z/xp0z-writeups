import { getWriteupsByEvent } from '../../lib/markdown';
import RamunchersClient from './ClientPage';

export default function RamunchersCtf() {
  const writeups = getWriteupsByEvent("RAMunchers CTF");
  return <RamunchersClient writeups={writeups} />;
}

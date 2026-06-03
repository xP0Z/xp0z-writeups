import { getWriteupsByEvent } from '../../lib/markdown';
import CitCtfClient from './ClientPage';

export default function CitCtf() {
  const writeups = getWriteupsByEvent("CIT@CTF");
  return <CitCtfClient writeups={writeups} />;
}

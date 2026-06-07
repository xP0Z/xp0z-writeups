import { getWriteupsByEvent } from '../../lib/markdown';
import CitCtfClient from './ClientPage';

export default function CITCTF() {
  const writeups = getWriteupsByEvent("DalCTF");
  return <CitCtfClient writeups={writeups} eventName="DalCTF" />;
}

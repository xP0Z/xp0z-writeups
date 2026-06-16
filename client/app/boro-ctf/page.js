import { getWriteupsByEvent } from '../../lib/markdown';
import BoroCtfClient from './ClientPage';

export default function BoroCTF() {
  const writeups = getWriteupsByEvent("boroCTF").reverse();
  return <BoroCtfClient writeups={writeups} eventName="boroCTF" />;
}

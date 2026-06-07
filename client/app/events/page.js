import EventsClient from './ClientPage';

export default function Events() {
  const eventsList = [
    { title: "DalCTF", path: "/dal-ctf" },
    { title: "CIT@CTF", path: "/cit-ctf" },
    { title: "Ramunchers CTF", path: "/ramunchers-ctf" }
  ];
  return <EventsClient events={eventsList} />;
}

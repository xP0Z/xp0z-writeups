import EventsClient from './ClientPage';

export default function Events() {
  const eventsList = [
    { title: "CIT@CTF", path: "/cit-ctf" },
    { title: "Ramunchers CTF", path: "/ramunchers-ctf" },
    { title: "DalCTF", path: "/dal-ctf" }
  ];
  return <EventsClient events={eventsList} />;
}

import type { Band } from "@prisma/client";

export const metadata = {
  title: "Bands",
};

export default async function BandsIndexPage() {
  // server side fetch from api
  // alternative use prisma.band.findMany() directly
  const response = await fetch("http://localhost:3000/api/bands");
  const payload = await response.json();
  const bands = payload.bands;
  console.log(bands);

  return (
    <>
      <h1>Bands {bands.length}</h1>
      <ul>
        {bands.map((band: Band) => (
          <li key={band.id}>
            <a href={`/bands/${band.id}`}>{band.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

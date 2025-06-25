import Link from "next/link";

export default function Home() {
  const books = [
    {
      id: 2,
      name: "হিমু মামা",
      link: "Himu-Mama",
    },
    {
      id: 3,
      name: "হিমুর বাবার কথামালা",
      link: "Himur-Babar-Kothamala",
    },
    {
      id: 4,
      name: "হিমুর একান্ত সাক্ষাৎকার",
      link: "Himur-Ekanto-Sakkhatkar",
    },
    {
      id: 4,
      name: "হিমু সমগ্র ১",
      link: "Himu-Somogro-1",
    },
    {
      id: 5,
      name: "হিমু সমগ্র 2",
      link: "Himu-Somogro-2",
    },
    {
      id: 5,
      name: "পেঞ্ছিলে আকা পরী",
      link: "Pencile-Aka-Pori",
    },
    {
      id: 6,
      name: "বেলা ফুরাবার আগে",
      link: "Bela-Furabar-Age",
    },
    {
      id: 7,
      name: "এটমিক হ্যাবিটস",
      link: "ATHB",
    },
  ];
  return (
    <main className="pt-20">
      <div className="head text-center">
        <h1 className="text-4xl font-bold">বই পড়ুন মন সুস্থ রাখতে।</h1>
      </div>
      <div className="books grid grid-cols-4 gap-5 py-10">
        {books.map(({ name, id, link }) => {
          return (
            <Link href={`/book/${link}`} key={id}>
              <div className="book border-2 rounded-lg p-5 hover:border-green-700">
                <h1>{name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

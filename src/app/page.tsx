"use client";
import Link from "next/link";

type Article = {
  title: string;
  url: string;
};

export default function Home() {
  const articles: Article[] = [
    {
      title: "Rapport - tp-1",
      url: "/tp-1",
    },
    {
      title: "Rapport - tp-2",
      url: "/tp-2",
    },
    {
      title: " Root.me - HtmlCanStopYou",
      url: "/html-can-stop-you",
    },
    {
      title: "Root.me - Javascript Authentification",
      url: "/javascript-authentification",
    },
    {
      title: "Root.me - Javascript Native",
      url: "/javascript-native",
    },
    {
      title: "Root.me - Javascript Source",
      url: "/javascript-source",
    },
    {
      title: "Root.me - Authentification",
      url: "/authentification",
    },
    {
      title: "Root.me - Obfuscation 1",
      url: "/obfuscation-1",
    },
    {
      title: "Root.me - Obfuscation 2",
      url: "/obfuscation-2",
    },
    {
      title: "Root.me - Webpack",
      url: "/webpack",
    },
    {
      title: "Attaque - Solarwinds",
      url: "/solarwinds",
    },
    {
      title: "Attaque - Wannacry",
      url: "/wannacry",
    },
    {
      title: "Attaque - Target (2013)",
      url: "/target-2013",
    },
    {
      title: "Attaque - Log4Shell",
      url: "/log4shell",
    },
    {
      title: "Attaque - NotPetya",
      url: "/notpetya",
    },
    {
      title: "Groups - ATP28(FancyBear)",
      url: "/fancy-bear",
    },
    {
      title: "Groups - $Lapsus",
      url: "/lapsus",
    },
    {
      title: "Groups - Lazarus Group",
      url: "/lazarus-group",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">
              Mon Blog Cyber - Louan FLAMAIN
            </h1>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-4 py-6">
          <article className="bg-white rounded-xl shadow p-6 mb-6 scale-105">
            <h2 className="text-2xl font-semibold">Lien des annexes</h2>
            <p className="text-sm mt-2 flex flex-col gap-3 text-blue-400">
              <Link
                className="hover:underline"
                href="https://docs.google.com/spreadsheets/d/1kpLEOa0nsPSjY3GmCmJDFjDooo5bU4j9HLnhy7hqImo/edit?usp=sharing"
              >
                Speadsheet Attaques
              </Link>
              <Link
                className="hover:underline"
                href="https://docs.google.com/spreadsheets/d/1Kr2Iz_iPr_y4h__SgpIBqrOBG03Kw4kjDTYoi68Bp0c/edit?usp=sharing"
              >
                Speadsheet Root.me
              </Link>
            </p>
          </article>
          {articles.map((article, index) => (
            <Link key={index} href={`/article/${article.url}`}>
              <article className="bg-white rounded-xl shadow p-6 mb-6 hover:shadow-md transition cursor-pointer scale-105 duration-75 relative">
                <h2 className="text-2xl font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-400 mt-2">
                  Créé le{" "}
                  {new Date().toLocaleDateString("fr-FR", {
                    weekday: "long", // jeudi
                    year: "numeric", // 2025
                    month: "long", // juillet
                    day: "numeric", // 3
                  })}
                </p>
              </article>
            </Link>
          ))}
        </section>

        <footer className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} Mon Blog.
        </footer>
      </main>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function WebpackArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧠 Présentation du challenge",
        content:
          "Ce challenge Web Client basé sur Webpack repose sur une analyse de structure de projet côté navigateur. Le flag est caché dans un des fichiers JavaScript générés par Webpack, mais reste accessible en observant la logique des dossiers.",
        items: [
          {
            title: "Nom du challenge",
            description: "WEBPACK – Catégorie Web Client",
          },
          {
            title: "Objectif",
            description:
              "Remonter la structure des fichiers compilés pour retrouver le flag caché dans un fichier JS.",
          },
          {
            title: "Point de départ",
            description:
              "Une image affichée sur la page, hébergée dans un sous-dossier.",
          },
        ],
      },
      {
        heading: "🔍 Méthodologie utilisée",
        content:
          "En analysant l'URL de l'image, on pouvait remonter jusqu'à la racine de l'architecture Webpack, puis accéder aux fichiers JS en clair dans le dossier `/js/`. Le flag était dissimulé dans l’un de ces fichiers.",
        items: [
          {
            title: "Étape 1 – Analyse de l'URL",
            description:
              "L’image pointait vers `/static/media/image.png`, ce qui a permis de remonter au dossier `/static/`.",
          },
          {
            title: "Étape 2 – Exploration des fichiers JS",
            description:
              "Dans le dossier `/static/js/`, plusieurs fichiers minifiés étaient présents. En les ouvrant un par un, on pouvait inspecter le contenu dans l’inspecteur ou via un éditeur.",
          },
          {
            title: "Étape 3 – Recherche du flag",
            description:
              "Le flag se trouvait caché dans une chaîne de caractères, souvent perdue au milieu d'une fonction. Il fallait bien observer chaque bloc de code.",
          },
        ],
      },
      {
        heading: "📚 Retours d'expérience",
        content:
          "Ce challenge démontre qu'une compilation Webpack ne garantit pas la confidentialité. Si les fichiers sont accessibles publiquement, le code peut toujours être fouillé et déchiffré.",
        items: [
          {
            title: "Protection faible",
            description:
              "Même minifié, un fichier JS peut être lu. Il est essentiel d’éviter de stocker des informations sensibles côté client.",
          },
          {
            title: "Reflexe CTF",
            description:
              "Toujours explorer la hiérarchie des dossiers : `/static/`, `/js/`, `/assets/` sont souvent des points d’entrée.",
          },
          {
            title: "Apprentissage",
            description:
              "Une bonne compréhension des outils de build comme Webpack permet de mieux repérer ces failles.",
          },
        ],
      },
    ]);
  }, []);

  if (!data) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">
          WEBPACK – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Exploration de la structure Webpack pour retrouver un flag caché.
        </p>

        {/* Image 1 : URL de l’image utilisée */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/webpack/pic-1.png" // ← à remplacer
            alt="Image source utilisée dans la page"
            fill
            className="object-contain"
          />
        </div>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 text-gray-700">{section.content}</p>
            <ul className="space-y-4">
              {section.items.map((item, j) => (
                <li
                  key={j}
                  className="bg-white shadow rounded p-4 border-l-4 border-blue-500"
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </li>
              ))}
            </ul>

            {/* Image 2 : Vue du dossier JS */}
            {i === 1 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/webpack/pic-2.png" // ← à remplacer
                  alt="Exploration du dossier JS"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Image 3 : flag repéré dans le code */}
            {i === 2 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/webpack/pic-3.png" // ← à remplacer
                  alt="Flag trouvé dans le code JavaScript"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </section>
        ))}

        <footer className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mon Blog.
        </footer>
      </div>
    </main>
  );
}

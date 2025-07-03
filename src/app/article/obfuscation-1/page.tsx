"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function Obfuscation1() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧠 Présentation du challenge",
        content:
          "Ce challenge de la catégorie Web Client, intitulé 'Obfuscation 1', visait à tester notre capacité à reconnaître des chaînes encodées de manière trompeuse dans du JavaScript. Le but était de retrouver un mot de passe caché dans le code source.",
        items: [
          {
            title: "Nom du challenge",
            description: "OBFUSCATION 1 – Web Client",
          },
          {
            title: "But du challenge",
            description:
              "Décoder un mot de passe masqué via des séquences d’échappement JavaScript.",
          },
          {
            title: "Difficulté estimée",
            description:
              "Moyenne – il fallait comprendre le format d’encodage et le décoder correctement.",
          },
        ],
      },
      {
        heading: "🔍 Analyse du JavaScript",
        content:
          "Dans le fichier JavaScript lié à la page, une variable contenait une chaîne étrange, sous forme d’échappements : `%4A%61%76%61%53%63%72%69%70%74`. Ce format correspond à de l’**URL encoding** (ou encodage web).",
        items: [
          {
            title: "Étape 1 – Repérage de la chaîne",
            description:
              'La chaîne était stockée dans une variable comme `var password = "%4A%61%76..."`.',
          },
          {
            title: "Étape 2 – Déchiffrement",
            description:
              "J’ai utilisé la fonction `decodeURIComponent()` dans la console du navigateur pour décoder la chaîne en texte lisible.",
          },
          {
            title: "Résultat obtenu",
            description:
              "Après décodage, j’ai obtenu un mot de passe clair en UTF-8 (ex. : `JavaScript`).",
          },
        ],
      },
      {
        heading: "🧠 Leçons retenues",
        content:
          "Ce challenge montre à quel point une simple obfuscation peut ralentir une analyse, mais qu’un attaquant (ou un pentester) connaissant les outils peut très facilement contourner ce genre de protection.",
        items: [
          {
            title: "Obfuscation ≠ Sécurité",
            description:
              "Encoder une chaîne ne signifie pas la sécuriser. Toute obfuscation côté client est réversible.",
          },
          {
            title: "Outils utiles",
            description:
              "La console JavaScript et les fonctions natives comme `decodeURIComponent()` sont très efficaces pour analyser du code encodé.",
          },
          {
            title: "Bon réflexe",
            description:
              "Dès qu’un mot de passe semble 'caché', tester les formats comme base64, URL encoding, hex, etc.",
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
          OBFUSCATION 1 – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Challenge basé sur le décodage manuel d’une chaîne encodée dans un
          fichier JavaScript visible côté client.
        </p>

        {/* Image 1 : chaîne obfusquée visible dans le JS */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/obfuscation1/pic-1.png" // ← à remplacer
            alt="Chaîne obfusquée dans le fichier JS"
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

            {/* Image 2 : résultat du décodage */}
            {i === 1 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/obfuscation1/pic-2.png" // ← à remplacer
                  alt="Résultat du décodage dans la console"
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

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function Obfuscation2() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧠 Présentation du challenge",
        content:
          "Le challenge 'Obfuscation 2' sur Root.me va plus loin que le précédent. Le mot de passe est d'abord encodé en échappement web (ex. `%36%39`), puis transformé en codes ASCII via `String.fromCharCode`. Le but est de reconstituer manuellement la chaîne d'origine.",
        items: [
          {
            title: "Nom du challenge",
            description: "OBFUSCATION 2 – Web Client",
          },
          {
            title: "Objectif",
            description:
              "Identifier et décoder une double obfuscation dans le code JavaScript pour retrouver le mot de passe.",
          },
          {
            title: "Technique utilisée",
            description:
              "Combinaison de `decodeURIComponent()` et `String.fromCharCode()`.",
          },
        ],
      },
      {
        heading: "🔍 Étapes de décodage",
        content:
          "L’analyse du fichier JavaScript montrait une variable contenant une chaîne encodée, suivie d’un traitement par `decodeURIComponent`, puis d’une conversion en caractères avec `fromCharCode`.",
        items: [
          {
            title: "Étape 1 – Décodage URL",
            description:
              "La chaîne `%36%39%2C%37%32%2C%37%31` devient `69,72,71` après `decodeURIComponent()`.",
          },
          {
            title: "Étape 2 – Conversion ASCII",
            description:
              "Avec `String.fromCharCode(69, 72, 71)` on obtient par exemple `EHG`, le mot de passe attendu.",
          },
          {
            title: "Validation",
            description:
              "Après avoir copié ce mot de passe dans le formulaire, le challenge était résolu.",
          },
        ],
      },
      {
        heading: "📚 Conclusion",
        content:
          "Même avec plusieurs niveaux d’encodage, ce type de protection ne résiste pas à une analyse attentive du JavaScript. Ce challenge renforce l’importance de ne jamais traiter de logique de sécurité uniquement côté client.",
        items: [
          {
            title: "Stack d'obfuscation",
            description:
              "Combiner plusieurs techniques ralentit le reverse engineering mais reste vulnérable sans chiffrement réel.",
          },
          {
            title: "Outils efficaces",
            description:
              "Navigateur + console + fonctions natives JS = combo suffisant pour décoder la plupart de ces protections.",
          },
          {
            title: "À éviter côté dev",
            description:
              "Stocker un mot de passe dans une variable visible côté client n’est jamais une bonne pratique.",
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
          OBFUSCATION 2 – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Challenge avec double encodage dans du JavaScript : échappement web +
          transformation en charCode.
        </p>

        {/* Image 1 – vue du code JavaScript avec l’encodage */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/obfuscation2/pic-1.png" // ← à remplacer
            alt="Code avec chaîne encodée"
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

            {/* Image 2 – résultat après decodeURIComponent */}
            {i === 1 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/obfuscation2/pic-2.png" // ← à remplacer
                  alt="Résultat decodeURIComponent"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Image 3 – résultat final de String.fromCharCode */}
            {i === 2 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/obfuscation2/pic-3.png" // ← à remplacer
                  alt="Mot de passe décodé avec String.fromCharCode"
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

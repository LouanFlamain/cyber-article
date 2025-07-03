"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function JavascriptNative() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧠 Contexte du challenge",
        content:
          "Le challenge 'JavaScript Native' sur Root.me est basé sur une technique d'obfuscation poussée avec du code JavaScript minimaliste. Aucun champ de formulaire, aucun mot de passe apparent : tout est masqué dans une balise `<script>` extrêmement compressée.",
        items: [
          {
            title: "Nom du challenge",
            description: "JAVASCRIPT NATIVE – Web Client",
          },
          {
            title: "Spécificité",
            description:
              "Le script utilise uniquement des caractères natifs (`[]`, `!`, `+`, `~`, etc.) pour reconstruire dynamiquement une fonction.",
          },
          {
            title: "But",
            description:
              "Comprendre ce que fait le script pour en extraire le mot de passe caché.",
          },
        ],
      },
      {
        heading: "🔍 Méthode de résolution",
        content:
          "Le script étant totalement illisible, il fallait l'exécuter dans la console pour obtenir une fonction JS native en retour. Ensuite, on utilisait `.toString()` sur cette fonction pour obtenir le contenu exact du code déobfusqué.",
        items: [
          {
            title: "Étape 1 – Execution du code",
            description:
              "Après avoir copié le script dans la console, une fonction a été retournée sans erreur.",
          },
          {
            title: "Étape 2 – Lecture du code réel",
            description:
              "En utilisant `.toString()` sur la fonction retournée, on obtenait du code source lisible avec le mot de passe visible dans une variable ou un `alert()`.",
          },
          {
            title: "Résultat",
            description:
              "Le mot de passe était finalement directement accessible dans le corps de la fonction affichée par `.toString()`.",
          },
        ],
      },
      {
        heading: "📚 Leçons à tirer",
        content:
          "Ce type de challenge illustre bien comment un développeur peut volontairement masquer du code pour freiner l’analyse, sans pour autant protéger efficacement l’information. Toute exécution côté client est, tôt ou tard, lisible.",
        items: [
          {
            title: "Obfuscation extrême ≠ sécurité",
            description:
              "Même les scripts les plus illisibles sont exécutables et inspectables depuis la console navigateur.",
          },
          {
            title: "Outils natifs puissants",
            description:
              "Le simple couple `console.log(fn)` + `fn.toString()` permet de révéler une grande partie de l’obfuscation.",
          },
          {
            title: "Réflexe CTF",
            description:
              "Ne pas paniquer face à du JS obfusqué. Chercher à l’exécuter, puis analyser ce qui en sort.",
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
          JAVASCRIPT NATIVE – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Analyse d’un challenge basé sur du JavaScript obfusqué natif, résolu
          via la console.
        </p>

        {/* Image 1 : affichage du script dans la page */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/native/pic-1.png" // ← à remplacer
            alt="Script natif obfusqué dans le HTML"
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

            {/* Image 2 : résultat après toString() */}
            {i === 1 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/native/pic-2.png" // ← à remplacer
                  alt="Résultat toString() de la fonction JS"
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

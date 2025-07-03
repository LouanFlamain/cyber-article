"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function HtmlCanStopYou() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧩 Contexte du challenge",
        content:
          "Ce challenge provient de la plateforme Root.me, qui propose des exercices de type CTF (Capture The Flag). Dans l’épreuve 'HTML CAN STOP YOU', le formulaire de validation est rendu inutilisable... du moins en apparence.",
        items: [
          {
            title: "Nom du challenge",
            description: "HTML CAN STOP YOU – catégorie Web-Client",
          },
          {
            title: "Objectif",
            description:
              "Soumettre un formulaire dont les champs sont désactivés via des attributs HTML.",
          },
          {
            title: "Compétences visées",
            description:
              "Inspection DOM, compréhension des restrictions client-side, interaction via la console JavaScript.",
          },
        ],
      },
      {
        heading: "🔍 Analyse technique",
        content:
          "En inspectant le code source de la page, on constate que les champs de saisie (input texte + bouton submit) possèdent l’attribut `disabled`, les rendant inaccessibles depuis l’interface graphique. Cette barrière est purement côté client : le navigateur interdit l’interaction, mais rien n’empêche l’utilisateur de modifier le DOM.",
        items: [
          {
            title: "Étape 1 – Inspection",
            description:
              "J’ai ouvert les outils développeur (clic droit → Inspecter ou F12) pour observer la structure HTML du formulaire.",
          },
          {
            title: "Étape 2 – Suppression des attributs",
            description:
              "Dans l’onglet Console, j’ai utilisé `document.querySelector()` pour cibler les champs, puis j’ai supprimé les attributs `disabled` via `.removeAttribute('disabled')`.",
          },
          {
            title: "Étape 3 – Soumission",
            description:
              "Une fois les éléments déverrouillés, j’ai pu remplir le champ texte avec la bonne valeur et cliquer sur le bouton pour valider le challenge.",
          },
        ],
      },
      {
        heading: "🎓 Enseignements",
        content:
          "Ce challenge démontre que les protections côté client ne suffisent jamais à garantir la sécurité. Toute restriction implémentée en HTML ou JavaScript peut être contournée si elle n’est pas doublée d’un contrôle côté serveur.",
        items: [
          {
            title: "Comprendre le rôle du DOM",
            description:
              "Le DOM (Document Object Model) peut être manipulé à volonté depuis la console. Ce challenge en est une démonstration claire.",
          },
          {
            title: "Ne jamais se fier au frontend",
            description:
              "Les attributs HTML comme `disabled`, `readonly`, ou les validations de formulaire sont utiles pour l’UX, mais inutiles pour la sécurité réelle.",
          },
          {
            title: "Apprendre à penser comme un attaquant",
            description:
              "Inspecter, tester, modifier... ce genre d'exercice pousse à explorer les failles les plus courantes dans les interfaces web.",
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
          Root.me : HTML CAN STOP YOU
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Résolution d’un challenge web de type CTF basé sur la manipulation du
          DOM dans le navigateur
        </p>

        {/* Image 1 */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/html-can-stop-you/pic-1.png" // ← Remplace ici par ton lien
            alt="Formulaire désactivé initialement"
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

            {/* Images additionnelles à insérer après certaines sections */}
            {i === 1 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/html-can-stop-you/pic-2.png" // ← Remplace ici par ton lien
                  alt="Console avec les commandes JavaScript"
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

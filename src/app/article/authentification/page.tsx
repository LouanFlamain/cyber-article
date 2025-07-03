"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function Authentification() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🔐 Présentation du challenge",
        content:
          "Ce challenge de la catégorie Web Client sur Root.me proposait un formulaire classique de connexion avec un champ login et un champ mot de passe. Rien d’exceptionnel en apparence… mais toute la logique de validation était visible dans un fichier JavaScript.",
        items: [
          {
            title: "Nom du challenge",
            description: "AUTHENTIFICATION – Web Client",
          },
          {
            title: "But",
            description:
              "Trouver la bonne combinaison identifiant / mot de passe pour valider le formulaire.",
          },
          {
            title: "Difficulté",
            description:
              "Faible – repose sur l’analyse directe du code source JavaScript.",
          },
        ],
      },
      {
        heading: "🧠 Analyse du code source",
        content:
          "Dans le fichier JavaScript inclus, une variable contenait une chaîne de type `username:password`. Le script utilisait la méthode `.split(':')` pour séparer les deux, puis les comparait aux champs saisis par l’utilisateur.",
        items: [
          {
            title: "Extraction",
            description:
              'La ligne ressemblait à `var TheLists = ["GOD:HIDDEN"]`, et un script découpait la chaîne pour obtenir login et password.',
          },
          {
            title: "Validation",
            description:
              "Un `if` vérifiait que les valeurs saisies correspondaient exactement à celles du tableau. Si oui, une alerte affichait un message de réussite.",
          },
          {
            title: "Bypass",
            description:
              "En lisant le script, j’ai directement récupéré les identifiants et les ai utilisés dans le formulaire. Résultat : challenge validé sans bruteforce ni interception.",
          },
        ],
      },
      {
        heading: "✅ Conclusion",
        content:
          "Ce type de challenge démontre à quel point il est facile de contourner un système d’authentification s’il repose uniquement sur du code visible côté client. La sécurité ne doit jamais être basée sur l’obscurcissement ou le masquage.",
        items: [
          {
            title: "Mot de passe en clair = danger",
            description:
              "Le simple fait de stocker une chaîne `user:pass` côté client permet à n’importe qui de la lire.",
          },
          {
            title: "Split + vérif = trop simple",
            description:
              "Un système de validation basé uniquement sur `.split()` et une comparaison directe est totalement trivial à contourner.",
          },
          {
            title: "À retenir",
            description:
              "Inspecter les fichiers JS est souvent suffisant pour résoudre des challenges simples – mais cela montre aussi les failles réelles qu’on trouve dans des projets mal sécurisés.",
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
          AUTHENTIFICATION – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Retour sur un challenge de CTF Root.me où toute la logique
          d’authentification était codée en dur dans le JavaScript.
        </p>

        {/* Image principale */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/authentification/pic-1.png" // ← Remplace par ton image
            alt="Code JS avec username:password en dur"
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
          </section>
        ))}

        <footer className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mon Blog.
        </footer>
      </div>
    </main>
  );
}

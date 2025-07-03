"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function JavascriptSource() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "📜 Description du challenge",
        content:
          "Dans ce challenge Root.me de la catégorie Web Client, une fenêtre pop-up `prompt()` s’affichait à l’ouverture de la page pour demander un mot de passe. Si l’utilisateur saisissait un mot de passe incorrect ou annulait, il était redirigé vers une page blanche.",
        items: [
          {
            title: "Nom du challenge",
            description: "JAVASCRIPT SOURCE – Web Client",
          },
          {
            title: "Comportement initial",
            description:
              "Un `prompt()` bloque l'accès à la page, avec redirection forcée en cas d’échec.",
          },
          {
            title: "Problème à résoudre",
            description:
              "Trouver le mot de passe attendu pour valider l’accès à la page protégée.",
          },
        ],
      },
      {
        heading: "🔍 Exploration du code source",
        content:
          "En inspectant le code source avec les outils développeur, j’ai remarqué un fichier `login.js` chargé dans la page. En ouvrant ce fichier dans l’onglet 'Sources' du navigateur, on peut directement lire la logique JavaScript de vérification du mot de passe.",
        items: [
          {
            title: "Fichier détecté",
            description:
              "`login.js` contenait une condition du type `if (password === '123456azerty')`.",
          },
          {
            title: "Extraction de la solution",
            description:
              "Le mot de passe était codé en dur dans la condition. Il suffisait de le copier et de le coller dans le prompt pour réussir le challenge.",
          },
          {
            title: "Pas de sécurité réelle",
            description:
              "Puisque toute la logique était exécutée côté client, le challenge pouvait être résolu sans aucune tentative brutale ni analyse réseau.",
          },
        ],
      },
      {
        heading: "📚 Conclusion et bonnes pratiques",
        content:
          "Ce challenge illustre pourquoi toute logique d’authentification ne doit jamais reposer uniquement sur du code JavaScript exécuté côté client. Les fichiers JS sont publics et lisibles, ce qui rend ce type de protection inefficace.",
        items: [
          {
            title: "Visibilité du JavaScript",
            description:
              "Tout script chargé dans le navigateur est consultable. Il ne faut jamais y stocker d’informations sensibles.",
          },
          {
            title: "Séparation frontend/backend",
            description:
              "La validation des identifiants ou des accès doit impérativement être réalisée côté serveur.",
          },
          {
            title: "Réflexe sécurité",
            description:
              "Toujours inspecter les fichiers JS liés à une page quand un comportement semble étrange. Ils peuvent révéler des erreurs de logique ou d’implémentation.",
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
          JAVASCRIPT SOURCE – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Analyse d’un challenge où le mot de passe était stocké en dur dans un
          fichier JavaScript public.
        </p>

        {/* Image 1 : pop-up + redirection */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/javascript-source/pic-1.png" // ← à remplacer
            alt="Prompt bloquant la page"
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

            {/* Image 2 : code JS dans login.js */}
            {i === 1 && (
              <div className="relative w-full h-[400px] my-6">
                <Image
                  src="/javascript-source/pic-2.png" // ← à remplacer
                  alt="Mot de passe visible dans login.js"
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

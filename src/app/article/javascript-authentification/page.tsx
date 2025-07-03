"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string }[];
};

export default function JavascriptAuth() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🔍 Objectif du challenge",
        content:
          "Ce challenge Root.me de la catégorie Web Client consistait à contourner une page d’authentification gérée uniquement via JavaScript. Aucun formulaire côté serveur ne validait les identifiants, ce qui signifie que le contrôle était entièrement visible côté client.",
        items: [
          {
            title: "Nom du challenge",
            description: "JAVASCRIPT AUTHENTIFICATION – Web Client",
          },
          {
            title: "But",
            description:
              "Trouver la combinaison valide de login et mot de passe pour valider la page de connexion.",
          },
          {
            title: "Difficulté",
            description:
              "Faible à moyenne – basée sur l’inspection du code source.",
          },
        ],
      },
      {
        heading: "💡 Démarche de résolution",
        content:
          "En ouvrant l’inspecteur de code du navigateur (F12), j’ai examiné les fichiers JavaScript attachés à la page. Le script principal contenait en dur les identifiants attendus, comparés avec ceux saisis par l’utilisateur.",
        items: [
          {
            title: "Analyse du code source",
            description:
              "Le fichier `auth.js` incluait une vérification du type `if (login === '4dm1n' && password === 'sh.org')`, ce qui exposait directement la solution.",
          },
          {
            title: "Reproduction",
            description:
              "Il suffisait de remplir les champs login/password avec les bonnes valeurs puis de valider le formulaire.",
          },
          {
            title: "Validation",
            description:
              "Une fois les identifiants corrects renseignés, le site affichait le flag de réussite.",
          },
        ],
      },
      {
        heading: "🧠 Ce que j’ai appris",
        content:
          "Ce challenge montre qu’une authentification gérée uniquement côté client n’est pas fiable. Le code JavaScript exécuté dans le navigateur peut toujours être lu, modifié ou contourné. C’est pourquoi toute vérification sensible doit être faite côté serveur.",
        items: [
          {
            title: "Javascript ≠ Sécurité",
            description:
              "Tout ce qui est côté client est accessible. Il ne faut jamais mettre des identifiants en dur dans le code JS.",
          },
          {
            title: "Utilité de l’inspecteur",
            description:
              "C’est un outil puissant pour comprendre la logique du site et y détecter des failles d’implémentation.",
          },
          {
            title: "Réflexe à développer",
            description:
              "Toujours vérifier les fichiers inclus dans une page web lors d’un CTF. Une faille peut simplement être un oubli de sécurité côté dev.",
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
          JAVASCRIPT AUTHENTIFICATION – Catégorie Web Client
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Résolution d’un challenge basé sur l’inspection du code source
          JavaScript dans une logique de CTF Web.
        </p>

        {/* Image unique */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/javascript-authentification/pic-1.png" // ← remplace par ton image
            alt="Extrait du script avec identifiants en dur"
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

"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function NotPetyaArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧬 1. Quelle est la vulnérabilité exploitée ?",
        content:
          "NotPetya a principalement utilisé la faille EternalBlue (CVE-2017-0144) affectant le protocole SMBv1 de Windows, découverte par la NSA. Elle permettait l’exécution de code à distance. Le malware combinait aussi des outils comme Mimikatz pour voler les identifiants et PsExec/WMI pour se propager dans les réseaux internes.",
      },
      {
        heading: "📅 2. Comment l’attaque s’est-elle déroulée ?",
        content:
          "L’attaque a débuté via une mise à jour piégée du logiciel comptable ukrainien M.E.Doc. Une fois installé, NotPetya se diffusait rapidement à travers le réseau via EternalBlue et les identifiants volés. Il chiffrant ensuite le Master Boot Record (MBR) et les tables de fichiers, rendant l’ordinateur inutilisable. Une rançon était affichée, mais aucune récupération réelle n’était possible.",
      },
      {
        heading: "🎯 3. Qui a été touché ?",
        content:
          "Principalement l’Ukraine (80 % des infections), mais aussi de nombreuses grandes entreprises internationales :",
        items: [
          {
            title: "Entreprises impactées",
            description:
              "Maersk, Merck, FedEx/TNT, Saint-Gobain, Rosneft, WPP, Mondelez, Beiersdorf, DLA Piper, etc.",
          },
          {
            title: "Infrastructures critiques",
            description:
              "La centrale nucléaire de Tchernobyl, des hôpitaux, banques et transports ont été perturbés.",
          },
        ],
      },
      {
        heading: "💥 4. Quels ont été les impacts ?",
        items: [
          {
            title: "Perturbation des opérations",
            description:
              "De nombreuses entreprises ont dû suspendre leurs activités pendant plusieurs jours à semaines.",
          },
          {
            title: "Pertes de données",
            description:
              "Fichiers irrécupérables, même après paiement. Désorganisation complète des services.",
          },
          {
            title: "Prise de conscience",
            description:
              "Hausse des budgets cybersécurité et adoption des bonnes pratiques dans de nombreux secteurs.",
          },
        ],
      },
      {
        heading: "📉 5. Quel coût estimé selon la taille de l’entreprise ?",
        items: [
          {
            title: "Petite entreprise",
            description:
              "Pertes allant de quelques milliers à centaines de milliers d’euros (perte d’activité, frais de restauration).",
          },
          {
            title: "Moyenne entreprise",
            description:
              "Pertes de centaines de milliers à quelques millions d’euros selon la dépendance informatique.",
          },
          {
            title: "Grande entreprise",
            description:
              "Certaines ont perdu entre 100 M$ et 870 M$ (Merck : 870 M$, FedEx : 300 M$, Saint-Gobain : 384 M$).",
          },
        ],
      },
      {
        heading: "🛡️ 6. Comment s’en protéger ?",
        items: [
          {
            title: "Appliquer les patchs",
            description:
              "Corriger rapidement les failles comme EternalBlue (SMBv1) sur tous les systèmes.",
          },
          {
            title: "Sauvegarde et segmentation",
            description:
              "Sauvegarder régulièrement sur supports isolés, segmenter les réseaux pour limiter la propagation.",
          },
          {
            title: "Bonne hygiène cybersécurité",
            description:
              "Limiter les privilèges admin, surveiller les accès, former les utilisateurs au phishing.",
          },
        ],
      },
      {
        heading: "🕵️ 7. Pourquoi est-ce difficile à éviter ?",
        items: [
          {
            title: "Retard de mise à jour",
            description:
              "De nombreuses entreprises tardent à corriger les failles critiques comme EternalBlue.",
          },
          {
            title: "Chaîne d’approvisionnement compromise",
            description:
              "Le logiciel M.E.Doc utilisé comme vecteur rendait l’attaque difficile à anticiper.",
          },
          {
            title: "Propagation rapide et furtive",
            description:
              "Outils comme PsExec ou Mimikatz sont légitimes, donc peu détectés.",
          },
        ],
      },
      {
        heading:
          "🏢 8. Dans le contexte de votre entreprise, que feriez-vous ?",
        items: [
          {
            title: "Évaluation des risques",
            description:
              "Auditer l’exposition à EternalBlue et autres failles critiques.",
          },
          {
            title: "Renforcement des protections",
            description:
              "Mettre à jour tous les systèmes, limiter les privilèges, segmenter le réseau, isoler les sauvegardes.",
          },
          {
            title: "Formation et plan de réponse",
            description:
              "Former les collaborateurs, surveiller les comportements anormaux et préparer un plan d’intervention.",
          },
        ],
      },
    ]);
  }, []);

  if (!data) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-red-900">
          NotPetya – L’attaque dévastatrice aux faux airs de ransomware
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Analyse complète de l’attaque NotPetya : vecteurs, cibles, impacts, et
          bonnes pratiques pour s’en prémunir.
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-red-700 mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 text-gray-700">{section.content}</p>
            {section.items && (
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="bg-white shadow rounded p-4 border-l-4 border-red-500"
                  >
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
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

"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function Target2013Article() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🔓 1. Quelle est la vulnérabilité exploitée ?",
        content:
          "Les attaquants ont compromis un prestataire tiers ayant un accès non sécurisé au réseau de Target. L’absence de segmentation et de contrôle des accès a permis aux hackers de s’infiltrer profondément dans le système de l’entreprise.",
      },
      {
        heading: "📅 2. Comment l’attaque s’est-elle déroulée ?",
        content:
          "Après avoir piraté un fournisseur, les attaquants se sont introduits sur le réseau interne de Target, ont contourné les sécurités et installé un malware sur les terminaux de paiement. Celui-ci capturait les données bancaires des clients pendant les transactions, sans alerte immédiate.",
      },
      {
        heading: "👥 3. Qui a été touché ?",
        items: [
          {
            title: "Clients particuliers",
            description:
              "40 millions de cartes bancaires compromises et 70 millions de données personnelles exposées.",
          },
          {
            title: "Target",
            description:
              "Forte atteinte à la réputation, chute de chiffre d'affaires (-46 %), et pertes financières importantes.",
          },
        ],
      },
      {
        heading: "💥 4. Quels ont été les impacts ?",
        items: [
          {
            title: "Perte de confiance client",
            description:
              "Les consommateurs ont été choqués par l’ampleur de la fuite de données sensibles.",
          },
          {
            title: "Pertes financières",
            description:
              "Coût estimé à plus de 200 millions de dollars : gestion de crise, frais juridiques, amendes, etc.",
          },
          {
            title: "Impact durable",
            description:
              "L’image de marque a été durablement dégradée, affectant les performances commerciales.",
          },
        ],
      },
      {
        heading: "💸 5. Quel coût estimé selon la taille d’entreprise ?",
        items: [
          {
            title: "Petite entreprise",
            description:
              "Entre 300 000 € et 500 000 € : impact critique pouvant menacer la survie de l’entreprise.",
          },
          {
            title: "Moyenne entreprise",
            description:
              "Entre 59 000 € et 230 000 €, en fonction de la gravité de l’incident et du secteur.",
          },
          {
            title: "Grande entreprise",
            description:
              "Plusieurs millions voire centaines de millions d’euros, comme dans le cas de Target.",
          },
        ],
      },
      {
        heading: "🛡️ 6. Comment s’en protéger ?",
        items: [
          {
            title: "Sécuriser les accès tiers",
            description:
              "Contrôler les droits des fournisseurs, appliquer le principe du moindre privilège.",
          },
          {
            title: "Segmenter le réseau",
            description:
              "Limiter les communications entre services sensibles pour contenir une éventuelle intrusion.",
          },
          {
            title: "Sensibilisation et formation",
            description:
              "Former les équipes à détecter les tentatives de phishing et les comportements suspects.",
          },
          {
            title: "Maintenance régulière",
            description:
              "Mise à jour des logiciels, audits de sécurité, tests d’intrusion, et politiques de mots de passe solides.",
          },
        ],
      },
      {
        heading: "⚠️ 7. Pourquoi est-ce difficile à éviter ?",
        items: [
          {
            title: "Failles humaines",
            description:
              "Les erreurs de configuration, négligences ou manipulations sociales restent courantes.",
          },
          {
            title: "Interconnexion des systèmes",
            description:
              "Plus il y a d'intermédiaires, plus les surfaces d’attaque sont grandes.",
          },
          {
            title: "Évolution des menaces",
            description:
              "Les techniques d’attaque changent rapidement, compliquant la prévention.",
          },
        ],
      },
      {
        heading:
          "🏢 8. Dans le contexte de votre entreprise, que feriez-vous ?",
        items: [
          {
            title: "Contrôles des accès",
            description:
              "Auditer les fournisseurs et limiter leurs droits d’accès aux systèmes sensibles.",
          },
          {
            title: "Prévention et réaction",
            description:
              "Mettre en place un plan de gestion de crise et tester la résilience régulièrement.",
          },
          {
            title: "Assurance et audits",
            description:
              "Souscrire à une cyberassurance et effectuer des audits de sécurité fréquents.",
          },
        ],
      },
    ]);
  }, []);

  if (!data) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-rose-900">
          Target (2013) – Une attaque via un fournisseur tiers
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Étude de cas sur la compromission de Target, ses causes, conséquences
          et les leçons à en tirer pour la cybersécurité moderne.
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-rose-700 mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 text-gray-700">{section.content}</p>
            {section.items && (
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="bg-white shadow rounded p-4 border-l-4 border-rose-500"
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

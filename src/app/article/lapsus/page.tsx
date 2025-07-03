"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function LapsusArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🎭 1. Identification du groupe",
        items: [
          {
            title: "Nom(s)",
            description:
              "Lapsus$ (stylisé LAPSUS$), aussi appelé DEV-0537 (Microsoft) ou Slippy Spider (CrowdStrike).",
          },
          {
            title: "Origine présumée",
            description:
              "Amérique du Sud (Brésil), extension vers le Royaume-Uni et l'international.",
          },
          {
            title: "Affiliations",
            description:
              "Groupe non affilié à un État, composé principalement de jeunes individus, apolitique.",
          },
          {
            title: "Motivations",
            description:
              "Extorsion financière, recherche de notoriété, pas de revendication politique explicite.",
          },
        ],
      },
      {
        heading: "📅 2. Historique des opérations",
        content:
          "Le groupe a attaqué de nombreuses entreprises mondiales de la tech entre 2021 et 2025, avec des opérations marquantes contre Nvidia, Samsung, Microsoft, Rockstar Games, Engie, etc.",
        items: [
          {
            title: "Décembre 2021",
            description:
              "Attaque du ministère brésilien de la Santé (certificats COVID).",
          },
          {
            title: "Février 2022",
            description: "Compromission de Nvidia, fuite de 1 To de données.",
          },
          {
            title: "Mars 2022",
            description:
              "Samsung, Microsoft, Okta, LG, Vodafone, Ubisoft et T-Mobile sont attaqués avec fuite de code source ou compromission d'accès.",
          },
          {
            title: "Septembre 2022",
            description: "Fuite de GTA VI depuis Rockstar Games.",
          },
          {
            title: "Mai 2024",
            description:
              "Rançongiciel contre Engie, données publiées sur Telegram.",
          },
        ],
      },
      {
        heading: "🧰 3. Arsenal technique",
        items: [
          {
            title: "Outils",
            description:
              "Mimikatz, Metasploit, Process Hacker, Process Explorer, scripts GitHub publics, credential stuffing.",
          },
          {
            title: "Méthodes d'intrusion",
            description:
              "Phishing, MFA spamming, insiders, social engineering, accès VPN/cloud, création de comptes admins.",
          },
          {
            title: "Infrastructure",
            description:
              "Telegram pour communication et fuites, serveurs C2 non anonymisés, peu d'obfuscation.",
          },
        ],
      },
      {
        heading: "🎯 4. Victimologie",
        items: [
          {
            title: "Secteurs ciblés",
            description:
              "Technologie, télécoms, jeux vidéo, gouvernement, médias, universités.",
          },
          {
            title: "Géographie",
            description:
              "Cibles mondiales, prédominance en Amérique, Europe, Asie.",
          },
          {
            title: "Critères de sélection",
            description:
              "Visibilité médiatique, données sensibles, opportunisme sur failles ou accès internes.",
          },
        ],
      },
      {
        heading: "🧬 5. Particularités",
        items: [
          {
            title: "Signatures techniques",
            description:
              "Telegram pour publication, peu de chiffrement, mauvais OpSec, fuites d'identité internes.",
          },
          {
            title: "Comportement",
            description:
              "Buzz médiatique, sondages publics sur les cibles, ingénierie sociale très présente.",
          },
        ],
      },
      {
        heading: "🧾 6. Indicateurs de compromission (IOCs)",
        items: [
          {
            title: "Outils observés",
            description:
              "Mimikatz, Metasploit, Process Hacker, noms de fichiers exfiltrés connus.",
          },
          {
            title: "Infrastructure",
            description:
              "IPs exposées, certificats SSL par défaut, chaînes Telegram publiques.",
          },
        ],
      },
      {
        heading: "🛡️ 7. Contre-mesures spécifiques",
        items: [
          {
            title: "Contrôle des accès",
            description:
              "Audits des comptes admin, détection de RDP anormal, MFA non-SMS.",
          },
          {
            title: "Protection identifiants",
            description:
              "Sensibilisation phishing, détection MFA fatigue, gestion des mots de passe.",
          },
          {
            title: "Monitoring",
            description:
              "Alertes sur outils sensibles, désactivation antivirus, UEBA.",
          },
          {
            title: "Gestion des insiders",
            description:
              "Détection comportements suspects, canaux de signalement anonymes.",
          },
          {
            title: "Gestion des fuites",
            description:
              "Surveillance Telegram, réponse rapide aux leaks, communication de crise.",
          },
        ],
      },
    ]);
  }, []);

  if (!data) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-indigo-900">
          Rapport d’investigation : Groupe Lapsus$
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Étude de cas détaillée du groupe Lapsus$, ses opérations, signatures,
          victimes, et les enseignements en matière de cybersécurité.
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              {section.heading}
            </h2>
            {section.content && (
              <p className="mb-4 text-gray-700">{section.content}</p>
            )}
            {section.items && (
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="bg-white shadow rounded p-4 border-l-4 border-indigo-500"
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
          © {new Date().getFullYear()} Cyberwatch Report.
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function SolarWindsArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🧬 1. Quelle est la vulnérabilité exploitée ?",
        content:
          "Les attaquants ont compromis la chaîne d’approvisionnement de SolarWinds en injectant un code malveillant (Sunburst) dans une mise à jour du logiciel Orion. Cette mise à jour, signée numériquement, a été distribuée à plus de 18 000 clients. La faille résidait dans le processus de développement et de distribution du logiciel Orion, qui bénéficiait de privilèges élevés sur les réseaux clients.",
      },
      {
        heading: "📅 2. Comment l’attaque s’est-elle déroulée ?",
        items: [
          {
            title: "Septembre 2019",
            description: "Premier accès non autorisé au réseau de SolarWinds.",
          },
          {
            title: "Février 2020",
            description: "Injection du code malveillant Sunburst dans Orion.",
          },
          {
            title: "Mars 2020",
            description:
              "Déploiement mondial des mises à jour compromises aux clients.",
          },
          {
            title: "Décembre 2020",
            description:
              "Découverte de l’attaque par FireEye, révélant l’ampleur du piratage.",
          },
        ],
      },
      {
        heading: "🎯 3. Qui a été touché ?",
        content: "Plus de 18 000 organisations, dont :",
        items: [
          {
            title: "Gouvernements",
            description:
              "Départements US de la Sécurité intérieure, du Trésor, du Commerce, etc.",
          },
          {
            title: "Entreprises privées",
            description:
              "Microsoft, FireEye, Intel, Cisco, Deloitte et d'autres.",
          },
          {
            title: "Effet domino",
            description:
              "Accès aux réseaux partenaires et clients secondaires via Orion.",
          },
        ],
      },
      {
        heading: "💥 4. Quels ont été les impacts ?",
        items: [
          {
            title: "Espionnage et vols de données",
            description:
              "Accès prolongé à des emails sensibles, réseaux internes, données confidentielles.",
          },
          {
            title: "Pertes économiques",
            description:
              "Coûts d’enquête, perte de productivité, réputation endommagée, nouvelles exigences réglementaires.",
          },
          {
            title: "Effets durables",
            description:
              "Hausse des primes de cyberassurance et surveillance renforcée.",
          },
        ],
      },
      {
        heading: "📉 5. Quel coût estimé selon la taille de l’entreprise ?",
        items: [
          {
            title: "Petites entreprises (PME)",
            description:
              "De 300 000 € à 1 million d’euros. 60 % des PME ferment dans les 6 mois après une cyberattaque.",
          },
          {
            title: "Moyennes entreprises",
            description:
              "Coûts moyens de 14 720 €, mais 1 sur 8 subit des pertes > 230 000 €.",
          },
          {
            title: "Grandes entreprises",
            description:
              "Jusqu’à 11 % du chiffre d’affaires annuel. Cas à plusieurs millions d’euros.",
          },
        ],
      },
      {
        heading: "🛡️ 6. Comment s’en protéger ?",
        items: [
          {
            title: "Gestion des accès et mises à jour",
            description:
              "Limiter les privilèges, segmenter les réseaux, contrôler les déploiements.",
          },
          {
            title: "Surveillance proactive",
            description:
              "Utiliser SIEM, intrusion detection (IDS/IPS), audits réguliers.",
          },
          {
            title: "Sensibilisation et politique de sécurité",
            description:
              "Former les utilisateurs, activer le MFA, exiger des SBOM (Software Bill of Materials) des fournisseurs.",
          },
        ],
      },
      {
        heading: "🕵️ 7. Pourquoi est-ce difficile à éviter ?",
        content: "Les attaques sur la supply chain sont complexes car :",
        items: [
          {
            title: "Confiance dans les fournisseurs",
            description:
              "Les mises à jour signées sont rarement remises en question.",
          },
          {
            title: "Malwares furtifs",
            description:
              "Sunburst se fondait dans l’activité normale, échappant aux antivirus.",
          },
          {
            title: "Détection tardive",
            description:
              "Les attaquants sont restés plus d’un an dans les systèmes avant détection.",
          },
        ],
      },
      {
        heading:
          "🏢 8. Dans le contexte de votre entreprise, que feriez-vous ?",
        items: [
          {
            title: "Cartographie des dépendances logicielles",
            description:
              "Identifier les outils critiques comme Orion, et évaluer leur niveau de privilège.",
          },
          {
            title: "Renforcer la sécurité des tiers",
            description:
              "Exiger des audits et SBOM des prestataires. Imposer une gestion de vulnérabilités formelle.",
          },
          {
            title: "Plan de réponse et sensibilisation",
            description:
              "Former les équipes, tester des scénarios d’attaque, mettre en place des backups et procédures de crise.",
          },
        ],
      },
    ]);
  }, []);

  if (!data) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-orange-900">
          SolarWinds – Attaque sur la chaîne d’approvisionnement
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Étude de cas : analyse complète d’une cyberattaque de grande ampleur –
          contexte, propagation, impact et prévention.
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-orange-700 mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 text-gray-700">{section.content}</p>
            {section.items && (
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="bg-white shadow rounded p-4 border-l-4 border-orange-500"
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

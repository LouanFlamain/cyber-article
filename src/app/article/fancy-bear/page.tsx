"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function FancyBearArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🎯 1. Identification du groupe",
        items: [
          {
            title: "Noms/Aliases",
            description:
              "Fancy Bear, APT28, Sofacy Group, Pawn Storm, Sednit, STRONTIUM, Tsar Team, Threat Group-4127, Grizzly Steppe.",
          },
          {
            title: "Origine présumée",
            description: "Russie",
          },
          {
            title: "Affiliation",
            description:
              "Direction principale du renseignement des forces armées russes (GRU), Unité 26165.",
          },
          {
            title: "Motivations",
            description:
              "Espionnage, influence géopolitique, déstabilisation, sabotage, soutien à la politique étrangère russe.",
          },
        ],
      },
      {
        heading: "📅 2. Historique des opérations",
        content:
          "De 2004 à 2023, Fancy Bear a mené des opérations d’espionnage, de sabotage et d’influence à l’échelle mondiale, ciblant des gouvernements, partis politiques et infrastructures critiques.",
      },
      {
        heading: "🛠️ 3. Arsenal technique",
        items: [
          {
            title: "Malwares",
            description:
              "Sofacy/SOURFACE, X-Agent, Zebrocy, CHOPSTICK, CORESHELL, Drovorub, Skinnyboy.",
          },
          {
            title: "Méthodes d’intrusion",
            description:
              "Phishing ciblé, exploitation de zero-days (Outlook, Cisco, Follina), watering hole, attaques supply chain.",
          },
          {
            title: "Infrastructure",
            description:
              "Serveurs VPS, Tor, C2 variés, domaines légitimes détournés, paiements anonymes.",
          },
        ],
      },
      {
        heading: "🎯 4. Victimologie",
        items: [
          {
            title: "Secteurs ciblés",
            description:
              "Gouvernements, diplomatie, partis politiques, médias, recherche, énergie, finance, ONG.",
          },
          {
            title: "Zones géographiques",
            description:
              "Europe (Ukraine, France, Allemagne, OTAN), Amérique du Nord, Moyen-Orient.",
          },
          {
            title: "Sélection des cibles",
            description:
              "Institutions à valeur stratégique ou rôle dans des crises politiques, militaires ou économiques.",
          },
        ],
      },
      {
        heading: "🧬 5. Particularités et signatures techniques",
        items: [
          {
            title: "Techniques avancées",
            description:
              "Spear-phishing élaboré, backdoors modulaires, obfuscation, polymorphisme, fausses bannières.",
          },
          {
            title: "Adaptabilité",
            description:
              "Réactivité aux vulnérabilités zero-day, attaques alignées avec l’actualité géopolitique russe.",
          },
        ],
      },
      {
        heading: "🧾 6. Indicateurs de compromission (IOCs)",
        items: [
          {
            title: "Domaines",
            description:
              "livemicrosoft.net, ActBlues.com, rsshotmail.com, fancybear.net…",
          },
          {
            title: "IPs & Hashs",
            description:
              "Adresses IP sur VPS ou Tor ; signatures malwares comme Zebrocy, XAgent, Sofacy.",
          },
          {
            title: "Techniques de persistence",
            description:
              "Tâches planifiées, DLL injection, altérations du registre.",
          },
        ],
      },
      {
        heading: "🛡️ 7. Contre-mesures spécifiques",
        items: [
          {
            title: "Surveillance & détection",
            description:
              "SIEM avancés, flux de threat intelligence, détection comportementale.",
          },
          {
            title: "Durcissement",
            description:
              "MFA, limitation des privilèges, patch management, audits réguliers.",
          },
          {
            title: "Protection & réponse",
            description:
              "EDR/XDR, segmentation, plans de réponse incident, sensibilisation utilisateur.",
          },
          {
            title: "Veille & anticipation",
            description:
              "Surveillance des domaines similaires, adaptation constante face aux TTPs évolutifs.",
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
          Fancy Bear (APT28) – Cyberespionnage et opérations d’influence russes
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Étude approfondie sur les activités d’APT28 : tactiques, arsenal,
          cibles et contre-mesures.
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
          © {new Date().getFullYear()} Mon Blog.
        </footer>
      </div>
    </main>
  );
}

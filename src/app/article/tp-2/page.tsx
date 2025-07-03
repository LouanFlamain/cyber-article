"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Section = {
  heading: string;
  content: string;
  items: { title: string; description: string; link?: string }[];
};

export default function CyberBanque() {
  const [data, setData] = useState<Section[] | null>(null);

  useEffect(() => {
    setData([
      {
        heading: "💰 Enjeux économiques",
        content:
          "La cybersécurité dans les banques n’est pas seulement une question de technique : c’est un enjeu financier majeur. Une attaque réussie peut coûter des millions, impacter la réputation, ou même provoquer une crise de liquidité.",
        items: [
          {
            title: "Protection des actifs financiers",
            description:
              "Les banques sont des cibles privilégiées pour le vol d’argent. Une brèche dans les systèmes peut permettre un transfert frauduleux ou une manipulation de comptes.",
          },
          {
            title: "Coûts des incidents cyber",
            description:
              "Un ransomware ou une attaque DDoS peut immobiliser les systèmes critiques. Les coûts incluent la réponse technique, la communication de crise, les assurances, les amendes, etc.",
          },
          {
            title: "Maintien de la confiance client",
            description:
              "La réputation d'une banque repose en partie sur sa capacité à protéger les données de ses clients. Une cyberattaque peut provoquer des retraits massifs ou une perte de crédibilité.",
          },
        ],
      },
      {
        heading: "👥 Enjeux humains",
        content:
          "Les cyberattaques exploitent souvent le facteur humain. Les erreurs, négligences ou mauvaises pratiques internes sont des portes d’entrée fréquentes pour les pirates.",
        items: [
          {
            title: "Formation du personnel",
            description:
              "Phishing, ingénierie sociale, pièces jointes piégées… Sensibiliser les équipes est une priorité absolue. Chaque employé doit être un maillon de défense, pas une faille.",
          },
          {
            title: "Protection des données personnelles",
            description:
              "Les banques manipulent des informations sensibles : identité, comptes, revenus, crédits. Ces données doivent être stockées, traitées et transmises de façon sécurisée.",
          },
          {
            title: "Responsabilité des dirigeants",
            description:
              "La direction est légalement responsable de la sécurité des systèmes. En cas de négligence prouvée, elle peut être sanctionnée (amendes, mise en cause personnelle).",
          },
        ],
      },
      {
        heading: "🧭 Enjeux stratégiques",
        content:
          "Au-delà du quotidien, la cybersécurité devient un levier stratégique. Elle impacte la résilience, la conformité et même la compétitivité sur le marché bancaire globalisé.",
        items: [
          {
            title: "Continuité d’activité",
            description:
              "Une banque doit être disponible 24h/24. Un système paralysé, même quelques heures, peut entraîner des pertes clients, juridiques et financières importantes.",
          },
          {
            title: "Conformité réglementaire",
            description:
              "Les banques sont soumises à de nombreuses normes : RGPD, DORA (EU), PCI-DSS… Une bonne cybersécurité permet de répondre aux exigences légales.",
          },
          {
            title: "Compétitivité technologique",
            description:
              "Une banque qui maîtrise les enjeux cyber inspire confiance et attire les clients les plus exigeants. Elle peut aussi innover plus vite, avec moins de risques.",
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
          Enjeux de Cybersécurité dans les Banques
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Présentation structurée sous forme de carte mentale pour un devoir – 5
          min
        </p>

        <div className="relative w-full h-[600px]">
          <Image
            src="/tp-2-graph.png"
            alt="Carte mentale des enjeux cybersécurité bancaires"
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

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-10 rounded">
          <p className="text-yellow-800">
            Ces éléments s’inscrivent dans une réflexion plus large sur les
            enjeux humains, techniques et stratégiques de la cybersécurité. Lors
            de l’oral, il peut être pertinent d’établir des connexions
            transversales entre les différentes dimensions abordées :
          </p>
          <ul className="list-disc list-inside text-yellow-700 mt-2">
            <li>
              <strong>La confiance client</strong> repose autant sur les
              compétences relationnelles et la formation des équipes que sur les
              dispositifs techniques mis en place.
            </li>
            <li>
              <strong>La continuité d’activité</strong> ne peut être assurée
              sans une anticipation stratégique et une implication concrète des
              équipes terrain.
            </li>
            <li>
              <strong>Les exigences réglementaires</strong> renforcent
              l’obligation pour les organisations d’intégrer la cybersécurité
              dans leur budget et leur gouvernance globale.
            </li>
          </ul>
        </div>

        <footer className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mon Blog.
        </footer>
      </div>
    </main>
  );
}

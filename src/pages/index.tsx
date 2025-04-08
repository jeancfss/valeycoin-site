import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white p-4">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ValeyCoin</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          A moeda digital da inovação, da liberdade e do futuro. Descentralizada, segura e feita para transformar.
        </p>
        <Button className="text-lg px-6 py-2 rounded-2xl shadow-xl bg-green-500 hover:bg-green-600">
          Adicionar à Metamask
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12">
        <Card className="bg-slate-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Descentralização Real</h2>
            <p>
              Nenhum governo ou empresa controla a ValeyCoin. A rede é da comunidade.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Tecnologia Avançada</h2>
            <p>
              Desenvolvida com o padrão ERC20, já preparada para integração futura com a SeyraChain.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Foco Humanitário</h2>
            <p>
              Parte da missão é financiar curas, avanços científicos e soluções globais pela Seyra Foundation.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
        <ul className="space-y-2 text-left max-w-xl mx-auto">
          <li>✅ Criação da ValeyCoin (ERC20)</li>
          <li>🚧 Lançamento do site oficial</li>
          <li>🔜 Integração com plataformas DeFi e bridges</li>
          <li>🔜 Desenvolvimento da SeyraChain</li>
          <li>🔜 Expansão humanitária via Seyra Foundation</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} ValeyCoin.org — Powered by Seyra
      </footer>
    </main>
  );
}
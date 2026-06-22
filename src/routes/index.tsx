import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar, type SectionId } from "@/components/dashboard/Sidebar";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { EdaSection } from "@/components/dashboard/sections/EdaSection";
import { PandemicSection } from "@/components/dashboard/sections/PandemicSection";
import { PatternsSection } from "@/components/dashboard/sections/PatternsSection";
import { MlSection } from "@/components/dashboard/sections/MlSection";
import { Menu, Activity } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRF Analytics · TCC Big Data & IA" },
      {
        name: "description",
        content:
          "Dashboard analítico do TCC em Big Data e IA — análise de acidentes da PRF nos anos 2020, 2021 e 2025.",
      },
      { property: "og:title", content: "PRF Analytics · TCC Big Data & IA" },
      {
        property: "og:description",
        content: "Pipeline PySpark/Databricks, EDA, regras de associação e Machine Learning sobre dados da PRF.",
      },
    ],
  }),
  component: Dashboard,
});

const labels: Record<SectionId, string> = {
  overview: "Engenharia & Visão Geral",
  eda: "Visualização de Dados",
  pandemic: "Efeito Pandemia",
  patterns: "Mineração de Padrões",
  ml: "Machine Learning",
};

function Dashboard() {
  const [active, setActive] = useState<SectionId>("overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full text-foreground">
      <Sidebar active={active} onSelect={(id) => { setActive(id); setMobileOpen(false); }} />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="relative">
            <Sidebar active={active} onSelect={(id) => { setActive(id); setMobileOpen(false); }} />
          </div>
        </div>
      )}

      <main className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-5 md:px-10 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center"
              aria-label="Abrir menu"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="text-info">●</span>
              <span className="uppercase tracking-widest">Cluster online</span>
              <span className="hidden md:inline text-border">/</span>
              <span className="hidden md:inline">{labels[active]}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-xs font-mono text-muted-foreground">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-warning/40 bg-warning/10 text-warning">
              <span className="uppercase tracking-widest text-[10px] opacity-80">Recorte</span>
              <span className="text-foreground font-semibold">Jan–Abr</span>
              <span className="text-border">·</span>
              <span className="text-foreground font-semibold">SC/PR/MG</span>
            </div>
            <span className="sm:hidden px-2 py-1 rounded border border-warning/40 bg-warning/10 text-warning text-[10px] font-semibold">
              Jan–Abr · SC/PR/MG
            </span>
            <Activity className="w-3.5 h-3.5 text-info hidden md:block" />
            <span className="hidden md:inline">TCC · v1.0</span>
          </div>
        </header>

        <div className="flex-1 px-5 md:px-10 py-10 max-w-7xl w-full mx-auto">
          {active === "overview" && <OverviewSection />}
          {active === "eda" && <EdaSection />}
          {active === "pandemic" && <PandemicSection />}
          {active === "patterns" && <PatternsSection />}
          {active === "ml" && <MlSection />}
        </div>

        <footer className="px-5 md:px-10 py-6 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex justify-between">
          <span>PRF Analytics © TCC Big Data & IA</span>
          <span>Databricks · PySpark · Scikit-Learn · TensorFlow</span>
        </footer>
      </main>
    </div>
  );
}

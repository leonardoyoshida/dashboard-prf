import { TrendingUp, Database, GitMerge, FileWarning } from "lucide-react";

const yearMetrics = [
  { year: "2020", value: 7185, label: "registos processados", tone: "info" as const, badge: "Baseline" },
  { year: "2021", value: 7326, label: "registos processados", tone: "warning" as const, badge: "+1.96%" },
  { year: "2025", value: 7844, label: "registos processados", tone: "danger" as const, badge: "+9.17%", highlight: true },
];

const weekendData = [
  { year: "2020", acc: 2196, fer: 2770 },
  { year: "2021", acc: 2366, fer: 2783 },
  { year: "2025", acc: 2395, fer: 2864 },
];

const toneClass = {
  info: "from-[oklch(0.7_0.19_240/30%)] to-transparent border-[oklch(0.7_0.19_240/40%)]",
  warning: "from-[oklch(0.78_0.17_70/30%)] to-transparent border-[oklch(0.78_0.17_70/40%)]",
  danger: "from-[oklch(0.65_0.24_27/35%)] to-transparent border-[oklch(0.65_0.24_27/50%)]",
};

const toneText = {
  info: "text-info",
  warning: "text-warning",
  danger: "text-danger",
};

export function OverviewSection() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-info font-mono">Secção 01 · Engenharia de Dados</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
          Pipeline de <span className="text-gradient-primary">Big Data</span>: PySpark no Databricks
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
          Dados ingeridos via <span className="text-foreground font-medium">Unity Catalog Volumes</span> e tratados no cluster.
          Aplicou-se <code className="text-info font-mono text-sm bg-surface px-1.5 py-0.5 rounded">unionByName</code>,
          conversões de tipagem com <code className="text-info font-mono text-sm bg-surface px-1.5 py-0.5 rounded">regexp_replace</code> e
          limpeza de nulos.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {yearMetrics.map((m) => (
          <div
            key={m.year}
            className={`glass-elevated relative overflow-hidden p-7 bg-gradient-to-br ${toneClass[m.tone]}`}
          >
            {m.highlight && (
              <div className="absolute top-5 right-5 flex items-center gap-1 text-xs font-mono text-danger">
                <TrendingUp className="w-4 h-4" /> ALTA
              </div>
            )}
            <div className="flex items-center gap-2 mb-4">
              <Database className={`w-4 h-4 ${toneText[m.tone]}`} />
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Ano {m.year}</span>
            </div>
            <p className={`text-5xl font-display font-bold tabular-nums ${toneText[m.tone]}`}>
              {m.value.toLocaleString("pt-BR")}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono px-2.5 py-1 rounded-md bg-black/30 border border-border/60">
              <span className={toneText[m.tone]}>●</span> {m.badge}
            </div>
          </div>
        ))}
      </section>

      <section className="glass p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <GitMerge className="w-4 h-4 text-warning" />
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Sub-métricas · Recorte de Fins de Semana (Sex–Dom)
            </h2>
          </div>
          <FileWarning className="w-4 h-4 text-warning" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {weekendData.map((w) => (
            <div key={w.year} className="rounded-lg border border-border/70 bg-surface/50 p-5">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{w.year}</p>
              <div className="mt-3 flex items-baseline gap-6">
                <div>
                  <p className="text-2xl font-display font-bold text-foreground tabular-nums">
                    {w.acc.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">acidentes</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-warning tabular-nums">
                    {w.fer.toLocaleString("pt-BR")}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">feridos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

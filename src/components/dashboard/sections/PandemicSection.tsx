import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { AlertOctagon, Skull } from "lucide-react";

const data = [
  { cause: "Velocidade Incompatível", mortos: 117, color: "oklch(0.65 0.24 27)" },
  { cause: "Falta de Atenção", mortos: 98, color: "oklch(0.7 0.21 35)" },
  { cause: "Pedestres", mortos: 70, color: "oklch(0.75 0.18 50)" },
];

export function PandemicSection() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-danger font-mono">Secção 03 · Causas Raízes</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
          Análise de Letalidade: <span className="text-danger">O Efeito Pandemia</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 glass-elevated p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Ranking</p>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Top 3 Causas de Mortes em 2020 <span className="text-muted-foreground">(Lockdown)</span>
              </h2>
            </div>
            <Skull className="w-6 h-6 text-danger" />
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 20, right: 40, top: 10, bottom: 0 }}>
                <XAxis type="number" stroke="oklch(0.7 0.02 256)" tick={{ fill: "oklch(0.7 0.02 256)", fontSize: 12 }} />
                <YAxis
                  type="category"
                  dataKey="cause"
                  stroke="oklch(0.7 0.02 256)"
                  width={170}
                  tick={{ fill: "oklch(0.9 0.01 256)", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "oklch(1 0 0 / 5%)" }}
                  contentStyle={{
                    background: "oklch(0.22 0.028 256)",
                    border: "1px solid oklch(1 0 0 / 10%)",
                    borderRadius: 12,
                    color: "oklch(0.96 0.005 250)",
                  }}
                />
                <Bar dataKey="mortos" radius={[0, 8, 8, 0]} animationDuration={1200}>
                  {data.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-2 relative overflow-hidden rounded-xl p-7 bg-[image:var(--gradient-danger)] shadow-[var(--shadow-glow-danger)] text-white">
          <AlertOctagon className="w-8 h-8 mb-4 opacity-90" />
          <p className="text-[11px] uppercase tracking-[0.25em] opacity-80 font-mono">Insight</p>
          <h3 className="mt-1 font-display text-2xl font-bold leading-tight">
            A Descoberta das Pistas Vazias
          </h3>
          <p className="mt-4 text-sm leading-relaxed opacity-95">
            Em 2020, devido ao lockdown, o volume geral de tráfego caiu, mas a letalidade explodiu.
            A <strong>“Velocidade Incompatível”</strong> gerou <strong>117 mortes</strong> em apenas
            <strong> 90 acidentes</strong> — média gravíssima de <strong>1,3 mortes/acidente</strong>.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="bg-black/25 rounded-lg p-3">
              <p className="text-2xl font-display font-bold">117</p>
              <p className="text-[10px] uppercase tracking-wider opacity-80">mortes</p>
            </div>
            <div className="bg-black/25 rounded-lg p-3">
              <p className="text-2xl font-display font-bold">90</p>
              <p className="text-[10px] uppercase tracking-wider opacity-80">acidentes</p>
            </div>
            <div className="bg-black/25 rounded-lg p-3">
              <p className="text-2xl font-display font-bold">1,3</p>
              <p className="text-[10px] uppercase tracking-wider opacity-80">mortes/acid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

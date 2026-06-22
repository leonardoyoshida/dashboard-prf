import { Sun, GitBranch, MoveRight, RotateCcw, Lightbulb } from "lucide-react";

const rules = [
  {
    confidence: 97.42,
    icon: Sun,
    title: "Sol = Pleno Dia",
    text: 'Quando o tempo é de "Sol", os acidentes acontecem em "Pleno dia".',
  },
  {
    confidence: 67.2,
    icon: MoveRight,
    title: "Colisão Transversal",
    text: 'Se a colisão é "Transversal", a esmagadora maioria ocorre de "Pleno Dia" (não à noite).',
  },
  {
    confidence: 63.4,
    icon: GitBranch,
    title: "Colisão Traseira",
    text: 'Colisões "Traseiras" ocorrem maioritariamente com "Céu Claro" e de "Pleno dia".',
  },
  {
    confidence: 62.93,
    icon: RotateCcw,
    title: "Tombamentos",
    text: 'A grande maioria dos "Tombamentos" de veículos ocorre em "Pleno dia".',
  },
];

export function PatternsSection() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-warning font-mono">Secção 04 · Mineração de Padrões</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
          Regras de Associação: <span className="text-warning">A Quebrar o Senso Comum</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Uso de algoritmos de mineração de padrões frequentes (<span className="font-mono text-foreground">FP-Growth</span>)
          traduzidos para regras de negócio e de prevenção.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rules.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.title} className="glass-elevated p-6 group hover:border-warning/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-warning/15 border border-warning/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-warning" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Confiança</p>
                  <p className="font-display text-3xl font-bold text-warning tabular-nums">{r.confidence}%</p>
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              <div className="mt-5 h-1.5 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-[image:var(--gradient-warning)] rounded-full transition-all duration-1000"
                  style={{ width: `${r.confidence}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-xl p-7 bg-[image:var(--gradient-warning)] text-[oklch(0.18_0.04_60)] shadow-[0_0_60px_-15px_oklch(0.78_0.17_70/60%)]">
        <Lightbulb className="w-8 h-8 mb-3" />
        <p className="text-[11px] uppercase tracking-[0.25em] font-mono opacity-80">Insight</p>
        <h3 className="mt-1 font-display text-2xl font-bold">O Paradoxo do Clima</h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed max-w-4xl">
          A IA provou que os <strong>piores acidentes</strong> (traseiras, transversais e tombamentos) ocorrem em
          condições climáticas e de luz <strong>ideais</strong>. Isto comprova matematicamente que a
          <strong> falha humana</strong> (excesso de confiança e velocidade) é mais letal do que o clima adverso.
        </p>
      </div>
    </div>
  );
}
